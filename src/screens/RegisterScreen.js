/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { auth, db } from '../../firebase';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [imageUrl, setImageUrl] = useState('');

const register = () => {
 auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl || 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200',
        });
      })
      .then(db.collection('Users')
      .add({
        name: name,
        email: email,
        imageUrl: imageUrl || 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200',
        age: 0,
        bio: "",
        interests: [],
        location: []
      })
      )
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create an account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Name"
          autofocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Pronouns"
          type="text"
          value={pronouns}
          onChangeText={(text) => setPronouns(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture Url (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button buttonStyle={styles.button} onPress={register} title="Register" />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>


  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#E6E8DA',
  },
  button: {
    backgroundColor: '#1F142E',
    borderColor: '#1F142E',
    borderWidth: 5,
    width: 200,
    margin: 5,
  },
  inputContainer: {
    width: 300,
  },
});
