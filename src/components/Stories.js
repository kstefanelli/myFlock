import React from 'react'
import { View, Text, Image ,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {USERS} from '../../data/users'



const Stories = ({interest}) => {
    const filteredUsers = USERS.filter(user=>user.interests.indexOf(interest)>-1)
    return (
        <View >
            <ScrollView horizontal 
            showsHorizontalScrollIndicator={false}
            >
                {
             
                    filteredUsers.map((story,index)=>(
                        <View key = {index} style={{alignItems:'center'}}>
                        <Image 
                        source = {{uri:story.profileImage}} 
                        style = {styles.story}
                        />
                        <Text style={{color:'white'}}>{
                        story.username.length>9
                        ? story.username.slice(0,9)+'...'
                        : story.username
                        }</Text>
                        </View>
                    ))
                }
                </ScrollView>
            <Text ></Text>
        </View>
    )
}

const styles = StyleSheet.create({
story:{
    width:70,
    height:70,
    borderRadius:50,
    margin:6,
    borderWidth:2,
    borderColor:'#ff8501'

}
})

export default Stories