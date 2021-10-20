import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { auth, db } from '../../../firebase';

const NearbyUsers = ({ route }) => {
	const [nearbyUsers, setNearbyUsers] = useState([]);
	const location = 'New York City';
	//return hashes that meet criteria

	useEffect(() => {
		const unsubscribe = db
			.collection('Users')
			.where('location', '===', location)
			.get()
			.then((snapshot) => {
				setNearbyUsers(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
						return: { id, ...data },
					}))
				);
			});
		return unsubscribe;
	}, []);

	return (
		<View style={styles.container}>
			<Text>{JSON.stringify(nearbyUsers)}</Text>
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
