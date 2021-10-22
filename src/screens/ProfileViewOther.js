/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { Button } from 'react-native-elements'
import { USERS } from '../../data/users';
import { auth, db } from '../../firebase'

const ProfileViewOther = () => {

//line 12 needs to be connected to the database 'Users'
	var viewedUser = USERS[0]

	const [userView, setUserData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	//will write query below to see userView
	//which is filtering to route.params.email passed from a pin on the map
	// useEffect(()=> {
	// 	const unsubscribe = if (userView) {

	// 	}
	// })


	return (
		<View style={styles.profileView}>

			<Text style={styles.profileName}>Meet {viewedUser.displayName}!</Text>
			<Text>({viewedUser.pronouns}) </Text>
			<Image source={{ uri: viewedUser.photoURL }} style={styles.profileImage} />
			<>
				<Text style={{fontWeight: 'bold'}}>Bio: </Text>
				<Text style={{marginLeft: 10, marginRight: 10}}>{viewedUser.bio} </Text>
			</>
			<>


			</>
			<Text style={{fontWeight: 'bold'}}>Interests: </Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginLeft: 20, marginRight: 20}}>
                {viewedUser.interests.map((interest, index) => (
                    <View key={index} style={{alignItems: 'center'}}>
                        <Text style={{color: '#1f142e', marginTop: 15, marginBotom: 15}}> *{interest.toLowerCase()} * </Text>
                    </View>
                ))}
            </ScrollView>
			{/* This next line commented out for the same reason as it is in profileView */}
			{/* <Text>Location: {viewedUser.location.name}</Text> */}
			<Button buttonStyle={styles.button}  title="Start Chatting" />
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