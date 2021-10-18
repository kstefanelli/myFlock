/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

const EditProfileScreen = () => {
	const [pronouns, setPronouns] = useState('');
	const [bio, setBio] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [displayName, setDisplayName] = useState('');

	const submit = () => {};

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<StatusBar style="light" />

			<View style={styles.inputContainer}>
				<Input
					placeholder="Display Name"
					type="text"
					value={displayName}
					onChangeText={(text) => setDisplayName(text)}
				/>

				<Input
					placeholder="Profile Picture Url"
					type="text"
					value={imageUrl}
					onChangeText={(text) => setImageUrl(text)}
				/>

				<Input placeholder="Bio" type="text" value={bio} onChangeText={(text) => setBio(text)} />

				<Input
					placeholder="Pronouns"
					type="text"
					value={pronouns}
					onChangeText={(text) => setPronouns(text)}
				/>

			</View>
			<Button buttonStyle={styles.button} onPress={submit} title="Add or Remove Interests" />
			<Button buttonStyle={styles.button} onPress={submit} title="Submit" />
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