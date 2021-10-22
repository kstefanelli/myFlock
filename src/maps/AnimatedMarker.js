import React, { useEffect, useState } from 'react';
import MapView, { Marker, Circle } from 'react-native-maps';
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

<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream:src/maps/util/AnimatedMarker_old.js
=======
	console.log('deltas= ', LATITUDE_DELTA, LONGITUDE_DELTA);
>>>>>>> Stashed changes:src/maps/AnimatedMarker.js
>>>>>>> Stashed changes
	const initialMapRegion = {
		latitude: 47.7330388,
		longitude: -122.40371218,
		latitudeDelta: LATITUDE_DELTA,
		longitudeDelta: LONGITUDE_DELTA,
	};
<<<<<<< Updated upstream

	const [mapRegion, setmapRegion] = useState(initialMapRegion);
	console.log('>>> mapRegion', mapRegion);
=======
	const [mapRegion, setmapRegion] = useState(initialMapRegion);
	// const [mapRegion, setmapRegion] = useState({
	// 	latitude: latitude,
	// 	longitude: longitude,
	// 	latitudeDelta: LATITUDE_DELTA,
	// 	longitudeDelta: LONGITUDE_DELTA,
	// });
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
	//console.log('>>>', nearbyUsersLocation);
>>>>>>> Stashed changes

	//we can return this function inside the return() because it returns a component
	const mapMarkers = () => {
		//received array of nearby user locations from getNearbyLocations
<<<<<<< Updated upstream
		return nearbyUsersLocation.map((element, idx) => {
=======
		return nearbyUsersLocation.map((element, idx) => (
>>>>>>> Stashed changes
			<Marker
				key={idx}
				pinColor="#bf90b1"
				coordinate={{ latitude: element.latitude, longitude: element.longitude }}
<<<<<<< Updated upstream
			/>;
		});
	};

	/* 	if you are not rendering a component in your function, then you must place it inside of useEffect
	you cannot place it inside the return() */
=======
			/>
		));
	};

	//if you are not rendering a component in your function, then you must place it inside of useEffect
	//you cannot place it inside the return()
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
				style={styles.map}
				initialRegion={initialMapRegion}
=======
				style={{ alignSelf: 'stretch', height: '100%' }}
				initialRegion={mapRegion}
>>>>>>> Stashed changes
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

export default AnimatedMarker;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
<<<<<<< Updated upstream
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
	map: {
		flex: 1,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		alignSelf: 'stretch',
=======
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
>>>>>>> Stashed changes
	},
});
