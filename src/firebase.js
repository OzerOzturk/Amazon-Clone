import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAe56Tipsj4Md0-mYApP-y2g2ono4Tp8YM",
  authDomain: "amaznclone2022.firebaseapp.com",
  projectId: "amaznclone2022",
  storageBucket: "amaznclone2022.appspot.com",
  messagingSenderId: "235045523680",
  appId: "1:235045523680:web:c15f9c0cba00c931614085",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
