import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import Button from './common/Button';
import * as Helper from '../utils/helpers';
import { newCard } from '../actions';

class NewCard extends Component {
  constructor(props) {
    super(props);
    this.title = props.navigation.state.params && props.navigation.state.params.title;
  }


  static navigationOptions = ({ navigation }) => {
    return{
      title: `Add Card`
    }
  }

  state = {
    question: '',
    answer: '',
  }

  clearFields = () => this.setState({ question: '', answer: ''});

  submitnewCard = () => {
    const { question, answer } = this.state;

    if (Helper.stringIsEmpty(question)) {
      Alert.alert('You must type a question for a new card!');
      return;
    }

    if (Helper.stringIsEmpty(answer)) {
      Alert.alert('You must type an answer for your question!');
      return;
    }

    this.props.newCard(this.title, question, answer);
    this.clearFields();

    this.props.navigation.goBack();
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

export default connect( null, { newCard }) (NewCard);
