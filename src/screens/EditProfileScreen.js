/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { auth, db } from '../../firebase';

const EditProfileScreen = ({ navigation }) => {
	const {user, logout } = useContext(AuthContext)
	const [name, setName] = useState('');
	const [pronouns, setPronouns] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [bio, setBio] = useState('');

	const getUser = async() => {
		const currentUser = await db.collection('Users').doc(user.email).get().then((documentSnapshot) => {
			if(documentSnapshot.exists) {
				console.log("User Data: ", documentSnapshot.data())
				const data = documentSnapshot.data();
				setName(data.name);
				setPronouns(data.pronouns);
				setImageUrl(data.imageUrl);
				setBio(data.bio);
			}

		})
	const submit = (profile) => {
		db.collection('Users').doc(user.email).update({
			name: name,
			imageUrl: imageUrl,
			bio: bio,
			pronouns: pronouns,
		})
		.then(() => {
			console.log("Profile Updated");
			navigation.navigate('Profile');
		})
		.catch((error)=> alert(error.message)).then(()=> navigation.navigate('Profile'));;

		//if user is logged in, update their profile
		// db.collection('Users').doc(userRef).update({
		// 	name: name,
		// 	imageUrl: imageUrl,
		// 	bio: bio,
		// 	pronouns: pronouns,
		// })
		// .catch((error)=> alert(error.message)).then(()=> navigation.navigate('Profile'));
	};

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<StatusBar style="light" />
			<Text style={styles.topTitle}>Shake your tail-feathers</Text>
			<Text style={{ marginBottom: 15 }}>Update your profile here!</Text>
			<View style={styles.inputContainer}>
				<Input
					placeholder="Name"
					type="text"
					value={name}
					onChangeText={(text) => setName(text)}
				/>

				<Input
					placeholder="Pronouns"
					type="text"
					value={pronouns}
					onChangeText={(text) => setPronouns(text)}
				/>

				<Input
					placeholder="Profile Picture Url"
					type="text"
					value={imageUrl}
					onChangeText={(text) => setImageUrl(text)}
				/>

				<Input placeholder="Bio" type="text" value={bio} onChangeText={(text) => setBio(text)} />
			</View>

			<Button buttonStyle={styles.button} onPress={submit} title="Submit" />

			<TouchableOpacity
				style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5 }}
				onPress={() => navigation.navigate('Add Interest')}
			>
				<Text style={{ fontSize: 20, color: '#e8984e', textDecorationLine: 'underline' }}>
					Add Interests
				</Text>
			</TouchableOpacity>
			<View style={{ height: 100 }} />
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#e6e8da',
		padding: 20,
	},
	topTitle: {
		alignItems: 'center',
		padding: 8,
		fontSize: 25,
		color: '#1f142e',
	},
	inputContainer: {
		width: 300,
	},
	button: {
		backgroundColor: '#1F142E',
		borderColor: '#bf90b1',
		borderWidth: 5,
		width: 200,
		margin: 5,
	},
});

export default EditProfileScreen;

//note for Audrey useEffect(() => {
// auth.onAuthStateChanged((authUser) => {
// 	if (authUser) {
// 	  setIsLoggedIn(false)
//   alert('You have been logged out of myFlock!')
//   redirect to login;
