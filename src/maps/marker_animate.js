import React, { useEffect, useState } from 'react';
import MapView, { Marker, Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import getNearbyLocations from './getNearbyLocations';

const markerToAnimate = ({ route }) => {
	const mapView = React.createRef();
	const radiusMiles = 3; //miles
	const radiusMeters = radiusMiles * 1609.34;
	const { latitude, longitude } = route.params;

	const { width, height } = Dimensions.get('window');
	const ASPECT_RATIO = width / height;
	const LATITUDE_DELTA = Platform.OS === global.platformIOS ? 1.5 : 0.5;
	const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

	const [mapRegion, setmapRegion] = useState({
		latitude,
		longitude,
		latitudeDelta: LATITUDE_DELTA,
		longitudeDelta: LONGITUDE_DELTA,
	});

	//we can return this function inside the return() because it returns a component
	const mapMarkers = () => {
		return getNearbyLocations(mapRegion.latitude, mapRegion.longitude, radiusMiles).map(
			(element, idx) => (
				<Marker
					key={idx}
					pinColor="#bf90b1"
					coordinate={{ latitude: element.latitude, longitude: element.longitude }}
				/>
			)
		);
	};

	//if you are not rendering a component in your function, then you must place it inside of useEffect
	//you cannot place it inside the return()
	useEffect(() => {
		mapView.current.animateToRegion(
			{
				latitude: mapRegion.latitude,
				longitude: mapRegion.longitude,
				latitudeDelta: LATITUDE_DELTA * Number(radiusMiles / 15),
				longitudeDelta: LONGITUDE_DELTA * Number(radiusMiles / 15),
			},
			2000
		);
	}, [mapRegion]);

	return (
		<View style={styles.container}>
			<MapView
				style={{ alignSelf: 'stretch', height: '100%' }}
				initialRegion={mapRegion}
				showsUserLocation={true}
				onRegionChangeComplete={(region) => setmapRegion(region)}
				ref={mapView}
			>
				<Circle
					center={{ latitude: mapRegion.latitude, longitude: mapRegion.longitude }}
					radius={radiusMeters} //in meters
					strokeColor="#4F6D7A"
					strokeWidth={2}
					fillColor={'rgba(230,238,255,0.75)'}
					onRegionChangeComplete={(region) => setmapRegion(region)}
				/>
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
