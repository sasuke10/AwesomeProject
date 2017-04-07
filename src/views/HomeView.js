import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import ListArtists from '../artists/ListArtists';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 50,
    },
});

export default class HomeView extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <ListArtists />
            </View>
        );
    }
}
