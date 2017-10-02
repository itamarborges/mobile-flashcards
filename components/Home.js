import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../utils/api';
import { loadAllDecks } from '../actions';

class Home extends Component {
  state = {
    loading: false,
  }

  componentWillMount() {
    this.setState({ loading: true });
  }

  componentDidMount() {
    this.props.loadAllDecks()
    //.then(this.setState({ loading: false}));
  }

  render() {
    // if (this.state.loading) {
    //     return <ActivityIndicator style={{ marginTop: 30 }} />
    // }

    return(
      <View style={styles.container}>
        <Text>HOME</Text>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect( null, { loadAllDecks })(Home);
