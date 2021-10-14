import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import { View, StyleSheet, Text } from 'react-native';
import UserLocation from '../maps/UserLocation';
import InitialLocation from '../maps/InitialLocation';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Drawer.Screen name="Tabs" component={TabNavigator} />
			<Drawer.Screen name="UserLocation" component={UserLocation} />
			<Drawer.Screen name="InitialLocation" component={InitialLocation} />
		</Drawer.Navigator>
	);
}

export default DrawerNavigator;
