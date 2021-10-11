import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import FriendsList from "../components/FriendsList"
import { USERS } from '../../data/users';


const ProfileView = (user) => {
    return (
        <View style={styles.profileView}>
            <Text style={styles.profileName}>{user.userName}User Name Here!</Text>
            <Image source={{uri: user.profileImage}} style={styles.profileImage}/>
            <Text>{user.intro}Intro text goes here: </Text>
            <Text>{user.interests}A list of interests goes here: </Text>
            <FriendsList />
        </View>
    )
}

const styles = StyleSheet.create({
    profileView: {
        alignItems: 'center'
    },
    profileImage: {
        height: 250,
        width: 250,
        marginBottom: 20,
        borderRadius: 125,
        borderWidth: 10,
        borderColor: '#bf90b1',
        alignItems: 'center'
    },
    profileName: {
        color: '#1f142e',
        fontStyle: 'italic',
        fontWeight: '800',
        fontSize: 20,
        marginBottom: 15,

    }
})

export default ProfileView
