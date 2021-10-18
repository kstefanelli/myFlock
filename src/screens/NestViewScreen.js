/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useLayoutEffect} from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {Text, Avatar} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesome5} from '@expo/vector-icons';
import {db} from '../../firebase';

const NestView = ({navigation}) => {
  const [chats, setChats] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Nest View',
    });
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = db.collection('chats').onSnapshot((snapshot) => {
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, [chats]);

  const enterChat = (id, chatName) => {
    // navigation.navigate("Chat", {
    //   id, chatName
    // })
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
          {chats.map(({id, data: {chatName}}) => (
            <Avatar
              rounded
              source={{
                uri: 'https://media.istockphoto.com/photos/buff-orpington-hen-picture-id1222034813?s=612x612',
              }}
              key={id}
              size={72}
              borderRadius="10"
              borderWidth="5"
              borderColor="#e8984e"
              onPress={() => enterChat(id, chatName)}
            />
          ))}
        </View>
      );
    }
  };

  return (
    <SafeAreaView >
      <ScrollView style={styles.container}>
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
      </ScrollView>
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
