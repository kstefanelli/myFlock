import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";
import { Input, Button } from "react-native-elements";

const interests = [
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
  const [refresh, setRefresh] = useState("");

  const add = () => {
    interests.push(newInterest);
    setRefresh();
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
        />
      </View>
      <Button
        title="Add"
        containerStyle={styles.button}
        type="outline"
        onPress={add}
      />
      <View style={styles.interestTagContainer}>
        {interests.map((interest, index) => (
          <Text key={index} style={styles.interestTag}>
            {interest}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default AddInterest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E8DA",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 30,
    // alignItems: "center",
    // justifyContent: "center",
  },
  interestTagContainer: {
    paddingTop: 50,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  interestTag: {
    borderRadius: 10,
    fontSize: 20,
    // backgroundColor: "#BF90B1",
    padding: 3,
    margin: 10,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderWidth: 10,
    borderColor: "#BF90B1",
  },
  inputInterest: {
    width: 300,
  },
  button: {
    width: 300,
    marginBottom: 30,
    marginTop: -40,
    borderColor: "#BF90B1",
    borderWidth: 3,
  },
});
