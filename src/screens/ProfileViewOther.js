/* eslint-disable no-unused-vars */

import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';

import {auth, db} from '../../firebase';
import ProfileViewNavigator from '../navigation/ProfileNavigator';
import * as firebase from 'firebase';

const ProfileViewOther = ({navigation, route}) => {
  const viewedUser = route.params.user[route.params.idx].data;
  const thisChatName = Math.floor(Math.random() * 10000).toString();

	const currentEmail =
	auth.currentUser.email.charAt(0).toUpperCase() + auth.currentUser.email.slice(1);

  console.log('user>', viewedUser);

  const startNewChat = () => {
    db.collection('chats').doc(thisChatName).set(
      {
        chatName: thisChatName,
      },
      {merge: true}
    );
    db.collection('chats')
      .doc(thisChatName)
      .update({
        parties: firebase.firestore.FieldValue.arrayUnion(currentEmail, viewedUser.email),
        photos: firebase.firestore.FieldValue.arrayUnion(
          auth.currentUser.photoURL,
          viewedUser.imageUrl
        ),
      });

    navigation.navigate('ChatScreen', {chatName: thisChatName});
  };
  return (
    <View style={styles.profileView}>
      {/* <Text>hi</Text> */}
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
const createChat = () => {
  db.collection('chats').doc(thisChatName).set(
    {
      chatName: thisChatName,
    },
    {merge: true}
  );
  db.collection('chats')
    .doc(thisChatName)
    .update(
      {
        parties: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email),
        photos: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.photoURL),
      },
      {merge: true}
    );
  navigation.navigate('ChatScreen', {chatName: thisChatName});
};
