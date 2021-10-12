/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import {} from 'react-native';

const EditProfileScreen = () => {
	const [pronouns, setPronouns] = useState('');
	const [bio, setBio] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const submit = () => {};

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<StatusBar style="light" />

			<Text h3 style={{ marginBottom: 50 }}>
				Edit Profile
			</Text>
			<View style={styles.inputContainer}>
				<Input
					placeholder="Pronouns"
					autofocus
					type="text"
					value={pronouns}
					onChangeText={(text) => setPronouns(text)}
				/>

				<Input placeholder="Bio" type="text" value={bio} onChangeText={(text) => setBio(text)} />

				<Input
					placeholder="Profile Picture Url"
					type="text"
					value={imageUrl}
					onChangeText={(text) => setImageUrl(text)}
				/>
			</View>
			<Button buttonStyle={styles.button} onPress={submit} title="Submit" />
			<View style={{ height: 100 }} />
		</KeyboardAvoidingView>
	);
};

export default EditProfileScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
	},
	inputContainer: {
		width: 300,
	},
	button: {
		borderColor: '#E8984E',
		borderWidth: 5,
		width: 200,
		margin: 5,
	},
});
