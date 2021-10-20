//this is an unused file since we navigate directly to individual profiles via pins on map
import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import {Avatar, Button, Image, TouchableOpacity} from 'react-native-elements'
import {auth, db} from '../../firebase';

const users = db.users;

const ProfileList =({users}) => {
    return (
        <View>
            {users.map(({id, data: {displayName}}) => (
                <Avatar rounded source={{uri: user.imageURL}}
            ))}
            <Text></Text>
        </View>
    )
}




export default ProfileList
