import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';

//whatever you do, MAKE SURE YOU ADD A PERIOD IN BETWEEN TAB.NAVIGATOR ELSE IT WILL NOT COMPILE
//YOU WILL SPEND HOURS WITH A BLACK SCREEN AND NO CONSOLE.LOG NOT KNOWING WHAT HAPPENED
function TabNavigator(props) {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator>
			<Tab.Screen name="MyFlock" component={StackNavigator} />
		</Tab.Navigator>
	);
}

export default TabNavigator;
