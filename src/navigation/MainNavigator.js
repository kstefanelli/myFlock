import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';

//top-level: App > DrawerNavigator > TabNavigator > StackNavigator > screens > components
function MainNavigator() {
	return (
		<>
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		</>
	);
}

export default MainNavigator;
