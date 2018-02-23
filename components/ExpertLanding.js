
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

export default class ExpertLanding extends Component {
  render() {
    const { image, name, mail, residence } = this.props.expert;

    return (
      <View style={styles.expertBox}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.mail}>{mail}</Text>
          <Text style={styles.mail}>{residence}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  expertBox: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: .3,
    shadowOffset: {
      height: 2,
      width: -2
    },
    elevation: 2
  },
  image: {
    marginTop: 20,
    width: 150,
    height: 150,
    borderRadius: 50
  },
  info: {
    alignItems: 'center'
  },
  skills: {
    flex: 1,
  },
  name: {
    fontSize: 30,
    marginTop: 10,
    color: '#333'
  },
  mail: {
    fontSize: 15,
    marginTop: 8,
    color: '#333'
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 15
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center'
  },
  count: {
    color: 'gray'
  }
});