import React from 'react';
import geohash from 'ngeohash';
import { Text, View } from 'react-native';

const encode = () => {
	const latitude = 47.6101;
	const longitude = -122.2015;
	const hash = geohash.encode(latitude, longitude);

	return (
		<View>
			<Text>{hash}</Text>
		</View>
	);
};

export default encode;
