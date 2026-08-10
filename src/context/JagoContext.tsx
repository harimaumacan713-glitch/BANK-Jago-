import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { onAuthStateChanged, User, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ref, onValue, set, get } from "firebase/database";
import { auth, db, DB_URL } from "../lib/firebase";

export interface Transaction {
  id: string;
  amount: number;
  createdAt: number;
  destination: string;
  source: string;
  status: string;
  transactionId: string;
  type: string;
  userId: string;
}

interface JagoContextType {
  user: User | null;
  userId: string;
  setUserId: (id: string) => void;
  balance: number;
  transactions: Transaction[];
  login: () => void;
  logout: () => void;
}

const DEFAULT_USER_ID = "mEtb4VCeTSXo4BAVMEoucXvj1ZE3";

const JagoContext = createContext<JagoContextType>({
  user: null,
  userId: DEFAULT_USER_ID,
  setUserId: () => {},
  balance: 0,
  transactions: [],
  login: () => {},
  logout: () => {}
});

export function JagoProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserIdState] = useState<string>(() => {
    return localStorage.getItem("jago_userId") || DEFAULT_USER_ID;
  });
  const [balance, setBalance] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const setUserId = (newId: string) => {
    localStorage.setItem("jago_userId", newId);
    setUserIdState(newId);
  };

  useEffect(() => {
    if (!auth) return;
    try {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        if (currentUser?.uid) {
          setUserId(currentUser.uid);
        }
      });
      return () => unsubscribe();
    } catch (e) {
      console.warn("Auth state change listener error:", e);
    }
  }, []);

  useEffect(() => {
    if (!userId) return;

    let isMounted = true;

    // Helper to process transactions & calculate balance cleanly
    const syncData = async (allTransactionsObj: Record<string, Transaction> | null) => {
      if (!isMounted) return;

      if (!allTransactionsObj) {
        setBalance(0);
        setTransactions([]);
        return;
      }

      const validTxs: Transaction[] = [];
      const txEntries = Object.entries(allTransactionsObj);

      for (const [key, tx] of txEntries) {
        if (!tx || typeof tx !== "object") continue;
        
        // Strictly validate required criteria according to requirements
        if (
          tx.type === "withdraw" &&
          tx.source === "garuda_inves" &&
          tx.destination === "jago" &&
          tx.status === "completed" &&
          tx.userId === userId
        ) {
          const txId = tx.transactionId || key;
          validTxs.push({
            ...tx,
            id: key,
            transactionId: txId
          });
        }
      }

      // Sort by date descending
      validTxs.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

      if (isMounted) {
        setTransactions(validTxs);
      }

      // Process double-credit protection via REST or SDK safely
      try {
        // Fetch currently processed transactions for this userId
        const processedRes = await fetch(`${DB_URL}/jago_processed_transactions/${userId}.json`);
        const processedData: Record<string, { amount: number; processedAt: number }> = 
          processedRes.ok ? (await processedRes.json()) || {} : {};

        let newWritesNeeded = false;
        const updatedProcessed = { ...processedData };

        for (const tx of validTxs) {
          const txId = tx.transactionId;
          if (!updatedProcessed[txId]) {
            updatedProcessed[txId] = {
              amount: Number(tx.amount) || 0,
              processedAt: Date.now()
            };
            newWritesNeeded = true;

            // Write to Firebase Realtime Database
            await fetch(`${DB_URL}/jago_processed_transactions/${userId}/${txId}.json`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(updatedProcessed[txId])
            }).catch((err) => console.error("Error marking processed transaction:", err));
          }
        }

        // Calculate total balance from uniquely processed transaction IDs
        let totalBalance = 0;
        for (const txId in updatedProcessed) {
          if (updatedProcessed[txId] && typeof updatedProcessed[txId].amount === "number") {
            totalBalance += updatedProcessed[txId].amount;
          }
        }

        if (isMounted) {
          setBalance(totalBalance);
        }
      } catch (err) {
        console.error("Error calculating processed balance:", err);
      }
    };

    // Listen using Firebase SDK onValue as primary
    let unsubscribeSDK: (() => void) | null = null;
    try {
      const txRef = ref(db, "transactions");
      unsubscribeSDK = onValue(txRef, (snapshot) => {
        if (snapshot.exists()) {
          syncData(snapshot.val());
        } else {
          syncData(null);
        }
      });
    } catch (err) {
      console.warn("Firebase SDK onValue fallback to REST API:", err);
    }

    // Interval fetch as guaranteed backup for continuous realtime sync
    const fetchTxsREST = async () => {
      try {
        const res = await fetch(`${DB_URL}/transactions.json`);
        if (res.ok) {
          const data = await res.json();
          await syncData(data);
        }
      } catch (e) {
        console.error("REST fetch error:", e);
      }
    };

    fetchTxsREST();
    const interval = setInterval(fetchTxsREST, 3000);

    return () => {
      isMounted = false;
      if (unsubscribeSDK) unsubscribeSDK();
      clearInterval(interval);
    };
  }, [userId]);

  const login = async () => {
    const inputUserId = prompt("Masukkan User ID / Email:", userId);
    if (!inputUserId) return;

    if (inputUserId.includes("@") && auth) {
      const password = prompt("Password:");
      if (!password) return;
      try {
        const userCred = await signInWithEmailAndPassword(auth, inputUserId, password);
        setUserId(userCred.user.uid);
        alert("Login Firebase Auth berhasil!");
      } catch (error: any) {
        alert("Login gagal: " + error.message);
      }
    } else {
      setUserId(inputUserId.trim());
      alert("User ID Bank Jago diperbarui ke: " + inputUserId.trim());
    }
  };

  const logout = async () => {
    try {
      if (auth) await signOut(auth);
      setUserId(DEFAULT_USER_ID);
      alert("Logout / Reset ke default User ID berhasil");
    } catch (error: any) {
      alert("Logout gagal: " + error.message);
    }
  };

  return (
    <JagoContext.Provider value={{ user, userId, setUserId, balance, transactions, login, logout }}>
      {children}
    </JagoContext.Provider>
  );
}

export function useJago() {
  return useContext(JagoContext);
}
