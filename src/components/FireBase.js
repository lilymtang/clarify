import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCXZ3IgNwq1vczQYOoL_c0cph91RXxnKTw",
  authDomain: "testing-500d7.firebaseapp.com",
  databaseURL: "https://testing-500d7.firebaseio.com",
  projectId: "testing-500d7",
  storageBucket: "testing-500d7.appspot.com",
  messagingSenderId: "583234649390",
  appId: "1:583234649390:web:ecfdc4fc6ee257162b8ebf",
  measurementId: "G-X522CEBVVE"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



export default firebase;