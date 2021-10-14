import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function UserLocation() {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				setErrorMsg('Permission to access location was denied');
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
		})();
	}, []);

	let text = 'Waiting..';
	if (errorMsg) {
		text = errorMsg;
	} else if (location) {
		text = JSON.stringify(location);

		console.log(text);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.paragraph}>{text}</Text>
			{/* <Text style={styles.location}>You're located at {location.coords.latitude}, {location.coords.longitude}</Text> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
	},
	location: {
		color: 'blue',
	},
	paragraph: {
		color: 'red',
	},
});

//works on android and ios emulator

//location looks like:
// {"coords": {
//   "altitude":0,
//   "altitudeAccuracy":-1,
//   "latitude":37.785834,
//   "accuracy":5,
//   "longitude":-122.406417,
//   "heading":-1,
//   "speed":-1},
//   "timestamp":1634175482491.719
// }
