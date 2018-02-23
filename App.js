/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux'


type Props = {};
import HomeView from './components/HomeView'
import ArtistDetail from './components/ArtistDetailView'


export default class App extends Component<Props> {
  render() {
    const isAndroid = Platform.OS === 'android'

    return <Router>
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar />
        <Scene key="artistDetail" component={ArtistDetail} hideNavBar={isAndroid} />
      </Scene>
    </Router>
  }
}

AppRegistry.registerComponent('almundoApp', () => almundoApp);