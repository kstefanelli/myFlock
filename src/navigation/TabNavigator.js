/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {Icon} from 'react-native-elements'
import ProfileView from '../screens/ProfileView';
import NestViewScreen from '../screens/NestViewScreen';
import UserLocation from '../maps/UserLocation'
import AddChatScreen from '../screens/AddChat';
import Icon from 'react-native-vector-icons/FontAwesome5'

//whatever you do, MAKE SURE YOU ADD A PERIOD IN BETWEEN TAB.NAVIGATOR ELSE IT WILL NOT COMPILE
//YOU WILL SPEND HOURS WITH A BLACK SCREEN AND NO CONSOLE.LOG NOT KNOWING WHAT HAPPENED
function TabNavigator(props) {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			initialRouteName="Home"
			activeColor="#1f142e"

			inactiveColor="#564a57"

			labeled={true}
			barStyle={{
				// backgroundColor: '#fff',
				alignItems: 'center',
			}}

			options={{ headerShown: false }}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'Profile') {
						iconName = focused ? 'user-alt' : 'user-alt';
					} else if (route.name === 'Map') {
						iconName = focused ? 'map-marker-alt' : 'map-marker-alt';
					} else if (route.name === 'Nest View') {
						iconName = focused ? 'feather-alt' : 'feather-alt';
					}
					return <Icon type="ionicon" name={iconName} size={size} color={color} />;
				},
			})}
		>
			<Tab.Screen
				name="Profile"
				component={ProfileView}
				options={{
					title: 'Profile',
					headerRight: () => (
						<Button
							onPress={() => navigation.navigate('Edit Profile')}
							title='Edit Profile'
							color="#00cc00"
						/>
					),
				}}
			/>
			<Tab.Screen name="Map" component={UserLocation} /> 
			<Tab.Screen
				name="Nest View"
				component={NestViewScreen}
				options={{
					title: 'Nest View',
					headerRight: () => (
						<Button
							onPress={() => navigation.navigate('Add a new chat')}
							title='Add Chat'
							color="#00cc00"
						/>
					),
				}}
			/>
			

		</Tab.Navigator>
	);
}

export default TabNavigator;
