  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
  import { getFirestore , collection , addDoc , getDocs , updateDoc , doc , getDoc , deleteDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyAZv0hrgzBpWOtVf2YHPDK69Syc3n1izMA",
    authDomain: "to-do-app-b2da7.firebaseapp.com",
    projectId: "to-do-app-b2da7",
    storageBucket: "to-do-app-b2da7.firebasestorage.app",
    messagingSenderId: "496923240551",
    appId: "1:496923240551:web:2aeff5847c9d7f43f50cc2",
    measurementId: "G-WXQZ00SL2T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);


  export{auth , createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut , db , collection , addDoc , getDocs , updateDoc , doc , getDoc , deleteDoc } 