/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {auth, db} from './firebase';

import Home from './src/screens/Home';
import Onboarding from './src/components/Onboarding';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import Login from './src/screens/Login';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setIsLoggedIn(true);
      } else {
        //redirect to LoginPage
				alert('You are not logged in!-App.js')
      }
    });

  });

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        {isLoggedIn ? (
          <>
            <DrawerNavigator />
          </>
        ) : (
          <Stack.Navigator headerMode="none">
            <>
              <Stack.Screen name="LogIn" component={Login} />
              <Stack.Screen name="Onboard" component={Onboarding} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Drawer" component={DrawerNavigator} />
              <Stack.Screen name="Home" component={Home} />
            </>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
}

export default App;
