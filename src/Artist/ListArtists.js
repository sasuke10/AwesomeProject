import React, { Component } from 'react';
import {
  ListView,
} from 'react-native';
import Artist from './Artist';

export default class ListArtists extends Component {
  /* Data source nos pide todos los items que vamos a renderear, pero
     lo pide de la forma ListView.DataSource (es como un raper del arrar,
     con algunas funcionalidades mas).
  */

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(Array(300).fill({ name: 'joshua'})),
    };
  }

  render() {
    return (
      <ListView dataSource={ this.state.dataSource } renderRow={ rouData => <Artist /> } />
    );
  }
}
