import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

function UserLocation_Android({ navigation }) {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	let latitude = 37.78825;
	let longitude = -122.4324;

	useEffect(() => {
		(async () => {
			try {
				let { status } = await Location.requestForegroundPermissionsAsync();
				if (status !== 'granted') {
					setErrorMsg('Permission to access location was denied');
					return;
				}

				let location = await Location.getCurrentPositionAsync({});
				navigation.navigate('Animated Marker', {
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
				});
				setLocation(location);
			} catch (e) {
				console.log('>>> error', e);
			}
		})();
	}, []);

	return (
		<View style={styles.container}>
			<Text>{errorMsg ? errorMsg : 'Waiting...'}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	paragraph: {
		fontSize: 18,
		textAlign: 'center',
	},
});

export default UserLocation_Android;
