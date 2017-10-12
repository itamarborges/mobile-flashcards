import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
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

      this.props.navigation.dispatch(
            NavigationActions.reset({
              index: 1,
              actions: [
                NavigationActions.navigate({
                    routeName: 'Main',
                  }),
                NavigationActions.navigate({
                    routeName: 'Deck',
                    params: { title: title },
                }
              )]
            })
          );

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
          style={{height: 40, marginBottom: 20 }}
          placeholder="Type the name of your new deck"
          onChangeText={(title) => this.setState({title})}
        />
      <Button onPress={this.submitNewDeck}>
        Create Deck
      </Button>

      </KeyboardAvoidingView>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    justifyContent: 'center',
  }
})

export default connect( null, { newDeck }) (NewDeck);
