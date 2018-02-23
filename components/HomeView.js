
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import ExpertList from './ExpertList'
import { getExperts } from './api-client'

export default class HomeView extends Component {
  state = {
    experts: []
  }

  componentDidMount() {
    getExperts()
      .then(data => this.setState({ experts: data }))
  }

  render() {
    const experts = this.state.experts

    return (
      <View style={styles.container}>
        <ExpertList experts={experts} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ec5d41',
    paddingTop: 50,
  },
});