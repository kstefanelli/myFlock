/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useLayoutEffect, useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import {AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import { SafeAreaView } from 'react-native-safe-area-context'
import EggItem from '../components/EggItem'
import { auth, db } from '../../firebase';


const NestViewScreen = ({navigation}) => {
  const [chats, setChats] = useState([])


  useEffect( ()=> {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot)=> {
      setChats(snapshot.docs.map(doc=> ({
        id: doc.id,
        data: doc.data(),
      })))
    });
    return unsubscribe;
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meow Talk",
      headerStyle: {
        backgroundColor: "#FFF",
      },
      headerTitleStyle: {
        color: "#354A18",
      },
      headerTintColor: "white",
      headerLeft: () => (
      <View style ={{marginLeft: 20}} >
        <TouchableOpacity onPress={alert('hello!')}
        activeOpacity={0.5}>
        <Avatar rounded source={{uri: auth?.currentUser?.photoURL}} />
        </TouchableOpacity>
      </View>),
      headerRight: () => (
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 80,
          marginRight:20,
        }} >
        <TouchableOpacity activeOpacity={0.5}>
          <AntDesign name="camerao" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('AddChat')}
        activeOpacity={0.5}>
          <SimpleLineIcons name="pencil" size={24} color="black" />
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
          <EggItem key ={id}
          id={id}
          chatName={chatName}
          enterChat={enterChat} />
        ))}
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
