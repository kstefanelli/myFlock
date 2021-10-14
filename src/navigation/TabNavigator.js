/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import AddInterest from '../screens/AddInterest';
import LoginScreen from '../screens/Login';
import EditProfileScreen from '../screens/EditProfileScreen';
import ProfileView from '../screens/ProfileView';
import NestViewScreen from '../screens/NestViewScreen'

//whatever you do, MAKE SURE YOU ADD A PERIOD IN BETWEEN TAB.NAVIGATOR ELSE IT WILL NOT COMPILE
//YOU WILL SPEND HOURS WITH A BLACK SCREEN AND NO CONSOLE.LOG NOT KNOWING WHAT HAPPENED
function TabNavigator(props) {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator>
			<Tab.Screen name="StackNavigator" component={StackNavigator} />
			<Tab.Screen name="Add Interest" component={AddInterest} />
			<Tab.Screen name="Login" component={LoginScreen} />
			<Tab.Screen name="Nest View" component={NestViewScreen} />
			<Tab.Screen name="Profile View" component={ProfileView} />
		</Tab.Navigator>
	);
}

export default TabNavigator;
