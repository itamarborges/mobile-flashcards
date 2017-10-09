import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Button from './common/Button';
import { submitNewDeck } from '../utils/api';
import * as Helper from '../utils/helpers';
import { newDeck } from '../actions';

class Quiz extends Component {
  state = {
    currentQuestion: 1,
    showQuestion: true,
    rightAnswers: 0
  }

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;
    return{
      title: `${title}`
    }
  }

  constructor(props) {
    super(props);
    this.title = props.navigation.state.params && props.navigation.state.params.title;
    this.deck = this.props.decks.allDecks[this.title];
  }

  showAnswer = () => {
    this.setState({ showQuestion: false })
  }

  rightAnswer = (rightAnswer) => {

    const rightAnswers = rightAnswer ? this.state.rightAnswers + 1 : this.state.rightAnswers;

    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      showQuestion: true,
      rightAnswers,
    })
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    const { container, bigTextStyle, btnStyle, btnRightStyle, btnWrongStyle } = styles;
    const { showQuestion, currentQuestion, rightAnswers } = this.state;
    const { questions } = this.deck;

    if (currentQuestion > questions.length) {
      return(
        <View style={container}>
          <Text>Results</Text>
          <Text style={bigTextStyle}>{rightAnswers} of {questions.length} right!</Text>
          <Button
            btnStyle={btnStyle}
            onPress={this.goBack} >
            Go Back
          </Button>
        </View>
      )
    }
;
    if (showQuestion) {
      return(
        <View style={container}>
          <Text>{currentQuestion} of {questions.length}</Text>
          <Text style={bigTextStyle}>{questions[currentQuestion-1].question}</Text>
          <Button btnStyle={btnStyle} onPress={this.showAnswer}>Show the answer</Button>
        </View>
      )
    }

    return(
      <View style={container}>
        <Text>{currentQuestion} of {questions.length}</Text>
        <Text style={bigTextStyle}>{questions[currentQuestion-1].answer}</Text>

        <Button btnStyle={btnRightStyle} onPress={() => this.rightAnswer(true)}>Right</Button>
        <Button btnStyle={btnWrongStyle} onPress={() => this.rightAnswer(false)}>Wrong</Button>
      </View>
    )


  }

}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    bigTextStyle: {
      fontSize: 32,
      marginTop: 40
    },
    btnStyle: {
      marginTop: 40
    },
    btnRightStyle: {
      marginTop: 40,
      backgroundColor: 'green',
      width: 200,
    },
    btnWrongStyle: {
      marginTop: 20,
      backgroundColor: 'red',
      width: 200,
    }
  })

  mapStateToProps = ({ decks }) => ({ decks });

  export default connect( mapStateToProps, { newDeck }) (Quiz);
