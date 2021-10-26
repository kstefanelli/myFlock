//React Native Slider
//https://aboutreact.com/react-native-slider/

//import React in our code
import React, { useState } from 'react';
//import all the components we are going to use
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const HoningInScreen = ({ navigation }) => {
	const [ageValue, setAgeValue] = useState(0);
	const [radiusValue, setRadiusValue] = useState(0);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				{/*Text to show slider value*/}
				<View styles={styles.pillContainer}>
					<Text style={styles.pillText}>AGE FILTER</Text>
					<Text style={styles.pillText}>MIN AGE: {ageValue}</Text>
				</View>
				{/*Slider with max, min, step and initial value*/}
				<Slider
					style={styles.slider}
					maximumValue={100}
					minimumValue={13}
					minimumTrackTintColor="#307ecc"
					maximumTrackTintColor="#000000"
					step={1}
					value={ageValue}
					onValueChange={(ageValue) => setAgeValue(ageValue)}
				/>
			</View>
			<View style={styles.container}>
				<Text style={{ color: 'black' }}>RADIUS FILTER</Text>
				<Text style={{ color: 'black' }}>MAX RADIUS: {radiusValue}</Text>
				<Slider
					style={styles.slider}
					maximumValue={100}
					minimumValue={0}
					minimumTrackTintColor="#307ecc"
					maximumTrackTintColor="#000000"
					step={1}
					value={radiusValue}
					onValueChange={(radiusValue) => setRadiusValue(radiusValue)}
				/>
			</View>
			<View style={styles.container}>
				<Button
					buttonStyle={styles.button}
					onPress={() =>
						navigation.navigate('Find Nearby Users', { age: ageValue, radius: radiusValue })
					}
					title="Discover New Friends"
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
	},
	button: {
		backgroundColor: '#1F142E',
		borderColor: '#FFFFFF',
		borderWidth: 5,
		width: 200,
		margin: 5,
	},
	pillContainer: {
		// make the container as big as the text
		alignSelf: 'flex-start',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 20,
		marginVertical: 4,
		marginHorizontal: 4,
		borderRadius: 50,
		borderColor: '#1F142E',
	},
	pillText: {
		color: '#000',
		fontSize: 15,
		letterSpacing: 0.2,
	},
	slider: {
		opacity: 1,
		height: 50,
		marginTop: 10,
		color: '#e6e8da',
	},
});

export default HoningInScreen;
