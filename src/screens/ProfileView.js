import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import FriendsList from "../components/FriendsList"
import { USERS } from '../../data/users';


const ProfileView = (user) => {
    return (
        <View>
            <Text>{user.username}</Text>
            <Image source={{uri: user.profileImage}} style={styles.profileImage}/>
            <Text>{user.intro}</Text>
            <FriendsList />
        </View>
    )
}

const styles = StyleSheet.create({
    profileImage: {
        height: 100,
        width: 100,
        margin: 10,
        borderRadius: 50,
        borderWidth: 6,
        borderColor: '#bf90b1',
        alignItems: 'center'
    }
})

export default ProfileView
