//React Native Slider
//https://aboutreact.com/react-native-slider/

//import React in our code
import React, { useState } from 'react';
//import all the components we are going to use
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const HoningInScreen = ({ navigation }) => {
	const [ageValue, setAgeValue] = useState(0);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				{/*Text to show slider value*/}
				<Text style={{ color: 'black' }}>AGE FILTER</Text>
				<Text style={{ color: 'black' }}>MIN AGE: {ageValue}</Text>

				{/*Slider with max, min, step and initial value*/}
				<Slider
					maximumValue={100}
					minimumValue={13}
					minimumTrackTintColor="#307ecc"
					maximumTrackTintColor="#000000"
					step={1}
					value={ageValue}
					onValueChange={(ageValue) => setAgeValue(ageValue)}
				/>
			</View>

			<Button
				buttonStyle={styles.button}
				onPress={() => navigation.navigate('Find Nearby Users', { age: ageValue })}
				title="Discover New Friends"
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
		backgroundColor: '#ecf0f1',
	},
	button: {
		backgroundColor: '#1F142E',
		borderColor: '#1F142E',
		borderWidth: 5,
		width: 200,
		margin: 5,
	},
});

export default HoningInScreen;
