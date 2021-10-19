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
<<<<<<< HEAD
import NestView from '../screens/NestViewScreen';
import AddChatScreen from '../screens/AddChat';
import encode from '../maps/util/encode';
import marker_animate from '../maps/marker_animate';
=======
import marker from '../maps/marker';
>>>>>>> 94644826d5c191800f70af4cf126eb9623872a67

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Drawer.Screen name="Tabs" component={TabNavigator} />
			<Drawer.Screen name="UserLocation_Android" component={UserLocation_Android} />
			<Drawer.Screen name="InitialLocation" component={InitialLocation} />
			<Drawer.Screen name="ChatScreen" component={ChatScreen} />
			<Drawer.Screen name="Login" component={LoginScreen} />
			<Drawer.Screen name="Register" component={RegisterScreen} />
			<Drawer.Screen name="Nest View" component={NestView} />
			<Drawer.Screen name="Add a Chat" component={AddChatScreen} />
			<Drawer.Screen name="Animated Marker" component={marker_animate} />
			<Drawer.Screen name="encode" component={encode} />
		</Drawer.Navigator>
	);
}

export default DrawerNavigator;
