import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Loading = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.icon} source={require('../../assets/icon.png')} />
			<Text>Loading App</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	icon: {
		width: 50,
		height: 50,
		resizeMode: 'contain',
	},
});
export default Loading;
