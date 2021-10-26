import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { auth, db } from '../../../firebase';
/* import geohash from 'ngeohash';
import getGeohashRange from './geohash/getGeoHashRange'; */
import AnimatedMarker from '../AnimatedMarker';
import Loading from '../../reusable-components/Loading';

const getNearbyUsers = ({ navigation, route }) => {
	const [NearbyUsersData, setNearbyUsersData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [location, setLocation] = useState('');
	const [myInterests, setMyInterests] = useState([]);
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);

	const { age } = route.params;
	const { radius } = route.params;

	const currentEmail =
		auth.currentUser.email.charAt(0).toUpperCase() + auth.currentUser.email.slice(1);

	useEffect(() => {
		if (!auth.currentUser) {
			return;
		}
		console.log('componentDidUpdate');
		async function fetchMyUserData() {
			try {
				db.collection('Users')
					.where('email', '==', currentEmail)
					.onSnapshot((snapshot) => {
						setLocation(snapshot.docs[0].data().location);
						setMyInterests(snapshot.docs[0].data().interests);
						setLatitude(snapshot.docs[0].data().latitude);
						setLongitude(snapshot.docs[0].data().longitude);
					});
			} catch (err) {
				console.log('Reached an error');
			}
		}
		fetchMyUserData();
		const componentDidUpdate = () => setIsLoading(false);
		return componentDidUpdate();
	}, [currentEmail, auth.currentUser]);

	useEffect(() => {
		if (!auth.currentUser) {
			return;
		}
		console.log('componentDidUpdate');
		const unsubscribe = () => {
			setIsLoading(true);
			if (location !== '' && NearbyUsersData.length < 1 && myInterests.length > 0) {
				db.collection('Users')
					.where('location', '==', location)
					.where('age', '>=', age)
					.where('interests', 'array-contains-any', myInterests)
					.onSnapshot((snapshot) => {
						setNearbyUsersData(
							snapshot.docs.map((doc) => ({
								id: doc.id,
								data: doc.data(),
							}))
						);
					});
			}
			setIsLoading(false);
		};
		return unsubscribe();
	}, [auth.currentUser, age, location, myInterests, NearbyUsersData]);

	if (!auth.currentUser) {
		return <Text>Please login or sign up to see the map!</Text>;
	}

	console.log('>>>getNearbyUsers to pass into AnimateMarker>>>');
	console.log(age, radius);
	return (
		<View style={styles.container}>
			{NearbyUsersData.length ? (
				<AnimatedMarker
					NearbyUsersObject={NearbyUsersData}
					latitude={latitude}
					longitude={longitude}
					radius={radius}
				/>
			) : (
				<Loading />
			)}
		</View>
	);
};
export default getNearbyUsers;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});
