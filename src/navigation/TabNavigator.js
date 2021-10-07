import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNavigator from './StackNavigator';

function TabNavigator(props) {
	const Tab = createBottomTabNavigator();

	return (
		<TabNavigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tab.Screen name="StackNavigator" component={StackNavigator} />
		</TabNavigator>
	);
}

export default TabNavigator;
