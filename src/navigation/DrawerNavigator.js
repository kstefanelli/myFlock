/* eslint-disable no-unused-vars */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import { View, StyleSheet, Text } from 'react-native';
import InitialLocation from '../maps/InitialLocation';
import UserLocation_Android from '../maps/UserLocation_Android';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/RegisterScreen';
import marker from '../maps/marker';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: true,
			}}
		>
			<Drawer.Screen name="Tabs" component={TabNavigator} />
			<Drawer.Screen name="UserLocation" component={UserLocation_Android} />
			<Drawer.Screen name="InitialLocation" component={InitialLocation} />
			<Drawer.Screen name="ChatScreen" component={ChatScreen} />
			<Drawer.Screen name="Login" component={LoginScreen} />
			<Drawer.Screen name="Register" component={RegisterScreen} />
			<Drawer.Screen name="allMarker" component={marker} />
		</Drawer.Navigator>
	);
}

export default DrawerNavigator;
