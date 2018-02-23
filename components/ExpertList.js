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
    this.updateDataSource(this.props.experts)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.experts !== this.props.experts) {
      this.updateDataSource(newProps.experts)
    }
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

  handlePress(expert) {
    Actions.expertDetail({ expert })
  }

  render() {
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(expert) => {
          return <TouchableOpacity onPress={() => this.handlePress(expert)}>
            <ExpertBox expert={expert} />
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