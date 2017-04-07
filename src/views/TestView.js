import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Platform,
} from 'react-native';
import MapView from 'react-native-maps';

const isAndroid = Platform.OS === 'android';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    mapAndroid: {
    },
});

export default class TestView extends Component {
    render() {
        console.warn('a', MapView);
        const stylesMap = isAndroid ? styles.mapAndroid : styles.map;

        return (
            <View style={ styles.container }>
            <MapView
              style={ stylesMap }
              initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
              }}
            />
            </View>
        );
    }
}
