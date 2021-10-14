import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import AddInterest from '../screens/AddInterest';
import LoginScreen from '../screens/Login';
import EditProfileScreen from '../screens/EditProfileScreen';
import ProfileView from '../screens/ProfileView';
import Home from '../screens/Home';
import { Icon } from 'react-native-elements';

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
					if (route.name === 'home') {
						iconName = focused ? 'home' : 'home';
					} else if (route.name === 'map') {
						iconName = focused ? 'map' : 'map-outline';
					} else if (route.name === 'chat') {
						iconName = focused ? 'chatbox' : 'chatbox-outline';
					} else if (route.name === 'profile') {
						iconName = focused ? 'person' : 'person';
					}
					return <Icon type="ionicon" name={iconName} size={size} color={color} />;
				},
			})}
		>
			<Tab.Screen
				name="HomePage"
				component={Home}
				options={{
					title: 'myFlock',
					headerRight: () => (
						<Button
							onPress={() => navigation.navigate('Add Interest')}
							title="AddInterest"
							color="#00cc00"
						/>
					),
				}}
			/>
			<Tab.Screen name="Add Interest" component={AddInterest} />
			<Tab.Screen name="Edit Profile" component={EditProfileScreen} />
			<Tab.Screen name="Profile View" component={ProfileView} />
		</Tab.Navigator>
	);
}

export default TabNavigator;
