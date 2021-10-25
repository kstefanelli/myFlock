import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const TestFile = (props) => {
	const { ListOfUsersObject } = props;
	console.log('array in TestFile', typeof ListOfUsersObject);
	const { latitude, longitude } = props;
	return <Text>Here is my array: {JSON.stringify(ListOfUsersObject)}</Text>;
};

export default TestFile;
