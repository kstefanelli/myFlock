import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCCCbNKwN5wgJ8vCqgeqkl4d-roRkfVe8c',
  authDomain: 'myflock-e10c3.firebaseapp.com',
  projectId: 'myflock-e10c3',
  storageBucket: 'myflock-e10c3.appspot.com',
  messagingSenderId: '559175423203',
  appId: '1:559175423203:web:32f1c4e5c0e64f794ee1d6',
  measurementId: 'G-HMZV51336F',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };