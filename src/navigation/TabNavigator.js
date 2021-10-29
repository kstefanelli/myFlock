/* eslint-disable no-unused-vars */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/ChatScreen';
import NestViewScreen from '../screens/NestViewScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Map from '../screens/Map';
import AddInterest from '../screens/AddInterest';
import ProfileNavigator from './ProfileNavigator';

ProfileNavigator;
function TabNavigator(props) {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={
        ({ headerShown: false },
        ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Profile') {
              iconName = focused ? 'user-alt' : 'user-alt';
            } else if (route.name === 'Discover Users') {
              iconName = focused ? 'map-marker-alt' : 'map-marker-alt';
            } else if (route.name === 'Messages') {
              iconName = focused ? 'feather-alt' : 'feather-alt';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'comment' : 'comment';
            } else if (route.name === 'Interests') {
              iconName = focused ? 'seedling' : 'seedling';
            }
            return <Icon type="ionicon" name={iconName} size={size} color={color} />;
          },
        }))
      }
    >
      <Tab.Screen options={{ headerShown: false }} name="Profile" component={ProfileNavigator} />
      <Tab.Screen options={{ headerShown: false }} name="Discover Users" component={Map} />
      <Tab.Screen options={{ headerShown: false }} name="Messages" component={NestViewScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen options={{ headerShown: false }}  name="Interests" component={AddInterest} />
    </Tab.Navigator>
  );

}

export default TabNavigator;
