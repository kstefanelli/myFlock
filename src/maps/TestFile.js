import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const TestFile = (props) => {
	const { ArrayOfUsers } = props;
	const { latitude, longitude } = props;
	const [ListOfUsersData, setListOfUsersData] = useState([]);

	useEffect(() => {
		setListOfUsersData(
			ArrayOfUsers.map((objElement) => ({
				name: objElement.data.name,
				interests: objElement.data.interests,
				location: objElement.data.location,
				latitude: objElement.data.latitude,
				longitude: objElement.data.longitude,
				image: objElement.data.imageUrl,
			}))
		);
	}, [ListOfUsersData]);

	return <Text>{JSON.stringify(ArrayOfUsers)}</Text>;
};

export default TestFile;
