import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AddInterest from '../screens/AddInterest';
import LoginScreen from '../screens/Login';
import Map from '../screens/Map';

const StackNavigator = (props) => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator headerShown="false" options={{ gestureEnabled: false }}>
			<Stack.Screen
				name="Map"
				component={Map}
				options={{
					title: 'myFlock',
					headerTitle: (props) => <LogoTitle {...props} />,
					headerRight: () => (
						<Button
							onPress={() => navigation.navigate('AddInterest')}
							title="terest"
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
