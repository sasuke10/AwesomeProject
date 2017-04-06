import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class TestView extends Component {
  render() {
    return (
      <View style={styles.container}>

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
