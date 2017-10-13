import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import Button from './common/Button';

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return{
      title: `Deck`
    }
  }

  state = {
    deck: null
  }

  startQuiz = () => {
    const { title } = this.props.navigation.state.params;
    const deck = this.props.decks.allDecks[title];

    if (deck.questions.length === 0) {
      return Alert.alert('You must add a card first!');
    }

    this.props.navigation.navigate(
        'Quiz',
        { title }
      )
  }

  newCard = () => {
    const { title } = this.props.navigation.state.params;

    this.props.navigation.navigate(
        'NewCard',
        { title }
      )
  }

  render() {
    const { containerStyle, textStyle, titleTextStyle, btnStyle } = styles;
    const { title } = this.props.navigation.state.params;
    const deck = this.props.decks.allDecks[title];

    return (
      <View style={containerStyle}>
        <Text style={titleTextStyle}>{deck.title}</Text>
        <Text style={textStyle}>{deck.questions.length === 1
                                 ? '1 card'
                                 : `${deck.questions.length} cards`}</Text>
        <Button btnStyle={btnStyle} onPress={this.startQuiz}>
          Start a Quiz
        </Button>
        <Button btnStyle={btnStyle} onPress={this.newCard}>
          Create New Question
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleTextStyle: {
		fontSize: 30,
		fontWeight: '600',
    paddingBottom: 10,
	},
  textStyle: {
    fontSize: 16,
  },
  containerStyle: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
	},
  btnStyle: {
    marginTop: 30,
  }
})

mapStateToProps = ({ decks }) => ({ decks });

export default connect(mapStateToProps)(Deck);
