import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Stories from "../components/Stories";
import { interests } from "../../data/interests";
import { auth, db } from "../../firebase";
import { useFocusEffect } from "@react-navigation/native";
import * as firebase from 'firebase';;

const AddInterest = ({ navigation }) => {
  const [newInterest, setNewInterest] = useState("");
  const [tagBagroundColor, setTagBagroundColor] = useState("");
  const [tagselected, setTagSelected] = useState('');
  const [filterdIntestests, setfilterdIntestests] = useState(interests);
  const [email, setEmail] = useState("");
  const [MyInterests, setMyInterests] = useState([]);

  let currentEmail =
    auth.currentUser.email.charAt(0).toUpperCase() +
    auth.currentUser.email.slice(1);
  // on first render sets myInterest
  useEffect(() => {
    // auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     currentEmail =
    //       auth.currentUser.email.charAt(0).toUpperCase() + auth.currentUser.email.slice(1);
    //call db
    db.collection("Users")
      .where("email", "==", currentEmail)
      .onSnapshot((snapshot) => {
        setMyInterests(
          snapshot.docs.map((doc) => 
          ({
            id: doc.id,
            data: doc.data().interests,
          })
          )
        );
      });
    //   }
    // });
  }, []);

  const addInterestToMyProfile = () => {
    // add interest in firebase
    if (newInterest.length) {
      db.collection("Users")
      .where("email", "==", currentEmail)
      .update(
          {
            interests: firebase.firestore.FieldValue.arrayUnion(newInterest),
          },
          { merge: true }
        );
    }
    setfilterdIntestests(interests);
  };

  console.log("my interest---->", MyInterests);

  // const addInterestToMyProfile = () => {
  //   useEffect(() => {
  //     auth().onAuthStateChanged((user) => {
  //       if (user) {
  //         let email = user.email.charAt(0).toUpperCase() + user.email.slice(1);
  //         setEmail(email);
  //         // setMyInterests();
  //       }
  //     });
  //   }, []).then(
  //     db
  //       .collection("Users")
  //       .where("email", "==", email)
  //       .onSnapshot((snapshot) => {
  //         setUserData(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             data: doc.data(),
  //           }))
  //         );
  //       })
  //   );

  //   console.log('userdata--->',userData[0].interests)
  //   //     .get()
  //   //     .then(function (querySnapshot) {
  //   //       querySnapshot.forEach(function (document) {
  //   //         document.update({
  //   //           interests: [...user.interests,newInterest],
  //   //         });
  //   //       });
  //   //     })
  //   // );

  //   // onSnapshot((snapshot)=> {
  //   //   setUserData(snapshot.docs.map(doc=> ({
  //   //     id: doc.id,
  //   //     data: doc.data(),
  //   //   })))
  //   // })
  // };

  console.log("MyInterests", MyInterests);

  // const add = () => {
  //   // add interest in firebase
  //   if (newInterest.length) {
  //     interests.unshift(newInterest);
  //   }
  //   setfilterdIntestests(interests);
  // };
  const searchTag = () => {
    if (newInterest.length) {
      const tags = interests.filter((interest) =>
        interest.toLowerCase().includes(newInterest.toLowerCase())
      );
      setfilterdIntestests(tags);
    } else {
      setfilterdIntestests(interests);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="default" />
      <View style={styles.inputInterest}>
        <Input
          placeholder="Type your interest here..."
          autoFocus
          type="text"
          value={newInterest}
          onChangeText={(text) => setNewInterest(text)}
          onChange={searchTag}
        />
      </View>
      <Button
        title="Add"
        containerStyle={styles.button}
        type="outline"
        // onPress={add}
        onPress = {addInterestToMyProfile}
      />

      <View style={styles.interestTagContainer}>
        <ScrollView>
          {filterdIntestests.map((interest, index) => (
            <TouchableOpacity key={index}>
              <Text
                style={styles.interestTag}
                onPress={() => {
                  setTagSelected(interest);
                }}
              >
                {interest}
              </Text>
              <View>
                <ScrollView>
                  {/* <Stories interest={interest} navigation={navigation} /> */}
                </ScrollView>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default AddInterest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E8DA",
    // alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 30,
  },
  interestTagContainer: {
    paddingTop: 30,
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  interestTag: {
    borderRadius: 10,
    fontSize: 20,
    padding: 3,
    marginLeft: 35,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderWidth: 10,
    // borderColor: "#BF90B1",
    backgroundColor: "white",
    borderColor: "white",
    // color:'white',
  },
  inputInterest: {
    width: 300,
  },
  button: {
    width: 300,
    marginBottom: 30,
    marginTop: 0,
    backgroundColor: "black",
    // borderWidth: 3,
  },
});
