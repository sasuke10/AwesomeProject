import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import Login from 'react-native-simple-login';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        height: 100,
        width: 330,
        marginTop: 80,
    },
    auxContainer: {
        flexDirection: 'row',
        marginLeft: 40,
        marginRight: 40,
        flex: 1,
    },
});

export default class LoginView extends Component {

    constructor() {
        super();
        this.state = {
            credential: null,
        };
    }

    handlePress() {
        Actions.testview();
    }

    onLogin(email) {
        return () => console.warn('email', email);
    }

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#f74b25', '#f32778']}
                    style={styles.linearGradient}
                    start={{ x: 1.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }} >
                    <Image style={ styles.logo } source={require('../../img/logopng.png')} />
                </LinearGradient>
                <View style={styles.auxContainer}>
                    <Login
                        style={styles.loginComponent}
                        onLogin={ this.onLogin }
                    />
                </View>
            </View>
        );
    }
}
