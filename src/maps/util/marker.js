import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
/* import getGeohashRange from './getGeoHashRange';
 */
const marker = () => {
	const [mapRegion, setmapRegion] = useState({
		/* 		latitude: props.latitude,
		longitude: props.longitude, */
		latitude: 40.8150937,
		longitude: -73.9112119,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});

	let nearbyUsers = [
		//Seattle Ron
		{
			latitude: 47.62818032,
			longitude: -122.29212331,
			geohash: '78qyyy6qm',
		},
		//Seattle Emre
		{
			latitude: 47.7330388,
			longitude: -122.40371218,
			geohash: 'y8rp93e9j',
		},
		//Seattle Carlos
		{
			latitude: 47.69599351,
			longitude: -122.3785803,
			geohash: 'y8rp2fc37',
		},
		//NYC Esther
		{
			latitude: 40.8150937,
			longitude: -73.9112119,
			geohash: 'txk81yht0',
		},
		//NYC Ruby
		{
			latitude: 40.64492082,
			longitude: -73.84318539,
			geohash: 'txhx0r4vy',
		},
	];

	const mapMarkers = () => {
		return nearbyUsers.map((element) => (
			<Marker
				pinColor="red"
				coordinate={{ latitude: element.latitude, longitude: element.longitude }}
			/>
		));
	};

	// Use the below code to zoom to particular location with radius.

	return (
		<View style={styles.container}>
			<MapView
				style={{ alignSelf: 'stretch', height: '100%' }}
				initialRegion={mapRegion}
				showsUserLocation={true}
				onRegionChangeComplete={(region) => setmapRegion(region)}
			>
				{mapMarkers()}
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
