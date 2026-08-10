import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { onAuthStateChanged, User, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ref, onValue, set, get } from "firebase/database";
import { auth, db } from "../lib/firebase";

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

    // Helper to sync processed records & calculate balance using SDK only
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
        
        // Filter transactions for this user from garuda_inves to jago
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

      // Read processed transactions via SDK
      try {
        const processedRef = ref(db, `jago_processed_transactions/${userId}`);
        const snapshot = await get(processedRef);
        const processedData: Record<string, { amount: number; processedAt: number }> = 
          snapshot.exists() ? snapshot.val() : {};

        const updatedProcessed = { ...processedData };

        for (const tx of validTxs) {
          const txId = tx.transactionId;
          if (!updatedProcessed[txId]) {
            const item = {
              amount: Number(tx.amount) || 0,
              processedAt: Date.now()
            };
            updatedProcessed[txId] = item;

            // Save to Firebase RTDB via SDK
            set(ref(db, `jago_processed_transactions/${userId}/${txId}`), item).catch((err) =>
              console.error("Error setting processed tx:", err)
            );
          }
        }

        // Total up unique processed amounts
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
        console.error("Error calculating balance via SDK:", err);
      }
    };

    // Realtime SDK listener
    const txRef = ref(db, "transactions");
    const unsubscribe = onValue(
      txRef,
      (snapshot) => {
        if (snapshot.exists()) {
          syncData(snapshot.val());
        } else {
          syncData(null);
        }
      },
      (error) => {
        console.error("Realtime DB listener error:", error);
      }
    );

    return () => {
      isMounted = false;
      unsubscribe();
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
