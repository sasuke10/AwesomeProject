import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

const permitions = [ 'public_profile', 'email' ];

const config = {
  apiKey: "AIzaSyBZEy1UZfk1htnTIJyECpx8pXFYziam9y8",
  authDomain: "awesomeproject-be890.firebaseapp.com",
  databaseURL: "https://awesomeproject-be890.firebaseio.com",
  projectId: "awesomeproject-be890",
  storageBucket: "awesomeproject-be890.appspot.com",
  messagingSenderId: "622919795266"
};
firebase.initializeApp(config);
const facebookAddProvider  = firebase.auth.FacebookAuthProvider;
const firebaseAuth = firebase.auth();

export default class LoginView extends Component {

  authenticateUser(accessToken) {
    const credential = facebookAddProvider.credential(accessToken);
    firebaseAuth.signInWithCredential(credential).then(function(user) {
      console.warn();("Sign In Success", user);
      const currentUser = user;
    }, function(error) {
      console.warn("Sign In Error", error);
    });
  }

  handleLoginFinish = (error, result) => {
    if (error) {
      console.error(error);
    } else if (result.isCancelled) {
      alert("login is cancelled.");
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          // Actions.root()
          this.authenticateUser(data.accessToken)
          // alert(data.accessToken.toString())
        }
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Bienvenidos a la app de Joshua </Text>
        <LoginButton
          readPermissions={ permitions }
          onLoginFinished={ this.handleLoginFinish }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  }
});
