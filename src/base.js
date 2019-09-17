import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCciskZld_8McqGWldD3Fmdvbwny6-WRGU",
  authDomain: "catch-of-the-day-leo-paini.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-leo-paini.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
