/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Text, Image } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { auth, db } from '../../firebase';


const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [UID, setUID] = useState("")

	const logOutUser = () => {
		auth.signOut().then(() => {
		db.collection("Users")
  .where("UUID", "==", UID)
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(document) {
     document.ref.update({
		isLoggedIn: false})
})
});
			// navigation.replace('Login')

			alert('You have been logged out!');
		});
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				alert('Hello-logged in!');
				// navigation.navigate("Home")
				navigation.replace("Home")
			}
		});

		return unsubscribe;
	}, []);

	const signIn = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				const UID= user.uid;
				db.collection("Users")
  .where("UUID", "==", UID)
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(document) {
     document.ref.update({
		isLoggedIn: true
 })
 .then(setUID(UID));
    });
  });
			})
			.catch((error) => {
				const errorMessage = error.message;
				alert(errorMessage);
			});
	};

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<StatusBar style="light" />
			<Text h3 style={{ marginTop: 50, textAlign: 'center' }}>
				Welcome Back!
			</Text>
			<FontAwesome5 name="kiwi-bird" size={200} color="black" />

			<View style={styles.inputContainer}>
				<Text h3 style={{ marginBottom: 5 }}>
					Log in to find out where your peeps are at...
				</Text>
				<Input
					placeholder="Email"
					autoFocus
					type="Email"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<Input
					placeholder="Password"
					secureTextEntry
					type="password"
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
			</View>
			<Button buttonStyle={styles.button} onPress={signIn} title="Login" />
			<Button
				buttonStyle={styles.button}
				onPress={() => navigation.navigate('Register')}
				title="Register"
			/>
			<Button buttonStyle={styles.button} onPress={logOutUser} title="Logout - Temp" />
			<View style={{ height: 100 }} />
		</KeyboardAvoidingView>
	);
};

//Styles and colors to be replaced with chosen design colors
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#E6E8DA',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
	},
	inputContainer: {
		width: 300,
	},
	//need to get text color to black
	button: {
		color: 'black',
		backgroundColor: '#e6e8da',
		borderColor: '#e8984e',
		borderWidth: 1,
		width: 200,
		margin: 5,
	},
});

export default LoginScreen;
