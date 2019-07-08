import firebase from "firebase";
const config = {
  /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyBL_0ZfftRFmQToR_6rIGXiBKz-fghNHtI",
  authDomain: "todo-firebase-c33d7.firebaseapp.com",
  databaseURL: "https://todo-firebase-c33d7.firebaseio.com",
  projectId: "todo-firebase-c33d7",
  storageBucket: "",
  messagingSenderId: "479064224900",
  appId: "1:479064224900:web:d807424d087ef340"
};

const fire = firebase.initializeApp(config);
export default fire;
