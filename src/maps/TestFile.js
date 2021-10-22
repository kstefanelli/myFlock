import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const TestFile = (props) => {
	const nearbyUsersDataArr = props.nearbyUsersData;
	const nearbyUsersLocationArr = nearbyUsersDataArr.map((objElement) => ({
		location: objElement.data.location,
		latitude: objElement.data.latitude,
		longitude: objElement.data.longitude,
	}));
	return <Text>This works in TestFile</Text>;
};

export default TestFile;
