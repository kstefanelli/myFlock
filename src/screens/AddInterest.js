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
  const [filltext,setFillText]=useState('');

  let currentEmail =
    auth.currentUser.email.charAt(0).toUpperCase() +
    auth.currentUser.email.slice(1);
  // on first render sets myInterest
  useEffect(() => {
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
  }, []);

  const addInterestToMyProfile = () => {
    console.log("set tag ---->", tagselected)
    // add interest in firebase
    if (newInterest.length) {
      db.collection("Users")
      .doc(MyInterests[0].id)
      .update(
          {
            interests: firebase.firestore.FieldValue.arrayUnion(tagselected),
          },
          { merge: true }
        );
    }
    setfilterdIntestests(interests);
  };


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
          placeholder="search interest..."
          autoFocus
          type="text"
          value={newInterest}
          onChangeText={(text) => setNewInterest(text)}
          onChange={searchTag}
        />
      </View>
      
      <View style={styles.interestTagContainer}>
        <ScrollView>
          {filterdIntestests.map((interest, index) => (
            <TouchableOpacity key={index}  
             onPress={()=>{
              if (newInterest.length) {
                db.collection("Users")
                .doc(MyInterests[0].id)
                .update(
                    {
                      interests: firebase.firestore.FieldValue.arrayUnion(tagselected),
                    },
                    { merge: true }
                  );
              }
              setTagSelected(interest)
             }
              
            }
            >
              <Text
                style={styles.interestTag}
                  
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
    padding: 5,
    marginTop: 20,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "lightgrey",
    backgroundColor: "white",
    // borderColor: "white",
    // color:'white',
  },
  inputInterest: {
    width: 300,
  },
  button: {
    width: 300,
    marginBottom: 30,
    marginTop: 0,
    // backgroundColor: "black",
    // borderWidth: 3,
  },
});
