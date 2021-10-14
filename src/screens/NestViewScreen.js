/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useLayoutEffect, useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import EggItem from '../components/EggItem'
import {auth, db} from '../../firebase'


const Home = ({navigation}) => {
  const [chats, setChats] = useState([])

  const signOutUser = () => {
    auth.signOut().then(()=>{
      navigation.navigate('Login')
      alert('You have signed out')
    })
  };

  useEffect( ()=> {
    // const unsubscribe = db.collection("chats").onSnapshot((snapshot)=> {
    //   setChats(snapshot.docs.map(doc=> ({
    //     id: doc.id,
    //     data: doc.data(),
    //   })))
    // });
    // return unsubscribe;
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "My Nest",
      headerStyle: {
        backgroundColor: "#FFF",
      },
      headerTitleStyle: {
        color: "#354A18",
      },
      headerTintColor: "white",
      headerLeft: () => (
      <View style ={{marginLeft: 20}} >
        <TouchableOpacity onPress={signOutUser}
        activeOpacity={0.5}>
        <Avatar rounded source={{uri: "https://images.unsplash.com/photo-1553161170-0c3481941f27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80" }} />
        </TouchableOpacity>
      </View>),
      headerRight: () => (
        <View style={{ marginRight: 20 }} >
        <TouchableOpacity onPress={()=>navigation.navigate('AddChat')}
        activeOpacity={0.5}>
          <Ionicons name="chatbubbles-outline" size={24} color="black" />
        </TouchableOpacity>
        </View>
    ),
    });
  }, [navigation])

const enterChat = (id, chatName) => {
navigation.navigate("Chat", {
  id, chatName
})
}

  return (
    <SafeAreaView >
      <ScrollView style={styles.container}>
        {chats.map(({id, data: {chatName}})=> (
          <CustomListItem key ={id}
          id={id}
          chatName={chatName}
          enterChat={enterChat} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    height: "100%"
  }
})
