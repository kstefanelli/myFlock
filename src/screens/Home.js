/* eslint-disable no-unused-vars */
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const Home = (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Welcome to my app!</Text>
			<Text>This successfully works</Text>
		</SafeAreaView>
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
