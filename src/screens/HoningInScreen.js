//React Native Slider
//https://aboutreact.com/react-native-slider/

//import React in our code
import React, { useState } from 'react';
//import all the components we are going to use
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
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
					<Text style={styles.pillText}>AGE FILTER</Text>
					<Text style={styles.pillText}>MIN AGE: {ageValue}</Text>
				</View>
				{/*Slider with max, min, step and initial value*/}
				<Slider
					style={styles.slider}
					maximumValue={100}
					minimumValue={13}
					minimumTrackTintColor="#E94057"
					maximumTrackTintColor="#000000"
					step={1}
					value={ageValue}
					onValueChange={(ageValue) => setAgeValue(ageValue)}
				/>
			</View>
			<View style={styles.container}>
				<Text style={styles.pillText}>RADIUS FILTER</Text>
				<Text style={styles.pillText}>MAX RADIUS: {radiusValue}</Text>
				<Slider
					style={styles.slider}
					maximumValue={100}
					minimumValue={0}
					minimumTrackTintColor="#E94057"
					maximumTrackTintColor="#000000"
					step={1}
					value={radiusValue}
					onValueChange={(radiusValue) => setRadiusValue(radiusValue)}
				/>
			</View>
			<View style={styles.container}>
				<InterestButton
					text={'DISCOVER NEW FRIENDS IN YOUR NEARBY AREA'}
					backgroundColor={'#E8984E'}
					textColor={'black'}
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
		backgroundColor: '#E94057',
		borderColor: '#E94057',
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
		color: '#E94057',
		fontSize: 15,
		letterSpacing: 0.2,
	},
	slider: {
		opacity: 1,
		height: 50,
		marginTop: 10,
		color: '#E94057',
	},
});

export default HoningInScreen;
