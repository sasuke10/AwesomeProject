import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class TestView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Esta es una vista de prueba </Text>
        <Text> Esta es una vista de prueba </Text>
        <Text> Esta es una vista de prueba </Text>
        <Text> Esta es una vista de prueba </Text>
        <Text> Esta es una vista de prueba </Text>
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
