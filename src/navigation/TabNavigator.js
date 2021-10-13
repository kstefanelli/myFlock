import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import StackNavigator from './StackNavigator';
import AddInterest from '../screens/AddInterest';
import LoginScreen from '../screens/Login';
import EditProfileScreen from '../screens/EditProfileScreen';
import ProfileView from '../screens/ProfileView';

//whatever you do, MAKE SURE YOU ADD A PERIOD IN BETWEEN TAB.NAVIGATOR ELSE IT WILL NOT COMPILE
//YOU WILL SPEND HOURS WITH A BLACK SCREEN AND NO CONSOLE.LOG NOT KNOWING WHAT HAPPENED
function TabNavigator(props) {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			initialRouteName="Home"
			activeColor="#1f142e"
			inactiveColor='#564a57'
			labeled={true}
			barStyle={{
				// backgroundColor: '#fff',
				alignItems: 'center',
			}}

			screenOptions={({route}) => ({
				tabBarIcon: ({focused, color, size}) => {
					let iconName
					if (route.name === 'home') {
						iconName = focused ? 'home' : 'home'
					} else if (route.name === 'map') {
						iconName = focused ? 'map' : 'map-outline'
					} else if (route.name === 'chat') {
						iconName = focused ? 'chatbox' : 'chatbox-outline'
					} else if (route.name === 'profile') {
						iconName = focused ? 'person' : 'person'
					}
					return <Icon type='ionicon' name={iconName} size={size} color={color} />
				}
			})}
		>

			<Tab.Screen name="home" component={StackNavigator} />
			<Tab.Screen name="add interest" component={AddInterest} />
			<Tab.Screen name="login" component={LoginScreen} />
			<Tab.Screen name="edit profile" component={EditProfileScreen} />
			<Tab.Screen name="profile" component={ProfileView} />
		</Tab.Navigator>
	);
}

export default TabNavigator;
