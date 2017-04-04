/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import ListArtists from './Artist/ListArtists';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListArtists />
      </View>
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
