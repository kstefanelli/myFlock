import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBJVzvYngL4hY2S3rgTso_0Qw2-37pv4yE",
  authDomain: "paw-dates-web.firebaseapp.com",
  projectId: "paw-dates-web",
  storageBucket: "paw-dates-web.appspot.com",
  messagingSenderId: "586225927786",
  appId: "1:586225927786:web:fba6025ee0a16392f26c13",
	// measurementId: 'G-HMZV51336F',
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
