import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { auth, db } from '../../../firebase';
import geohash from 'ngeohash';

import { useFocusEffect } from '@react-navigation/native';
import getGeohashRange from './getGeoHashRange';
import AnimatedMarker from '../AnimatedMarker';
import TestFile from '../TestFile';

const getNearbyUsers = ({ route }) => {
	const [NearbyUsersData, setNearbyUsersData] = useState([]);
	//GEOHASHING
	//encode - need to return my user's specific location
	const { latitude, longitude } = route.params;
	const myGeohash = geohash.encode(latitude, longitude);

	//range - return nearby geohashes given radius
	const givenRadius = 5;
	//param passed from getCurrentLocation
	const range = getGeohashRange(latitude, longitude, givenRadius);
	if (!auth.currentUser) {
		return <Text>Please login or sign up to see the map!</Text>;
	} else {
		useFocusEffect(
			React.useCallback(() => {
				/* 				db.collection('Users')
					.doc(currentUserId)
					.get()
					.then(async (snapshot) => {
						const user = snapshot.data;
						const interests = user.interests;
					}); */
				console.log('useEffect');
				const unsubscribe = db
					.collection('Users')
					.where('location', '==', 'Seattle')
					.onSnapshot((snapshot) => {
						setNearbyUsersData(
							snapshot.docs.map((doc) => ({
								id: doc.id,
								data: doc.data(),
							}))
						);
					});
				return unsubscribe;
			}, [])
		);
	}

	const nearbyUsersLocationArr = NearbyUsersData.map((objElement) => ({
		name: objElement.data.name,
		interests: objElement.data.interests,
		location: objElement.data.location,
		latitude: objElement.data.latitude,
		longitude: objElement.data.longitude,
		image: objElement.data.imageUrl,
	}));

	const AnimateMarker = () => {
		return (
			<AnimatedMarker
				nearbyUsersLocation={nearbyUsersLocationArr}
				latitude={latitude}
				longitude={longitude}
			/>
		);
	};
	console.log('AnimatedMarker nearbyUsers', nearbyUsersLocationArr);

	return (
		<View style={styles.container}>
			{nearbyUsersLocationArr ? AnimateMarker() : <Text>Fetching Nearby Users</Text>}
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
