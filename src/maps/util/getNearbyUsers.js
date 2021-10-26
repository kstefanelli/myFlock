import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { auth, db } from '../../../firebase';
/* import geohash from 'ngeohash';
import getGeohashRange from './geohash/getGeoHashRange'; */
import AnimatedMarker from '../AnimatedMarker';
import Loading from '../../reusable-components/Loading';

const getNearbyUsers = ({ route }) => {
	const [NearbyUsersData, setNearbyUsersData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [location, setLocation] = useState('');
	const [myInterests, setMyInterests] = useState([]);
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);

	const currentEmail =
		auth.currentUser.email.charAt(0).toUpperCase() + auth.currentUser.email.slice(1);
	//GEOHASHING
	/* 	const { latitude, longitude } = route.params;
	 */ /* 	//encode - need to return my user's specific location
	const myGeohash = geohash.encode(latitude, longitude);
	//range - return nearby geohashes given radius
	const givenRadius = 5;
	//param passed from getCurrentLocation
	const range = getGeohashRange(latitude, longitude, givenRadius); */

	const { age } = route.params;

	useEffect(() => {
		if (!auth.currentUser) {
			return;
		}
		console.log('componentDidMount');
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
		const componentWillUnmount = () => setIsLoading(false);
		return componentWillUnmount();
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
					/* 					.where('email', '!=', currentEmail)
					 */ .where('location', '==', location)
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

	console.log('>>>getNearbyUsers to pass into AnimateMarker>>>', NearbyUsersData);

	return (
		<View style={styles.container}>
			{NearbyUsersData.length ? (
				<AnimatedMarker
					NearbyUsersObject={NearbyUsersData}
					latitude={latitude}
					longitude={longitude}
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
