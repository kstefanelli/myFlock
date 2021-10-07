import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';

//top-level: App > DrawerNavigator > TabNavigator > StackNavigator > screens > components
function App() {
	return (
		<>
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		</>
	);
}

export default App;
