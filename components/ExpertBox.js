
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

export default class ExpertBox extends Component {
  render() {
    const { image, name, language, skill } = this.props.expert;

    return (
      <View style={styles.expertBox}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon name="ios-school-outline" size={30} color="gray" />
              <Text style={styles.count} >Languages</Text>
              <Text style={styles.count}>{language}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="ios-happy-outline" size={30} color="gray" />
              <Text style={styles.count} >Soft Skills</Text>
              <Text style={styles.count}>{skill}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  expertBox: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .3,
    shadowOffset: {
      height: 2,
      width: -2
    },
    elevation: 2
  },
  image: {
    width: 150,
    height: 150,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: 20,
    marginTop: 10,
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