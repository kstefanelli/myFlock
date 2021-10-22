/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

const EditProfileScreen = ({navigation}) => {
	const [name, setDisplayName] = useState('');
	const [pronouns, setPronouns] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [bio, setBio] = useState('');
	const [email, setEmail] = useState('');
	const [location, setHometown] = useState('');

//button on line 51 needs to be hooked up with more logic on line 16, defining submit
//touchable opacity link needs to be added to stack navigator
	const submit = (authUser) => {
		auth((authUser) =>{
			authUser.user.updateProfile({
				displayName: name,
				email: email,
				imageUrl: imageUrl || 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200',
			})
		}).then(db.collection('Users').updateProfile({
			name: name,
			pronouns: pronouns,
			imageUrl: imageUrl,
			bio: bio,
			email: email,
			hometown: location,

		}))
		.catch((error) => alert(error.message));

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
					onChangeText={(text) => setDisplayName(text)}
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


				<Input
					placeholder="Email"
					type="text"
					value={email}
					onChangeText={(text) => setDisplayName(text)}
				/>
				{/* this field can be added later */}
				{/* <Input
					placeholder="Hometown"
					type="text"
					value={location}
					onChangeText={(text) => setDisplayName(text)}
				/> */}



			</View>

			<Button buttonStyle={styles.button} onPress={submit} title="Submit" />

			<Text style={{marginTop: 10}}> or </Text>

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
		marginTop: 35,
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

