import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import {
  AppRegistry,
  Platform,
} from 'react-native';
import { Provider } from 'react-redux';
import HomeView from './views/HomeView';
import TestView from './views/TestView';
import LoginView from './views/LoginViewContainer';
import store from './state/store';

export default class AwesomeProject extends Component {
    render() {
        const isAndroid = Platform.OS === 'android';

        return (
            <Provider store={ store }>
                <Router>
                    <Scene key="login" component={ LoginView } hideNavBar={true} />
                    <Scene key="root">
                      <Scene key="home" component={ HomeView } />
                      <Scene key="testview" component={ TestView } hideNavBar={ isAndroid }/>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
