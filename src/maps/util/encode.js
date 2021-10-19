import React from 'react';
import geohash from 'ngeohash';
import { Text, View } from 'react-native';

const encode = () => {
	let nearbyUsers = [
		//Seattle Ron
		{ latitude: 47.61909431141428, longitude: -122.34105623381305, geohash: 'c23nbhccq' },
		{
			latitude: 47.62818032,
			longitude: -122.29212331,
			geohash: 'c23ncnmw6',
		},
		//Seattle Emre
		{
			latitude: 47.7330388,
			longitude: -122.40371218,
			geohash: 'c22zw9s34',
		},
		//Seattle Carlos
		{
			latitude: 47.69599351,
			longitude: -122.3785803,
			geohash: 'c22zr4y9k',
		},
		//NYC Esther
		{
			latitude: 40.8150937,
			longitude: -73.9112119,
			geohash: 'dr72nn5mp',
		},
		//NYC Ruby
		{
			latitude: 40.64492082,
			longitude: -73.84318539,
			geohash: 'dr5rpxjjc',
		},
		{
			latitude: 40.68062402,
			longitude: -73.95971607,
			geohash: 'dr5rmj8jv',
		},
	];

	//shorthand without return statement
	const latitude = nearbyUsers.map((element) => element.latitude);
	//arrow function with return statement
	const longitude = nearbyUsers.map((element) => {
		return element.longitude;
	});
	const hashArray = [];
	for (let i = 0; i < latitude.length; i++) {
		hashArray.push(geohash.encode(latitude[i], longitude[i]));
	}
	console.log(JSON.stringify(hashArray));
	return (
		<View>
			<Text>My geohash is: {JSON.stringify(hashArray)} </Text>
		</View>
	);
};

export default encode;
