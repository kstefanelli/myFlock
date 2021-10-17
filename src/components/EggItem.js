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
            uri: 'https://media.istockphoto.com/photos/buff-orpington-hen-picture-id1222034813?s=612x612',
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={{fontWeight: '800', color: '#354A18'}}>{chatName}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail"
          style={{color: '#354A18'}}>
            This is a test subtitle. Chickens. Chickens. Chickens!!!!!
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default EggItem;


