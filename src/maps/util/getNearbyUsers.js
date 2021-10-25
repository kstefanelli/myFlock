/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { auth, db } from '../../../firebase';
import geohash from 'ngeohash';
import getGeohashRange from './getGeoHashRange';
import AnimatedMarker from '../AnimatedMarker';
import TestFile from '../TestFile';
import { Feather} from '@expo/vector-icons';

const getNearbyUsers = ({ navigation, route }) => {
	const [NearbyUsersData, setNearbyUsersData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [location, setLocation] = useState('');
	const [myInterests, setMyInterests] = useState([]);
	const [zoomRadius, setZoomRadius] = useState(5);

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
					/* 					setIsLoading(false);
					 */
				} catch (err) {
					console.log('Reached an error');
				}
			}
			fetchMyUserData();
			const componentWillUnmount = () => setIsLoading(false);
			return componentWillUnmount();

			/* 			//forces the render again
			let timer = setInterval(() => setIsLoading(false), 3000);
			//removes the timer
			return () => clearInterval(timer); */
		}, []);

		/* 		console.log('this is location>', location);
		console.log('interests>', myInterests); */


		//componentDidUpdate - setNearbyUsersData
		useEffect(() => {
			console.log('componentDidUpdate');
			const unsubscribe = () => {
				setIsLoading(true);
				if (location !== '' && NearbyUsersData.length < 1) {
					db.collection('Users')
						/* 						.where('email', '!=', currentEmail)
						 */ .where('location', '==', location)
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
		}, [isLoading]);


	}

	/* 	console.log('nearby users>', NearbyUsersData);
	 */
	function createUsersList() {
		const ListOfUsersData = NearbyUsersData.map((objElement) => ({
			name: objElement.data.name,
			interests: objElement.data.interests,
			location: objElement.data.location,
			latitude: objElement.data.latitude,
			longitude: objElement.data.longitude,
			image: objElement.data.imageUrl,
		}));
		return ListOfUsersData;
	}

	console.log('>>> NearbyUsers List >>>', createUsersList());

	const AnimateMarker = () => {
		return (
			<AnimatedMarker
				ListOfUsersObject={createUsersList()}
				latitude={latitude}
				longitude={longitude}
				zoomRadius={zoomRadius}
			/>
		);
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Find Nearby Users',
			headerStyle: {
				backgroundColor: '#FFF',
			},
			headerTitleStyle: {
				color: 'black',
			},
			headerTintColor: 'white',
			headerRight: () => (
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						width: 80,
						marginRight: 25,
					}}
				>
					<Text style={{fontWeight:"500", fontSize:16}}> Zoom </Text>
					<TouchableOpacity onPress={() => {zoomIn()}} activeOpacity={0.5}>
					<Feather name="zoom-in" size={20} color="black" />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {zoomOut()}} activeOpacity={0.5}>
					<Feather name="zoom-out" size={20} color="black" />
					</TouchableOpacity>
				</View>
			),
		});
	}, [navigation]);

	 const zoomIn = () => {console.log("zoomin called", zoomRadius);
	 zoomRadius<=100? setZoomRadius(zoomRadius + 10) : alert('You cannot zoom in further.')};
	const zoomOut = () => {console.log("zoom out called", zoomRadius);
 zoomRadius > 5? setZoomRadius(zoomRadius - 10) : alert('You cannot zoom out further.')}

	/* 	console.log(isLoading);
	 */ return (
		<View style={styles.container}>
			{NearbyUsersData.length ? AnimateMarker() : <Text>Fetching Nearby Users</Text>}
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
