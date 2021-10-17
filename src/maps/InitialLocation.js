import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const InitialLocation = ({ route }) => {
	console.log(route.params, 'InitialLocation');
	const { latitude, longitude } = route.params;
	const [mapRegion, setmapRegion] = useState({
		/* 		latitude: props.latitude,
		longitude: props.longitude, */
		latitude,
		longitude,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});
	return (
		<View style={styles.container}>
			<MapView style={{ alignSelf: 'stretch', height: '100%' }} region={mapRegion} />
		</View>
	);
};
export default InitialLocation;
/* class mapView extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={{ flex: 1 }}
					region={{
						latitude: 42.882004,
						longitude: 74.582748,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
					showsUserLocation={true}
				/>
			</View>
		);
	}
} */

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
