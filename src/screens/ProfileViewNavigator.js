/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileView from './ProfileView';
import LoginScreen from './Login';
import RegisterScreen from './RegisterScreen';
import TabNavigator from '../navigation/TabNavigator';

//ProfileView will show Tabs
//showTabNavigator --> home will be Profile
const ProfileViewNavigator = (props) => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<>
				<Stack.Screen name="LogIn" component={LoginScreen} />
				<Stack.Screen name="Register" component={RegisterScreen} />
				<Stack.Screen name="Tab" component={TabNavigator} />
			</>
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

export default ProfileViewNavigator;
