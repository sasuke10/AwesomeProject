import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import {
  AppRegistry,
  Platform,
} from 'react-native';
import HomeView from './views/HomeView';
import TestView from './views/TestView';
import LoginView from './views/LoginView';

export default class AwesomeProject extends Component {
    render() {
        const isAndroid = Platform.OS === 'android';

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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
