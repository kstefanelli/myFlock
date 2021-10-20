import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './src/navigation/TabNavigator';
import ProfileViewNavigator from './src/screens/ProfileViewNavigator';

const Stack = createStackNavigator();

function App() {
	const isLoggedIn = false;

	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				{isLoggedIn ? (
					<>
						<TabNavigator />
					</>
				) : (
					<ProfileViewNavigator />
				)}
			</NavigationContainer>
		</>
	);
}

export default App;
