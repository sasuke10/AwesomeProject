import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        height: 100,
        width: 330,
        marginTop: 80,
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


    render() {
        return (
            <LinearGradient
                colors={['#f74b25', '#f32778']}
                style={styles.linearGradient}
                start={{ x: 1.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }} >
                <Image style={ styles.logo } source={require('../../img/logopng.png')} />
            </LinearGradient>
        );
    }
}
