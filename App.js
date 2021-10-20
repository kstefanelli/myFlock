import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import Login from './src/screens/Login';
import RegisterScreen from './src/screens/RegisterScreen';
import ChatScreen from './src/screens/ChatScreen';
import AddInterest from './src/screens/AddInterest';
import TabNavigator from './src/navigation/TabNavigator';
import Map from './src/screens/Map';

const Stack = createStackNavigator();

function App() {
	const isLoggedIn = true;

	return (
		<>
			<StatusBar style="dark" />
			<NavigationContainer>
				{isLoggedIn ? (
					<>
						<TabNavigator />
					</>
				) : (
					<Stack.Navigator headerShown="false">
						<>
							<Stack.Screen name="LogIn" component={Login} />
							<Stack.Screen name="Register" component={RegisterScreen} />
							{/* <Stack.Screen name="Drawer" component={DrawerNavigator} /> */}
							<Stack.Screen name="Map" component={Map} />
						</>
					</Stack.Navigator>
				)}
			</NavigationContainer>
		</>
	);
}

export default App;
