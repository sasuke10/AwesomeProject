import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const image = 'https://avatars1.githubusercontent.com/u/26877548?v=3&u=c5f1b519a53cc7a5541dbd98d058e1afa977e3c2&s=400';
const name = 'Sasuke Uchija';
const likes = 200;

export default class Artist extends Component {

  handlePress() {
    Actions.testview();
  }

  render() {
    return (
      <TouchableOpacity onPress={ this.handlePress }>
        <View style={ styles.box }>
          <Image style={ styles.image } source={{ uri: image }} />
          <View style={ styles.info }>
            <Text style={ styles.name }>{ name }</Text>
            <Icon name="rocket" size={30} color="#900" />
            <Text>{ likes }</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
});
