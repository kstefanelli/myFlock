import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "react-native-elements";

const ChatScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
          }}
        >
          <Avatar
            rounded
            source={{
              uri: "http://media3.s-nbcnews.com/i/MSNBC/Components/Photo/_new/tdy-120822-joyce-carpati-02.jpg",
            }}
          />
          <Text >test</Text>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text h3>hellow</Text>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
