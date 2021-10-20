/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { USERS } from '../../data/users';
import { auth, db } from '../../firebase';
import { useFocusEffect } from '@react-navigation/native';



const ProfileView = () => {
	//this user alternative is to pull from dummy data to display a profile
	//   const user = USERS[0];
  //line 14 might not be enough. It used to work, but now, when we open the app, it initially doesn't (async authorization?). If you comment out all calls to user and then comment it back in it suddenly works. Except there must be another layert of access to get to user features not included in auth. pronouns, bio, interests (again, used to work :( ))
	const [userData, setUserData] = useState([])

  useFocusEffect(
    React.useCallback(() => {
    console.log('usefocus triggered2');
    const unsubscribe = () => {
      db.collection('Users')
      .where('email', ''=='', auth.currentUser.email)
        .onSnapshot((snapshot)=> {
          setUserData(snapshot.docs.map(doc=> ({
            id: doc.id,
            data: doc.data(),
          })))
        });
      }
    return unsubscribe();
   }, [])
   );


  const logOutUser = () => {
    auth.signOut().then(()=>{
      navigation.navigate('Login')
    })
  };

  return (
    <View style={styles.profileView}>
		<Text style={styles.profileName}>Hello, {userData.displayName}! </Text>

		<>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>({userData.pronouns})</Text>
		</>
      <Image source={{ uri: userData.photoURL }} style={styles.profileImage} />
      <>
        <Text style={{ fontWeight: 'bold' }}>About You:</Text>
        <Text>{userData.bio} </Text>
      </>
	{/*the majority of our database users do not have location information, so if I call name from this array, it does not work. For now, I don't think there's a workaround for displaying location name*/}
    {/* <Text style={{ fontWeight: 'bold' }}>Your Location: </Text> */}
    {/* <Text>{currentUser.location.name} </Text> */}

      <Text style={{ fontWeight: 'bold' }}>Your Interests: </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {userData.interests.map((interest, index) => (
          <View key={index} style={{ alignItems: 'center' }}>
            <Text style={{ color: '#1f142e' }}>{interest}, </Text>
          </View>
        ))}
      </ScrollView>
      <Button buttonStyle={styles.button} title="Log Out" onPress={logOutUser} />
    </View>
  );
};

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

// /* eslint-disable no-unused-vars */

// import React, { useState, useEffect, useLayoutEffect } from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { Button } from 'react-native-elements';
// import { USERS } from '../../data/users';
// import { auth, db } from '../../firebase';

// const ProfileView = () => {
//   const user = USERS[0];
//   var currentUser = auth.currentUser;

//   return (
//     <View style={styles.profileView}>
//       {/* <Image style={styles.imagestyle} source={require('../../assets/myFlockIcons/Vector.png')} /> */}

//       <Text style={styles.profileName}>{currentUser.displayName}</Text>
//       <>
//         <Text>({user.pronouns})</Text>
//       </>
//       <Image source={{ uri: currentUser.photoURL }} style={styles.profileImage} />
//       <>
// 	  <Text style={{ fontSize: 25 }}>Location: {user.location.name}</Text>
//         <Text style={{ fontSize: 25 }}>About: {user.intro}</Text>
//       </>
//       <Text style={{ fontSize: 25 }}>Interests: </Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {user.interests.map((interest, index) => (
//           <View key={index} style={{ alignItems: 'flex' }}>
//             <Text style={{ fontSize: 25 }}>{interest}, </Text>
//           </View>
//         ))}
//       </ScrollView>
//       <Button buttonStyle={styles.button} title="Log Out" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#1F142E',
//     borderColor: '#bf90b1',
//     borderWidth: 5,
//     width: 200,
//     margin: 10,
//   },
//   imagestyle: {
//     alignItems: 'flex-end',
//     height: 15,
//     width: 15,
//   },
//   profileView: {
//     alignItems: 'center',
//     backgroundColor: '#e6e8da',
//     height: '100%',
//   },
//   profileImage: {
//     height: 250,
//     width: 250,
//     marginBottom: 20,
//     borderRadius: 125,
//     borderWidth: 5,
//     borderColor: '#e8984e',
//     alignItems: 'center',
//   },
//   profileName: {
//     color: '#1f142e',
//     // fontStyle: 'italic',
//     // fontWeight: '800',
//     fontSize: 35,
//     marginTop: 10,
//     marginBottom: 15,
//   },
// });

// export default ProfileView;
