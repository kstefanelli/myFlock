import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import AddInterest from '../screens/AddInterest';

const StackNavigator = (props) => {
	const Stack = createStackNavigator();
	const globalScreenOptions = {
		headerStyle: {
			backgroundColor: 'black',
		},
		headerTitleStyle: { color: 'white' },
		headerTintColor: 'white',
	};
	return (
		<Stack.Navigator screenOptions={globalScreenOptions} options={{ gestureEnabled: false }}>
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#fff",
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default StackNavigator;
