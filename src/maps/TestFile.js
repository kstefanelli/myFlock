import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const TestFile = ({ route }) => {
	const { ArrayOfUsers } = route.params;
	const { latitude, longitude } = route.params;

	const ListOfUsersData = ArrayOfUsers.map((objElement) => ({
		name: objElement.data.name,
		interests: objElement.data.interests,
		location: objElement.data.location,
		latitude: objElement.data.latitude,
		longitude: objElement.data.longitude,
		image: objElement.data.imageUrl,
	}));

	return <Text>Here is my array: {ListOfUsersData}</Text>;
};

export default TestFile;
