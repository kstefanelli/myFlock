import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { USERS } from '../../data/users';


const FriendsList = () => {
    return (
        <View style={{marginBOttom: 13}}>
            <Text>Friends List Goes Here</Text>
            {/* This next bit can be uncommented when we have friends association and seeding done. For now, it's just text that should render in this spot. */}
            {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((friend, index) => (
                    <View key={index} style={{alignItems: 'center'}}>
                        <Image source={{uri: friend.image}} style={styles.friendsList}/>
                        <Text style={{color: '1F142E'}}>{friend.user.length >10 ? friend.user.slice(0,9).toLowerCase() + '...' : friend.user.toLowerCase()} </Text>
                    </View>
                ))}
            </ScrollView> */}

        </View>
    )
}

export default FriendsList
