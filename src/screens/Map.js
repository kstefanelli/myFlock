/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import getCurrentLocation from '../maps/getCurrentLocation';
import { createStackNavigator } from '@react-navigation/stack';
import AnimatedMarker from '../maps/AnimatedMarker';
import getNearbyUsers from '../maps/util/getNearbyUsers';
import TestFile from '../maps/TestFile';
import ProfileViewOther from './ProfileViewOther';

const Map = (props) => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator options={{ headerShown: false }}>
			<Stack.Screen name="Get Current Location" component={getCurrentLocation} />
			<Stack.Screen name="Find Nearby Users" component={getNearbyUsers} />
			<Stack.Screen name="Animated Marker" component={AnimatedMarker} />
			<Stack.Screen name="Other Profile Views" component={ProfileViewOther} />
			<Stack.Screen name="TestFile" component={TestFile} />
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Map;
