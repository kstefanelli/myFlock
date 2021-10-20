import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './src/navigation/TabNavigator';
import { auth, db } from './firebase';

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
					<ProfileViewNavigator />
				)}
			</NavigationContainer>
		</>
	);
}

export default App;
