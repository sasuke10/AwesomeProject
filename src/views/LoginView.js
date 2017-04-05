import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';

const permitions = [ 'public_profile', 'email' ];

export default class LoginView extends Component {

  handleLoginFinish = (error, result) => {
    if (error) {
      console.error(error);
    } else if (result.isCancelled) {
      alert("login is cancelled.");
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          Actions.root()
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
