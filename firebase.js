import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  // apiKey: "AIzaSyDsujUSleWYLpALXKZmI0h9ZAJLfXNOhwA",
  // authDomain: "meowtalk-b16a3.firebaseapp.com",
  // projectId: "meowtalk-b16a3",
  // storageBucket: "meowtalk-b16a3.appspot.com",
  // messagingSenderId: "937916533462",
  // appId: "1:937916533462:web:3ea9f2fa7b95d4d1059777",
	// // measurementId: 'G-HMZV51336F',
  // apiKey: 'AIzaSyBJVzvYngL4hY2S3rgTso_0Qw2-37pv4yE',
  // authDomain: 'paw-dates-web.firebaseapp.com',
  // projectId: 'paw-dates-web',
  // storageBucket: 'paw-dates-web.appspot.com',
  // messagingSenderId: '586225927786',
  // appId: '1:586225927786:web:fba6025ee0a16392f26c13'
  apiKey: "AIzaSyBYrr4ybNcEPK4ibf18ZLbCf8UlYr-Enno",
  authDomain: "myflock-1.firebaseapp.com",
  projectId: "myflock-1",
  storageBucket: "myflock-1.appspot.com",
  messagingSenderId: "1077454033359",
  appId: "1:1077454033359:web:eeb9fa9f96c6922c0c82ba",
  measurementId: "G-8VJQ81DEWM"
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
