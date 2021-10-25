/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
//{USERS} is only for if you need to populate with dummy data once hooked up, delete this line
import { USERS } from '../../data/users';
import { auth, db } from '../../firebase';
import ProfileViewNavigator from '../navigation/ProfileNavigator';

const ProfileViewOther = ({ navigation, route }) => {
	viewedUser = route.params.user[route.params.idx].data;

	const startNewChat = () => {
		db.collection('chats').doc(thisChatName).set(
			{
				chatName: thisChatName,
			},
			{ merge: true }
		);
		db.collection('chats')
			.doc(thisChatName)
			.update({
				users: db.FieldValue.arrayUnion(auth.currentUser.uid, viewedUser.uid),
			})
			.then(() => {
				navigation.navigate('Chat', {
					user: viewedUser,
				});
			});
	};
	return (
		<View style={styles.profileView}>
			<Text style={styles.profileName}>Meet {viewedUser.name}!</Text>

			<Image source={{ uri: viewedUser.imageUrl }} style={styles.profileImage} />
			<>
				<Text style={{ fontWeight: 'bold' }}>Bio: </Text>
				<Text style={{ marginLeft: 10, marginRight: 10 }}>{viewedUser.bio} </Text>
			</>
			<></>
			<Text style={{ fontWeight: 'bold' }}>Interests: </Text>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={{ marginLeft: 20, marginRight: 20 }}
			>
				{viewedUser.interests.map((interest, index) => (
					<View key={index} style={{ alignItems: 'center' }}>
						<Text style={{ color: '#1f142e', marginTop: 15, marginBottom: 15 }}>
							{' '}
							*{interest.toLowerCase()} *{' '}
						</Text>
					</View>
				))}
			</ScrollView>
			<Button buttonStyle={styles.button} onPress={startNewChat} title="Start Chatting" />
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#1F142E',
		borderColor: '#bf90b1',
		borderWidth: 5,
		width: 200,
		margin: 10,
	},
	imagestyle: {
		alignItems: 'flex-end',
		height: 15,
		width: 15,
	},
	profileView: {
		alignItems: 'center',
		backgroundColor: '#e6e8da',
		height: '100%',
	},
	profileImage: {
		height: 250,
		width: 250,
		marginBottom: 20,
		marginTop: 20,
		borderRadius: 125,
		borderWidth: 5,
		borderColor: '#e8984e',
		alignItems: 'center',
	},
	profileName: {
		color: '#1f142e',
		fontStyle: 'italic',
		fontWeight: '800',
		fontSize: 20,
		marginTop: 10,
		marginBottom: 10,
	},
});

export default ProfileViewOther;

//when creating a chat, you need to keep lines .update ---> merge so that it keeps two arrays to ultimately show you chats you are a participant in on nest view
//const createChat = () => {
// db.collection('chats').doc(thisChatName).set(
// 	{
// 	  chatName: thisChatName,
// 	},
// 	{merge: true}
//   );
//   db.collection('chats')
// 	.doc(thisChatName)
// 	.update(
// 	  {
// 		parties: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email),
// 		photos: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.photoURL),
// 	  },
// 	  {merge: true}
// 	);
//   navigation.navigate('ChatScreen', {chatName: thisChatName});
// };
