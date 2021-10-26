import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { auth, db } from '../../firebase';

import EditProfileScreen from './EditProfileScreen';
import Loading from '../reusable-components/Loading';

const ProfileView = ({ navigation }) => {
	let currentEmail;
	const [userData, setUserData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const logOutUser = () => {
		auth.signOut().then(() => {
			navigation.navigate('Login');
		});
	};
	//checks for auth, calls db and sets state only if auth
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				setIsLoading(false);
				currentEmail =
					auth.currentUser.email.charAt(0).toUpperCase() + auth.currentUser.email.slice(1);
				console.log('calling db');
				db.collection('Users')
					.where('email', '==', currentEmail)
					.onSnapshot((snapshot) => {
						setUserData(
							snapshot.docs.map((doc) => ({
								id: doc.id,
								data: doc.data(),
							}))
						);
					});
			} else {
				setIsLoading(true);
			}
		});
		return unsubscribe;
	}, []);
	//show profile function based on if state is set
	const showProfile = () => {
		if (!isLoading) {
			return (
				<>
					<Text style={styles.profileName}>Hello, {userData?.[0]?.data?.name}! </Text>
					<>
						<Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
							({userData?.[0]?.data?.pronouns})
						</Text>
					</>
					<Image source={{ uri: userData?.[0]?.data?.imageUrl }} style={styles.profileImage} />
					<>
						<Text style={{ fontWeight: 'bold' }}>Age</Text>
						<Text style={{ marginLeft: 10, marginRight: 10 }}>{userData?.[0]?.data?.age} </Text>
					</>
					<>
						<Text style={{ fontWeight: 'bold' }}>About You:</Text>
						<Text style={{ marginLeft: 10, marginRight: 10 }}>{userData?.[0]?.data?.bio} </Text>
					</>
					<Text style={{ fontWeight: 'bold' }}>Interests: </Text>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{userData?.[0]?.data?.interests.map((interest, index) => (
							<View key={index} style={{ alignItems: 'center' }}>
								<Text style={{ color: '#1F142E', marginTop: 15 }}> *{interest}* </Text>
							</View>
						))}
					</ScrollView>
				</>
			);
		} else {
			return (
				<View style={styles.container}>
					<Loading />
				</View>
			);
		}
	};
	console.log('Here’s our test', userData?.[0]?.data?.pronouns);
	return (
		<View style={styles.profileView}>
			{showProfile()}
			<TouchableOpacity
				style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5 }}
				onPress={() => navigation.navigate('Edit Profile', { user: userData })}
			>
				<Text style={{ fontSize: 20, color: '#e8984e', textDecorationLine: 'underline' }}>
					Edit Your Profile
				</Text>
			</TouchableOpacity>
			<Button buttonStyle={styles.button} title="Log Out" onPress={logOutUser} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: '#1F142E',
		borderColor: '#1F142E',
		borderWidth: 5,
		width: 200,
		margin: 5,
	},
	imagestyle: {
		alignItems: 'flex-end',
		height: 15,
		width: 15,
	},
	profileView: {
		alignItems: 'center',
		backgroundColor: '#E6E8DA',
		height: '100%',
	},
	profileImage: {
		height: 250,
		width: 250,
		marginBottom: 20,
		borderRadius: 125,
		borderWidth: 5,
		borderColor: '#E8984E',
		alignItems: 'center',
	},
	profileName: {
		color: '#1F142E',
		fontWeight: '800',
		fontSize: 25,
		marginTop: 20,
		marginBottom: 15,
	},
	interest: {
		position: 'absolute',
		width: 91,
		height: 32,
		left: 142,
		top: 825,
		backgroundColor: '#FFFFFF',
		borderColor: '#E94057',
		borderRadius: 5,
	},
});
export default ProfileView;
