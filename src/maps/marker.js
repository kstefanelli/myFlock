import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const marker = () => {
	const [mapRegion, setmapRegion] = useState({
		/* 		latitude: props.latitude,
		longitude: props.longitude, */
		latitude: 47.6038321,
		longitude: -122.3300624,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});

	let nearbyUsers = [
		{
			latitude: 47.7330388,
			longitude: 122.40371218,
		},
		{
			latitude: 47.69599351,
			longitude: 122.3785803,
		},
	];

	return (
		<View style={styles.container}>
			<MapView
				style={{ alignSelf: 'stretch', height: '100%' }}
				initialRegion={mapRegion}
				showsUserLocation={true}
				onRegionChangeComplete={(region) => setmapRegion(region)}
			>
				<Marker pinColor="red" coordinate={{ latitude: 47.6038321, longitude: -122.3300624 }} />
				<Marker pinColor="red" coordinate={{ latitude: 47.69599351, longitude: -122.3785803 }} />
			</MapView>
		</View>
	);
};

export default marker;

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
