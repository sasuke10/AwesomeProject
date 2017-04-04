import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
} from 'react-native';
import ListArtists from '../artists/ListArtists';

export default class HomeView extends Component {
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
