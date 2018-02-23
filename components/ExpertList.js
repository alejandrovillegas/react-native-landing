import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  TouchableOpacity,
} from 'react-native';

import ExpertBox from './ExpertBox'
import { Actions } from 'react-native-router-flux'

export default class ExpertList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => {
      r1 !== r2
    }})
    this.state = {
      dataSource: ds
    }
  }

  componentDidMount() {
    this.updateDataSource(this.props.artists)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.artists !== this.props.artists) {
      this.updateDataSource(newProps.artists)
    }
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

  handlePress(artist) {
    Actions.expertDetail({ artist })
  }

  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(artist) => {
          return <TouchableOpacity onPress={() => this.handlePress(artist)}>
            <ExpertBox artist={artist} />
          </TouchableOpacity>
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});