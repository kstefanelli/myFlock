//React Native Slider
//https://aboutreact.com/react-native-slider/

//import React in our code
import React, { useState } from 'react';
//import all the components we are going to use
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';

import Slider from '@react-native-community/slider';
import { InterestButton } from '../reusable-components/Button';

const HoningInScreen = ({ navigation }) => {
	const [ageValue, setAgeValue] = useState(0);
	const [radiusValue, setRadiusValue] = useState(0);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				{/*Text to show slider value*/}
				<View styles={styles.pillContainer}>
					<Text style={styles.pillText}>AGE</Text>
					<Text style={styles.pillText}>MIN AGE: {ageValue}</Text>
				</View>
				{/*Slider with max, min, step and initial value*/}
				<Slider
					style={styles.slider}
					maximumValue={50}
					minimumValue={13}
					minimumTrackTintColor="#E8984E"
					maximumTrackTintColor="#E8984E"
					step={1}
					value={ageValue}
					onValueChange={(ageValue) => setAgeValue(ageValue)}
				/>
			</View>
			<View style={styles.container}>
				<Text style={styles.pillText}>RADIUS</Text>
				<Text style={styles.pillText}>MAX RADIUS: {radiusValue} MILES</Text>
				<Slider
					style={styles.slider}
					maximumValue={50}
					minimumValue={0}
					minimumTrackTintColor="#E8984E"
					maximumTrackTintColor="#E8984E"
					step={1}
					value={radiusValue}
					onValueChange={(radiusValue) => setRadiusValue(radiusValue)}
				/>
			</View>
			<View style={styles.container}>
				{/* 				<InterestButton
					text={'DISCOVER NEW FRIENDS IN YOUR NEARBY AREA'}
					backgroundColor={'#E8984E'}
					textColor={'black'}
					buttonStyle={styles.button}
					onPress={() =>
						navigation.navigate('Find Nearby Users', { age: ageValue, radius: radiusValue })
					}
					title="Discover New Friends"
				/> */}
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
		alignSelf: 'center',
		backgroundColor: '#1F142E',
		borderColor: '#bf90b1',
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
		borderColor: '#E94057',
	},
	pillText: {
		color: '#E8984E',
		fontSize: 20,
		letterSpacing: 0.2,
	},
	slider: {
		opacity: 1,
		height: 50,
		marginTop: 10,
		color: '#E8984E',
	},
});

export default HoningInScreen;
