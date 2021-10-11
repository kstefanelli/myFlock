import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

const interests = [
  "Graphic design",
  "Community service",
  "Cooking or baking",
  "Examples of interests",
  "Exercising and healthcare",
  "Outdoor activities",
  "Playing an instrument",
  "Team or individual sports",
  "Travel",
  "Woodworking or other projects",
  "Writing or blogging",
  "Basketball",
  "Volleyball",
  "Marathon running",
  "Skiing",
  "Tennis",
  "Cycling",
  "Swimming",
  "Baseball",
  "Mountain climbing",
];

const AddInterest = () => {
  const [newInterest, setNewInterest] = useState("");
  const [tagBagroundColor, setTagBagroundColor] = useState("");
  const [tagselected, settagSelected] = useState(false);
  const [filterdIntestests, setfilterdIntestests] = useState(interests);

  const add = () => {
    if (newInterest.length) {
      interests.unshift(newInterest);
    }
    setfilterdIntestests(interests);
  };
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
          placeholder="Type your intrest here..."
          autoFocus
          type="text"
          value={newInterest}
          onChangeText={(text) => setNewInterest(text)}
          onChange={searchTag}
        />
      </View>
      <Button
        title="Create New"
        containerStyle={styles.button}
        type="outline"
        onPress={add}
      />

      <View style={styles.interestTagContainer}>
        <ScrollView>
          {filterdIntestests.map((interest, index) => (
            <TouchableOpacity>
              <Text
                key={index}
                style={
                  styles.interestTag
                }
                onPress={() => settagSelected(true)}
              >
                {interest}
              </Text>
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
  },
  interestTag: {
    borderRadius: 10,
    fontSize: 20,
    padding: 3,
    margin: 10,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderWidth: 10,
    // borderColor: "#BF90B1",
   backgroundColor: "white",
   borderColor:"white",
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
