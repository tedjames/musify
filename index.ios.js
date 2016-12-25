/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
} from 'react-native';
import { NavigationBar, Button, Icon, Title, Tile, Caption, Image, Text, Overlay, Subtitle, Screen, View } from '@shoutem/ui';
import Home from './src/components/Home';
import Header from './src/components/Header';

export default class musify extends Component {
  render() {
    return (
      <Screen>
        <StatusBar
           barStyle="dark-content"
         />
       <Header text={'HOME'} />
        <Home />
      </Screen>
    );
  }
}


AppRegistry.registerComponent('musify', () => musify);

/**

<View>
  <StatusBar
     translucent={true}
     barStyle="light-content"
     hidden={false}
  />
  <Header headerText={"ALBUMS"} />
  <AlbumList />
</View>

**/
