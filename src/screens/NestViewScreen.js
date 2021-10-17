/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useLayoutEffect, useState, useEffect} from 'react'
import { StyleSheet, View, ScrollView} from 'react-native'
import { Text, Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import EggItem from '../components/EggItem'
import {auth, db} from '../../firebase'


const NestView = () => {
  const [chats, setChats] = useState([{id:1, data:"hello"}, {id:2, data:"hello"}, {id:3, data:"hello"}, {id:4, data:"hello"}, {id:5, data:"hello"}, {id:6, data:"hello"}, {id:7, data:"hello"}])

  const signOutUser = () => {
    auth.signOut().then(()=>{
      // navigation.navigate('Login')
      alert('You have signed out')
    })
  };

  // useEffect( ()=> {
  //   const unsubscribe = db.collection("chats").onSnapshot((snapshot)=> {
  //     setChats(snapshot.docs.map(doc=> ({
  //       id: doc.id,
  //       data: doc.data(),
  //     })))
  //   });
  //   return unsubscribe;
  // }, [chats])


const enterChat = (id, chatName) => {
// navigation.navigate("Chat", {
//   id, chatName
// })
}

  return (
    <SafeAreaView >
      <ScrollView style={styles.container}>
      <Text h2 style={{ marginTop: 50, marginBottom:50,  textAlign: 'center' }}>
				Birds of a Feather
			</Text>
<View style={styles.eggContainer}>
        {chats.map(({id, data: {chatName}})=> (
           <Avatar
            rounded
            source={{
            uri: 'https://media.istockphoto.com/photos/buff-orpington-hen-picture-id1222034813?s=612x612',
                }}
            key ={id}
            size={72}
            borderRadius= "10"
            borderWidth= "5"
            borderColor= '#e8984e'
            onPress={()=>enterChat(id, chatName)}
              />
        ))}
        </View>
      <Text h2 style={{ marginTop: 50, marginBottom:50,  textAlign: 'center' }}>
				Flock Together
			</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#E6E8DA',
    height: "100%",
  },
  eggContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  }
})

export default NestView


