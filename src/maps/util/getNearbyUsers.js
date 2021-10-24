import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { auth, db } from '../../../firebase';
import geohash from 'ngeohash';
import getGeohashRange from './getGeoHashRange';
import AnimatedMarker from '../AnimatedMarker';
import TestFile from '../TestFile';

const getNearbyUsers = ({ route }) => {
	const [NearbyUsersData, setNearbyUsersData] = useState([]);
	const [location, setLocation] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [myInterests, setMyInterests] = useState([]);

	const currentEmail =
		auth.currentUser.email.charAt(0).toUpperCase() + auth.currentUser.email.slice(1);
	//GEOHASHING
	const { latitude, longitude } = route.params;
	//encode - need to return my user's specific location
	const myGeohash = geohash.encode(latitude, longitude);
	//range - return nearby geohashes given radius
	const givenRadius = 5;
	//param passed from getCurrentLocation
	const range = getGeohashRange(latitude, longitude, givenRadius);

	//CONSOLE LOGS
	console.log('getNearbyUsers rendered');

	if (!auth.currentUser) {
		return <Text>Please login or sign up to see the map!</Text>;
	} else {
		//componentDidMount - setLocation, setMyInterests
		useEffect(() => {
			console.log('componentDidMount');
			async function fetchMyUserData() {
				try {
					db.collection('Users')
						.where('email', '==', currentEmail)
						.onSnapshot((snapshot) => {
							setLocation(snapshot.docs[0].data().location);
							setMyInterests(snapshot.docs[0].data().interests);
						});
				} catch (err) {
					console.log('Reached an error');
				}
			}
			fetchMyUserData();
			const componentWillUnmount = () => setIsLoading(false);
			return componentWillUnmount();
		}, []);

		/* 		console.log('this is location>', location);
		console.log('interests>', myInterests); */
		//componentDidUpdate - setNearbyUsersData
		useEffect(() => {
			console.log('componentDidUpdate');
			const unsubscribe = () => {
				if (location !== '' && NearbyUsersData.length < 1) {
					db.collection('Users')
						.where('location', '==', location)
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
			};
			return unsubscribe();
		}, [isLoading]);
	}

	const ListOfUsersData = () => {
		NearbyUsersData.map((objElement) => ({
			name: objElement.data.name,
			interests: objElement.data.interests,
			location: objElement.data.location,
			latitude: objElement.data.latitude,
			longitude: objElement.data.longitude,
			image: objElement.data.imageUrl,
		}));
	};

	/* 	console.log('getNearbyUsers', NearbyUsersData);
	 */ console.log('getNearbyUsers count', NearbyUsersData.length);

	console.log('getNearbyUsers array exists', ListOfUsersData.length);

	const AnimateMarker = () => {
		return <TestFile ArrayOfUsers={ListOfUsersData} latitude={latitude} longitude={longitude} />;
	};

	return (
		<View style={styles.container}>
			{ListOfUsersData.length ? AnimateMarker() : <Text>Fetching Nearby Users</Text>}
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
