import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import MainNavigator from './src/navigation/MainNavigator';
import Onboarding from './src/components/Onboarding';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const Stack = createStackNavigator();

function App() {
	const isLoggedin = true;

	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				{isSignedIn ? (
					<>
						<DrawerNavigator />
					</>
				) : (
					<Stack.Navigator headerMode="none">
						<>
							<Stack.Screen name="Onboard" component={Onboarding} />
							<Stack.Screen name="HomePage" component={Home} />
							<Stack.Screen name="LogIn" component={LoginScreen} />
						</>
					</Stack.Navigator>
				)}
			</NavigationContainer>
		</>
	);
}

export default App;
