/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

//DELETE once everything is connected-for testing purposes only!

import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {auth, db} from '../../firebase';
import * as firebase from "firebase";

const AddChatScreen = ({navigation}) => {
  const [thisChatName, setThisChatName] = useState('');

  const createChat = async () => {
    try {
      await db.collection('chats').doc(thisChatName).update({
        parties: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email),
        photos: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.photoURL)
      }, {merge:true});
      navigation.navigate("ChatScreen",{chatName:thisChatName})

    } catch (error) {
      alert(error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chat',
      headerBackTitle: 'Chats',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        type="text"
        value={thisChatName}
        onChangeText={(text) => setThisChatName(text)}
        leftIcon={<Icon name="wechat" type="antdesign" size={24} color="#1f142e" />}
      />
      <Button buttonStyle={styles.button} onPress={createChat} title="Create new chat" />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E8DA',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    backgroundColor: '#1f142e',
    borderColor: '#1f142e',
    borderWidth: 5,
    width: 200,
    margin: 5,
  },
});
