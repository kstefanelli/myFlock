import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const NearbyUsers = ({ route }) => {
	const { latitude, longitude } = route.params;
	const [nearbyUsers, setNearbyUsers] = useState([]);

	/* 	const [mapRegion, setmapRegion] = useState({
		latitude,
		longitude,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	}); */

	const range = getGeohashRange(latitude, longitude, 10); //return a hash
	//return hashes that meet criteria
	useLayoutEffect(() => {
		const unsubscribe = db
			.collection('UserLocation')
			/* .where('geohash', '>=', range.lower)
			.where('geohash', '<=', range.upper) */
			.onSnapshot((snapshot) => {
				//setNearbyUsers to an array of object elements and map out the following properties
				//[{},{}]
				setNearbyUsers(
					snapshot.docs.map((doc) => ({
						userId: doc.id,
						latitude: doc.latitude,
						longitude: doc.longitude,
					}))
				);
				console.log(snapshot.docs);
			});
		return unsubscribe;
	}, [route]);

	return (
		<View style={styles.container}>
			{nearbyUsers.map((marker) => {
				<Text>
					{latitude}, {longitude}
				</Text>;
			})}
		</View>
	);
};
export default NearbyUsers;

//return hashes that meet criteria
//retrieve associated coordinates
//map those coordinates using a forEach or map

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
