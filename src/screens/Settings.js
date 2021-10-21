import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfileScreen from './EditProfileScreen';

const Settings = (props) => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator options={{ headerShown: false }}>
			<Stack.Screen name="Edit Profile" component={EditProfileScreen} />
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

export default Settings;
