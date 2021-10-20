/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import UserLocation_Android from '../maps/UserLocation_Android';
import InitialLocation from '../maps/InitialLocation';
import { createStackNavigator } from '@react-navigation/stack';
import marker_animate from '../maps/marker_animate';

const Map = (props) => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator options={{ headerShown: false }}>
			<Stack.Screen name="User Location" component={UserLocation_Android} />
			<Stack.Screen name="Animated Marker" component={marker_animate} />
			<Stack.Screen name="Initial Location" component={InitialLocation} />
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
