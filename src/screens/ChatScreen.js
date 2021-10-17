import React, { useLayoutEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { db, auth } from "../../firebase";
import * as firebase from "firebase";

const ChatScreen = ({ navigation, route }) => {
  const friend = route.params.user;
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const sendMessage = () => {
    Keyboard.dismiss();

    db.collection("chats").doc(route.params.id).collection("messages").add({
      timeStamp: firebase.firestore.fieldValue.serverTimestamp(),
      message: input,
      displayName: auth.currentUser.firstName,
      email: auth.currentUser.email,
      photoUrl: auth.currentUser.imageUrl,
    });

    setInput("");
  };

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(route.params.id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    return unsubscribe;
  }, [route]);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: "Chat",
  //     headerBackTitleVisible: false,
  //     headerTitleAlign: "left",
  //     headerTitle: () => (
  //       <View
  //         style={{
  //           flexDirection: "row",
  //           alignContent: "center",
  //         }}
  //       >
  //         <Avatar
  //           rounded
  //           source={{
  //             uri: "http://media3.s-nbcnews.com/i/MSNBC/Components/Photo/_new/tdy-120822-joyce-carpati-02.jpg",
  //           }}
  //         />
  //         <Text>test</Text>
  //       </View>
  //     ),
  //   });
  // }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 2, BackgroundColor: "white" }}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView>
              {messages.map(({is,data})=>(
                data.email===auth.currentUser.email?(
                  <View style = {styles.reciever}>
                     <Avatar
                rounded
                source={{
                  uri: friend.profileImage,
                }}
              />
              <Text style={styles.recieverText}>{data.message}</Text>
                    </View>
                ):(
                  <View style = {styles.sender}>
                  <Avatar
             rounded
             source={{
               uri: friend.profileImage,
             }}
           />
           <Text style={styles.senderText}>{data.message}</Text>
                 </View>
                )
              ))}
              <Avatar
                rounded
                source={{
                  uri: friend.profileImage,
                }}
              />
              <Text>{friend.username}</Text>
            </ScrollView>
            <View style={styles.footer}>
              {/* <Avatar
              rounded
              source={{
                uri: "http://media3.s-nbcnews.com/i/MSNBC/Components/Photo/_new/tdy-120822-joyce-carpati-02.jpg",
              }}
            /> */}
              <TextInput
                placeholder="what you want to say?"
                style={styles.textInput}
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={sendMessage}
              />

              <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
                <Ionicons name="send" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    backgroundColor: "#ECECEC",
    padding: 10,
    color: "grey",
    borderRadius: 30,
  },
  reciever:{
    padding:15,
    backgroundColor:'#ECECEC',
    alignSelf:'flex-end',
    borderRadius:20,


  },
  sender:{
 padding:15,
    backgroundColor:'#ECECEC',
    alignSelf:'flex-start',
    borderRadius:20,
  },
  recieverText:{

  },
  senderText:{

  }
});
