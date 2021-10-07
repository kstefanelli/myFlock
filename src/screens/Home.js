import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text } from 'react-native';

const Home = (props) => {
	return (
		<View style={styles.container}>
			<Text>Welcome to my app!</Text>
			<Text>This successfully works</Text>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
