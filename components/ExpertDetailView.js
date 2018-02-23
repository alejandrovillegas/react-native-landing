
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import ExpertBox from './ExpertBox'

export default class ExpertDetailView extends Component {
  render() {
    const artist = this.props.artist

    return (
      <View style={styles.container}>
        <ExpertBox artist={artist} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ec5d41',
    paddingTop: 70,
  },
});