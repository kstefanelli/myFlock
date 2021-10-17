/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import FriendsList from '../sub-components/FriendsList';
import { USERS } from '../../data/users';

const ProfileView = () => {

	const user = USERS[0];
	return (
		<View style={styles.profileView}>
			<Text style={styles.profileName}>Meet {user.username}!</Text>
			<Image source={{ uri: user.profileImage }} style={styles.profileImage} />
			<Text>Bio: {user.intro} </Text>
			<Text>Pronouns: {user.pronouns}</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}><Text>Interests: </Text>
                {user.interests.map((interest, index) => (
                    <View key={index} style={{alignItems: 'center'}}>
                        <Text style={{color: '#1f142e'}}>{interest.toLowerCase()}, </Text>
                    </View>
                ))}
            </ScrollView>
			<FriendsList />
			<Text>Location: {user.location.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	profileView: {
		alignItems: 'center',
		backgroundColor: '#e6e8da',
	},
	profileImage: {
		height: 250,
		width: 250,
		marginBottom: 20,
		borderRadius: 125,
		borderWidth: 8,
		borderColor: '#e8984e',
		alignItems: 'center',
	},
	profileName: {
		color: '#1f142e',
		fontStyle: 'italic',
		fontWeight: '800',
		fontSize: 20,
		marginBottom: 15,
	},
});

export default ProfileView;