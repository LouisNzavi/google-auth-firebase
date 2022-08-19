// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7-3VlNGFp6YaVCUeaDqA-BCK3QZHp7Kc",
  authDomain: "auth-ee18b.firebaseapp.com",
  projectId: "auth-ee18b",
  storageBucket: "auth-ee18b.appspot.com",
  messagingSenderId: "31930837614",
  appId: "1:31930837614:web:a700a79ffe9e608b34d47f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

//signin and shows popup rather than redirecting user to another page
//show error if not signed in
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      // console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
