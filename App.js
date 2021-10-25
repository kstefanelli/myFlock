import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './src/navigation/TabNavigator';
import { auth, db } from './firebase';
import ProfileViewNavigator from './src/screens/LogInNavigator';
import LogInNavigator from './src/screens/LogInNavigator';

const Stack = createStackNavigator();

function App() {
	let isLoggedIn = auth.currentUser ? true : false;

	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				{isLoggedIn ? (
					<>
						<TabNavigator />
					</>
				) : (
					<LogInNavigator />
				)}
			</NavigationContainer>
		</>
	);
}

export default App;
