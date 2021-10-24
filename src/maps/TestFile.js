import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const TestFile = (props) => {
	const { nearbyUsersLocation } = props;
	const { latitude, longitude } = props;

	console.log('>>>><<<<', nearbyUsersLocation, latitude, longitude);

	return <Text>This works in TestFile</Text>;
};

export default TestFile;
