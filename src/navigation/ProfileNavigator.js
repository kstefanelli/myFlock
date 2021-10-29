import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AddInterest from '../screens/AddInterest';
import ProfileView from '../screens/ProfileView';
import EditProfileScreen from '../screens/EditProfileScreen';
import Map from '../screens/Map';
import ProfileViewOther from '../screens/ProfileViewOther';

const ProfileNavigator = (props) => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Profile View" component={ProfileView} />
			<Stack.Screen name="Edit Profile" component={EditProfileScreen} />
			<Stack.Screen name="Add Interest" component={AddInterest} />
			<Stack.Screen name="Discover Users" component={Map} />
		</Stack.Navigator>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#fff",
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default ProfileNavigator;
