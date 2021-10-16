import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import AddInterest from '../screens/AddInterest';
import LoginScreen from '../screens/Login';

const StackNavigator = (props) => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator 
		// headerMode="none" 
		options={{ gestureEnabled: false }}>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					title: 'myFlock',
					headerTitle: (props) => <LogoTitle {...props} />,
					headerRight: () => (
						<Button
							onPress={() => navigation.navigate('AddInterest')}
							title="AddInterest"
							color="#00cc00"
						/>
					),
				}}
			/>
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
