import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import getNearbyLocations from './getNearbyLocations';

const markerToAnimate = () => {
	const mapView = React.createRef();

	const [mapRegion, setmapRegion] = useState({
		/* 		latitude: props.latitude,
		longitude: props.longitude, */
		latitude: 47.6038321,
		longitude: -122.3300624,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});

	const { width, height } = Dimensions.get('window');
	const ASPECT_RATIO = width / height;
	const LATITUDE_DELTA = Platform.OS === global.platformIOS ? 1.5 : 0.5;
	const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
	ref = { mapView };

	// let nearbyUsers = getNearbyLocations(mapRegion.latitude, mapRegion.longitude);

	//we can return this function inside the return() because it returns a component
	const mapMarkers = () => {
		return getNearbyLocations(mapRegion.latitude, mapRegion.longitude).map((element, idx) => (
			<Marker
				key={idx}
				pinColor="red"
				coordinate={{ latitude: element.latitude, longitude: element.longitude }}
			/>
		));
	};

	//if you are not rendering a component in your function, then you must place it inside of useEffect
	//you cannot place it inside the return()
	useEffect(() => {
		const radius = 5;
		mapView.current.animateToRegion(
			{
				latitude: mapRegion.latitude,
				longitude: mapRegion.longitude,
				latitudeDelta: LATITUDE_DELTA * Number(radius / 15),
				longitudeDelta: LONGITUDE_DELTA * Number(radius / 15),
			},
			2000
		);
	}, [mapRegion, mapView.current]);

	// Use the below code to zoom to particular location with radius.

	//animateToRegion	region: Region, duration: Number (ms)
	// const animateMap = (radius) => {
	// 	return mapView.current.animateToRegion(
	// 		{
	// 			latitude: mapRegion.latitude,
	// 			longitude: mapRegion.longitude,
	// 			latitudeDelta: LATITUDE_DELTA * Number(radius / 15),
	// 			longitudeDelta: LONGITUDE_DELTA * Number(radius / 15),
	// 		},
	// 		2000
	// 	);
	// };

	return (
		<View style={styles.container}>
			<MapView
				style={{ alignSelf: 'stretch', height: '100%' }}
				initialRegion={mapRegion}
				showsUserLocation={true}
				onRegionChangeComplete={(region) => setmapRegion(region)}
				ref={mapView}
			>
				{mapMarkers()}
			</MapView>
		</View>
	);
};

export default markerToAnimate;

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
