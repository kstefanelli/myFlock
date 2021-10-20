/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState, useLayoutEffect, useEffect} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {Text, Avatar} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesome5} from '@expo/vector-icons';
import {auth, db} from '../../firebase';
import { useFocusEffect } from '@react-navigation/native';
import EggItem from '../components/EggItem';

const NestView = ({navigation}) => {
  const [chats, setChats] = useState([]);


  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Nest View',
    });
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
    console.log('usefocus triggered');
    const unsubscribe = () => {
      db.collection("chats").
      where('parties', 'array-contains', auth.currentUser.email)
      .onSnapshot((snapshot)=> {
        setChats(snapshot.docs.map(doc=> ({
          id: doc.id,
          data: doc.data(),
        })))
      });
      {noChat()}
    }

    return unsubscribe();
   }, [])
   );




  const enterChat = (id) => {
    navigation.navigate("ChatScreen",{chatName:id})
  };

  const noChat = () => {


    if (chats.length < 1) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesome5 name="earlybirds" size={200} color="black" />

          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center', marginTop: 50}}
            onPress={() => navigation.goBack()}
          >
            <Text style={{fontSize: 18, color: 'black', textAlign: 'center'}}>
              No chirps yet! Fly over the map to peek at other birds with your interests!
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.eggContainer}>
          {chats.map(({id, data:{photos}}) => (
            <EggItem key ={id}
            id={id}
            photos={photos}
            enterChat={enterChat} />
          ))}
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container} >

        <Text h2 style={{marginTop: 50, marginBottom: 30, textAlign: 'center'}}>
          Birds of a Feather
        </Text>

        <View
          style={{
            marginBottom: 50,
            borderBottomColor: '#e8984e',
            borderBottomWidth: 5,
          }}
        />
        {noChat()}

        <View
          style={{
            marginTop: 50,
            borderBottomColor: '#e8984e',
            borderBottomWidth: 5,
          }}
        />

        <Text h2 style={{marginTop: 30, marginBottom: 50, textAlign: 'center'}}>
          Flock Together
        </Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#E6E8DA',
    height: '100%',
  },
  eggContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default NestView;
