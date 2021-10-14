import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import { View, StyleSheet, Text } from 'react-native';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Drawer.Screen name="Tabs" component={TabNavigator} />
		</Drawer.Navigator>
	);
}

export default DrawerNavigator;
