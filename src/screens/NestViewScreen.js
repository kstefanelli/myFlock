/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState, useLayoutEffect, useEffect} from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import {Text, Avatar} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context'
import EggItem from '../components/EggItem'
import {FontAwesome5} from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { auth, db } from '../../firebase';


const NestViewScreen = ({navigation}) => {
  const [chats, setChats] = useState([])

  const currentEmail =
					auth.currentUser.email.charAt(0).toUpperCase() + auth.currentUser.email.slice(1);

  useFocusEffect(
    React.useCallback(() => {

    const unsubscribe = () => {
      db.collection("chats").
      where('parties', 'array-contains', currentEmail)
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

    if (chats.length < 1 ) {
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
          {chats.map(({id, data:{photos, names}}) => (
            <EggItem key ={id}
            id={id}
            photos={photos}
            names ={names}
            enterChat={enterChat} />
          ))}

        </View>
      );
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Messages"
    })
  }, [navigation])

  return (
    <SafeAreaView style={{backgroundColor: "#E6E8DA"}} >
      <ScrollView style={styles.container}>
      <Text h2 style={{marginTop: 10, marginBottom: 10, textAlign: 'center'}}>
          Birds of a Feather
        </Text>

        <View
          style={{
            marginBottom: 10,
            borderBottomColor: '#e8984e',
            borderBottomWidth: 5,
          }}
        />
        {noChat()}

        <View
          style={{
            marginTop: 10,
            borderBottomColor: '#e8984e',
            borderBottomWidth: 5,
          }}
        />

        <Text h2 style={{marginTop: 10, marginBottom: 10, textAlign: 'center'}}>
          Flock Together
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NestViewScreen;

const styles = StyleSheet.create({
  container:{
    height: "100%"
  }
})
