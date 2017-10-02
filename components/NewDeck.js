import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import Button from './common/Button';
import { submitNewDeck } from '../utils/api';
import { stringIsEmpty } from '../utils/helpers';

class NewDeck extends Component {
  state = {
    deckName: ''
  }

  clearFields = () => this.setState({ deckName: ''});

  submitNewDeck = () => {
    const { deckName } = this.state;

    if (stringIsEmpty(deckName)) {
      Alert.alert('You must fill the name for a new deck!');
    } else {
      submitNewDeck(deckName);
      this.clearFields();
      this.props.navigation.navigate('Home' );
    }

    //if
  }

  render() {

    return(
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container} >

        <Text style={{ fontSize: 20, marginBottom: 20 }}>What is the title of your new deck?</Text>
        <TextInput
          value={this.state.deckName}
          autoCorrect={false}
          style={{height: 40, marginBottom: 20}}
          placeholder="Type the name of your new deck"
          onChangeText={(deckName) => this.setState({deckName})}
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

export default NewDeck;
