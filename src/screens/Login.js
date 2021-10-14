/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../../firebase';

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const logOutUser = () => {
		auth.signOut().then(() => {
			// navigation.replace('Login')
			alert('You have been logged out!');
		});
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				alert('You are logged in!');
			}
			navigation.navigate('HomePage', { email, password });
		});

		return unsubscribe;
	}, []);

	const signIn = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorMessage = error.message;
				alert(errorMessage);
			});
	};

	//image to be replaced with murmuration image
	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<StatusBar style="light" />
			<Image
				source={{
					uri: 'https://images.unsplash.com/photo-1612814621951-b24b753ca716?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
				}}
				style={{
					width: 250,
					height: 250,
					marginTop: 10,
					marginBottom: 10,
					marginRight: 10,
					marginLeft: 10,
					borderRadius: 50,
					padding: 10,
				}}
			/>
			<View style={styles.inputContainer}>
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
	button: {
		backgroundColor: '#1F142E',
		borderColor: '#1F142E',
		borderWidth: 5,
		width: 200,
		margin: 5,
	},
});

export default LoginScreen;
