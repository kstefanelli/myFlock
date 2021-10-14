import React, { useState } from 'react';
import { Image, Text, TextInput, StyleSheet, TouchableOpacity, View } from 'react-native';

const Register = ({ navigation }) => {
	const onRegisterPress = () => {
		navigation.navigate('Onboard');
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={() => onRegisterPress()}>
				<Text style={styles.buttonTitle}>Create account</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Register;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#E6E8DA',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
	},
});
