import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { firebaseAuth, facebookAddProvider } from '../../helpers/firebase';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

const permitions = [ 'public_profile', 'email' ];

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
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    logo: {
        height: 100,
        width: 330,
        marginTop: 80,
    },
    iconGeo: {
        height: 75,
        width: 57,
        marginTop: 80,
    },
    textAllowGeo: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 15,
    },
    buttonGeo: {
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 60,
        width: 140,
        height: 30,
        paddingTop: 6,
    },
});

export default class LoginView extends Component {

    constructor() {
        super();
        this.state = {
            credential: null,
        };
    }

    componentWillMount() {
        this.authenticateUser();
    }

    authenticateUser () {
        AccessToken.getCurrentAccessToken().then(
            data => {
                if (!data) return;
                const { accessToken } = data;
                const credential = facebookAddProvider.credential(accessToken);
                firebaseAuth.signInWithCredential(credential)
                            .then(
                              credentials => {
                                  this.setState({ credentials });
                                  Actions.root();
                              },
                              error => console.warn('error', error)
                            );
            }
        );
    }

    handleLoginFinish (error, result) {
        return () => {
            if (error) {
                console.error(error);
            } else if (result.isCancelled) {
                console.warn('login is cancelled.');
            } else {
                this.authenticateUser();
            }
        };
    }

    componentDidMount() {
        // navigator.geolocation.getCurrentPosition(
        //     position => {
        //         const initialPosition = JSON.stringify(position);
        //         this.setState({ initialPosition });
        //     },
        //     error => alert(error.message),
        //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        //     );
        //
        // this.watchID = navigator.geolocation.watchPosition(position => {
        //     const lastPosition = JSON.stringify(position);
        //     this.setState({ lastPosition });
        // });
    }

    handlePress() {
        Actions.root();
    }


    render() {
        return (
            <LinearGradient
                colors={['#f74b25', '#f32778']}
                style={styles.linearGradient}
                start={{ x: 1.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }} >
                <Image style={ styles.logo } source={require('../../img/logopng.png')} />
                <Image style={ styles.iconGeo } source={require('../../img/ico_geolocalizacion.png')} />
                <Text style={ styles.textAllowGeo }>Kidzzer solicita que premitas la geolocaliación</Text>
                <TouchableOpacity onPress={ this.handlePress }>
                    <View style={ styles.buttonGeo }>
                        <Text>Permitir</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={ this.handlePress }>
                    <Text style={ styles.textAllowGeo }>Permitir</Text>
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}
