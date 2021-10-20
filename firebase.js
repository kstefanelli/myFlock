import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDsujUSleWYLpALXKZmI0h9ZAJLfXNOhwA',
	authDomain: 'meowtalk-b16a3.firebaseapp.com',
	projectId: 'meowtalk-b16a3',
	storageBucket: 'meowtalk-b16a3.appspot.com',
	messagingSenderId: '937916533462',
	appId: '1:937916533462:web:3ea9f2fa7b95d4d1059777',
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
