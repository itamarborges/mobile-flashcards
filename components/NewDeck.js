import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import Button from './common/Button';
import { submitNewDeck } from '../utils/api';
import * as Helper from '../utils/helpers';
import { newDeck } from '../actions';

class NewDeck extends Component {

  state = {
    title: ''
  }

  clearFields = () => this.setState({ title: ''});

  submitNewDeck = () => {
    const { title } = this.state;

    if (Helper.stringIsEmpty(title)) {
      Alert.alert('You must fill the name for a new deck!');
    } else {

      this.props.newDeck(title);
      this.clearFields();

      this.props.navigation.navigate('Home' );
    }
  }

  render() {

    return(
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container} >

        <Text style={{ fontSize: 20, marginBottom: 20 }}>What is the title of your new deck?</Text>
        <TextInput
          value={this.state.title}
          autoCorrect={false}
          style={{height: 40, marginBottom: 20}}
          placeholder="Type the name of your new deck"
          onChangeText={(title) => this.setState({title})}
        />
      <Button onPress={this.submitNewDeck}>
        SUBMIT
      </Button>

      </KeyboardAvoidingView>
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

export default connect( null, { newDeck }) (NewDeck);
