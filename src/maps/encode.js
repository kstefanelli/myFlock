import React from 'react';
import geohash from 'ngeohash';
import { Text, View } from 'react-native';

const encode = () => {
	const latitude = 47.62818032;
	const longitude = 122.29212331;
	const hash = geohash.encode(latitude, longitude);

	return (
		<View>
			<Text>{hash}</Text>
		</View>
	);
};

export default encode;
