/* eslint-disable no-unused-vars */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';


const EggItem = ({id, chatName, enterChat}) => {
  return (
    <View >
      <ListItem onPress={()=>enterChat(id, chatName)}
      key ={id}
      bottomDivider>
        <Avatar
          rounded
          source={{
            uri: 'https://image.freepik.com/free-vector/cute-avocado-cat-cartoon-character-animal-fruit-isolated_138676-3184.jpg',
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={{fontWeight: '800', color: '#354A18'}}>{chatName}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail"
          style={{color: '#354A18'}}>
            This is a test subtitle. I love cats. Dogs are your best friend but cats don't tell
            people where the bodies are buried.
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default EggItem;

const styles = StyleSheet.create({
});

