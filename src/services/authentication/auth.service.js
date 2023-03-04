// import firebase in new virsion like this
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const registerRequset = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const logoutRequset = () => firebase.auth().signOut();
