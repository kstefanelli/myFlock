import React, { useEffect, useState } from 'react';
import MapView, { Marker, Circle, Image } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const AnimatedMarker = (props) => {
	const mapView = React.createRef();
	const radiusMiles = 3; //miles
	const radiusMeters = radiusMiles * 1609.34;

	const { latitude, longitude } = props;
	const { width, height } = Dimensions.get('window');
	const ASPECT_RATIO = width / height;
	const LATITUDE_DELTA = Platform.OS === global.platformIOS ? 1.5 : 0.5;
	const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

	const initialMapRegion = {
		latitude: 47.7330388,
		longitude: -122.40371218,
		latitudeDelta: LATITUDE_DELTA,
		longitudeDelta: LONGITUDE_DELTA,
	};
	const [mapRegion, setmapRegion] = useState(initialMapRegion);
	// const [mapRegion, setmapRegion] = useState({
	// 	latitude: latitude,
	// 	longitude: longitude,
	// 	latitudeDelta: LATITUDE_DELTA,
	// 	longitudeDelta: LONGITUDE_DELTA,
	// });

	useEffect(() => {
		setmapRegion((prevMapRegion) => {
			return {
				...prevMapRegion,
				latitude: latitude,
				longitude: longitude,
			};
		});
	}, [latitude, longitude]);

	const nearbyUsersLocation = props.nearbyUsersLocation;
	console.log('>>>narbyUsersLocation array<<<', nearbyUsersLocation);

	//we can return this function inside the return() because it returns a component
	const mapMarkers = () => {
		//received array of nearby user locations from getNearbyLocations
		return nearbyUsersLocation.map((element, idx) => (
			<Marker
				key={idx}
				pinColor="#bf90b1"
				coordinate={{
					latitude: latitude,
					longitude: longitude,
				}}
				description={element.name}
			/>
		));
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
			<Text>Testing 123</Text>
			{/* 			<MapView
				style={styles.container}
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
			</MapView> */}
		</View>
	);
};

export default AnimatedMarker;

const styles = StyleSheet.create({
	container: {
		alignSelf: 'stretch',
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});
