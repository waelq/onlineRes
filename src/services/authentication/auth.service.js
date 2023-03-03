// import firebase in new virsion like this
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const LoginRequset = (email, password) =>
  firebase.auth().signInWithEmailAndPassword("w@w.com", "123456");
