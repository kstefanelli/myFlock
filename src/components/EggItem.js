/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {auth} from '../../firebase';
import { useFocusEffect } from '@react-navigation/native';

const EggItem = ({id, photos, enterChat}) => {
  const [eggPicture, setEggPicture] = useState("")
  console.log('egg photos', photos)



useFocusEffect(
  React.useCallback(() => {
  const unsubscribe = () => {
    if(photos !== undefined) {
      for (let i =0; i<photos.length; i++){
        let pic = photos[i];
        if (pic !==undefined && pic !== auth.currentUser.photoURL){setEggPicture(pic); break}
        else {
          setEggPicture("https://literaryyard.files.wordpress.com/2017/11/smiling-face-funny-bird-picture.jpg?w=639)"
        )
      }
    }
    }
    else {
      setEggPicture("https://literaryyard.files.wordpress.com/2017/11/smiling-face-funny-bird-picture.jpg?w=639)"
        )
    }
    };

  return unsubscribe();
 }, [])
 );

  return (
    <>
     <Avatar
              rounded
              source={{
                uri: eggPicture
              }}
              key={id}
              size={72}
              borderRadius="10"
              borderWidth="5"
              borderColor="#e8984e"
              onPress={() => {enterChat(id)}}
            />
    </>

  );
};

const styles = StyleSheet.create({
});

export default EggItem;

