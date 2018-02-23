import Rebase from "re-base";
import firebase from "firebase";
import FIREBASE_CONFIG from "./firebase.config";

const {
  apiKey,
  authDomain,
  databaseURL,
  storageBucket,
  messagingSenderId
} = FIREBASE_CONFIG;

const app = firebase.initializeApp({
  apiKey,
  authDomain,
  databaseURL,
  storageBucket,
  messagingSenderId
});

const base = Rebase.createClass(app.database());

export { app };

export default base;
