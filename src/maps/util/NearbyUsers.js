import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { auth, db } from '../../../firebase';
import { useFocusEffect } from '@react-navigation/native';

const NearbyUsers = ({ route }) => {
	const [nearbyUsers, setNearbyUsers] = useState([]);
	const location = 'Seattle';

	if (!auth.currentUser) {
		return <Text>Please Login or Sign Up!</Text>;
	} else {
		useFocusEffect(
			React.useCallback(() => {
				console.log('useEffect NearbyUsers');
				const unsubscribe = db
					.collection('Users')
					.where('location', '==', location)
					.onSnapshot((snapshot) => {
						setNearbyUsers(
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
	console.log(nearbyUsers, 'nearbyUsers');
	return (
		<View style={styles.container}>
			<Text>This is the return {nearbyUsers.location}</Text>
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
