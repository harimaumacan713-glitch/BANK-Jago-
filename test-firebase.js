const admin = require('firebase-admin');
admin.initializeApp({
  databaseURL: 'https://brusa-crypto-garuda-default-rtdb.asia-southeast1.firebasedatabase.app'
});
const db = admin.database();
db.ref('/').once('value').then(snap => {
  console.log("Data keys:", Object.keys(snap.val() || {}));
  if (snap.val() && snap.val().transactions) {
     console.log("Transactions:", Object.keys(snap.val().transactions).length);
  }
  if (snap.val() && snap.val().withdrawals) {
     console.log("Withdrawals:", Object.keys(snap.val().withdrawals).length);
  }
  process.exit(0);
}).catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
