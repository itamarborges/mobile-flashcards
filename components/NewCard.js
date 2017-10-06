import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import Button from './common/Button';
import { submitnewCard } from '../utils/api';
import * as Helper from '../utils/helpers';
import { loadAllDecks } from '../actions';

class newCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  clearFields = () => this.setState({ title: ''});

  submitnewCard = () => {
    const { title } = this.state;

    if (Helper.stringIsEmpty(title)) {
      Alert.alert('You must fill the name for a new deck!');
    } else {
      submitnewCard(title);
      this.clearFields();
      this.props.loadAllDecks();
      this.props.navigation.navigate('Home' );
    }
  }

  render() {
    const { container, headLine, textArea, question } = styles;

    return(
      <View
        behavior="padding"
        style={container} >

        <Text style={headLine}>Question:</Text>
        <TextInput
          value={this.state.title}
          autoCorrect={false}
          style={question}
          placeholder="Type your question here"
          onChangeText={(question) => this.setState({question})}
        />

        <Text style={headLine}>Answer:</Text>
        <TextInput
          multiline
          value={this.state.title}
          autoCorrect={false}
          style={textArea}
          placeholder="Type the answer here"
          onChangeText={(answer) => this.setState({answer})}
        />
        <Button btnStyle={{ alignSelf: 'center'}} onPress={this.submitnewCard}>
          SUBMIT
        </Button>

      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
  },
  headLine: {
    fontSize: 16,
    marginBottom: 20
  },
  question: {
    height: 40,
    marginBottom: 20,
    fontSize: 16
  },
  textArea: {
    height: 80,
    borderColor: 'gray',
    marginBottom: 20,
    fontSize: 16,
  }
})

export default connect( null, { loadAllDecks }) (newCard);
