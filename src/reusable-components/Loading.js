import React from 'react';
import { Dimensions, View, Image, StyleSheet, Text } from 'react-native';

const SCREENSIZE = Dimensions.get('screen');

const Loading = () => {
	return (
		<View style={styles.container}>
			<Image style={styles.icon} source={require('../../assets/supplementary_images/bird.png')} />
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
		resizeMode: 'contain',
		width: SCREENSIZE.width * 0.25,
		height: SCREENSIZE.width * 0.25,
	},
});
export default Loading;
