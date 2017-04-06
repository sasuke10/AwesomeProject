import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import firebase, { firebaseAuth, facebookAddProvider } from '../helpers/firebase';
import { Actions } from 'react-native-router-flux';

const permitions = [ 'public_profile', 'email' ];

export default class LoginView extends Component {

  state = {
    credential: null
  }

  componentWillMount() {
    this.authenticateUser();
  }

  authenticateUser () {
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        if (!data) return;
        const { accessToken } = data;
        const credential = facebookAddProvider.credential(accessToken);
        firebaseAuth.signInWithCredential(credential)
                    .then(
                      credentials => {
                        this.setState({ credentials });
                        Actions.root();
                      },
                      error => console.warn("error", error)
                    );
      }
    )
  }

  handleLoginFinish = (error, result) => {
    if (error) {
      console.error(error);
    } else if (result.isCancelled) {
      alert("login is cancelled.");
    } else {
      this.authenticateUser();
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
