/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { logOutUser } from '../auth/logOutUser'
import { auth, db } from '../../firebase';
import { useFocusEffect } from '@react-navigation/native';


const ProfileView = ({ navigation }) => {

	//this user alternative is to pull from dummy data to display a profile
  auth.currentUser
  const userAuth = auth.currentUser
  const currentEmail = auth.currentUser.email.charAt(0).toUpperCase()+auth.currentUser.email.slice(1)


	const [userData, setUserData] = useState({});
  // const fetchUserbyEmail = async(email) => {
  //   const result = await db.collection('Users').where('email', '==', email).get();
  //   // return result.docs.map((ref) => ({uid: ref.id, ...ref.data()}))
  //   return result
  // }


  useEffect(() => {
    console.log("effect triggered");
    const unsubscribe = () => {
      db.collection('Users')
      .where('email', '==', currentEmail)
        .onSnapshot((snapshot)=> {
          setUserData(snapshot.docs.map(doc=> ({
            id: doc.id,
            data: doc.data(),
          })))
        });
      }
    return unsubscribe()
  },[])

  console.log("Here's our test", userData[0].data.pronouns)

	return (
		<View style={styles.profileView}>
			<Text style={styles.profileName}>Hello, {userAuth.displayName}! </Text>

			<>
				<Text style={{ fontWeight: 'bold', marginBottom: 10 }}>({userData[0].data.pronouns})</Text>
			</>
			<Image source={{ uri: userData[0].data.imageUrl }} style={styles.profileImage} />
			<>
				<Text style={{ fontWeight: 'bold' }}>About You:</Text>
				<Text style={{marginLeft: 10, marginRight: 10}}>{userData[0].data.bio} </Text>
			</>

			<Text style={{ fontWeight: 'bold' }}>Your Interests: </Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{userData[0].data.interests.map((interest, index) => (
					<View key={index} style={{ alignItems: 'center' }}>
						<Text style={{ color: '#1f142e' }}> *{interest}* </Text>
					</View>
				))}
			</ScrollView>
			<Button buttonStyle={styles.button} title="Log Out" onPress={logOutUser} />
		</View>
	);
};
/* }; */

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#1f142e',
		borderColor: '#1f142e',
		borderWidth: 5,
		width: 200,
		margin: 5,
	},
	imagestyle: {
		alignItems: 'flex-end',
		height: 15,
		width: 15,
	},
	profileView: {
		alignItems: 'center',
		backgroundColor: '#e6e8da',
		height: '100%',
	},
	profileImage: {
		height: 250,
		width: 250,
		marginBottom: 20,
		borderRadius: 125,
		borderWidth: 5,
		borderColor: '#e8984e',
		alignItems: 'center',
	},
	profileName: {
		color: '#1f142e',
		fontStyle: 'italic',
		fontWeight: '800',
		fontSize: 20,
		marginTop: 10,
		marginBottom: 15,
	},
});

export default ProfileView;
