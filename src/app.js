/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Scene, Router } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from 'react-native';
import HomeView from './views/HomeView';
import TestView from './views/TestView';
import LoginView from './views/LoginView';

export default class AwesomeProject extends Component {

  render() {
    const isAndroid = Platform.OS === 'android'
    return (
      <Router>
        <Scene key="login" component={ LoginView } />
        <Scene key="root">
          <Scene key="home" component={ HomeView } />
          <Scene key="testview" component={ TestView } hideNavBar={ isAndroid }/>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 50,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
