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
    const { deck } = this.state;
    const { title } = this.props.navigation.state.params;

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
        'NewCard'
      )
  }

  componentWillMount() {
    const { allDecks } = this.props.decks;
    const { title } = this.props.navigation.state.params;

    this.setState({deck : allDecks[title]});
  }

  render() {
    const { containerStyle, textStyle, titleTextStyle, btnStyle } = styles;
    const { deck } = this.state;

    return (
      <View style={containerStyle}>
        <Text style={titleTextStyle}>{deck.title}</Text>
        <Text style={textStyle}>{deck.questions.length === 1
                                 ? '1 card'
                                 : `${deck.questions.length} cards`}</Text>
        <Button btnStyle={btnStyle} onPress={this.newCard}>
          Add Card
        </Button>
        <Button btnStyle={btnStyle} onPress={this.startQuiz}>
          Start Quiz
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
    alignItems: 'center',

	},
  btnStyle: {
    marginTop: 30,
  }
})

mapStateToProps = ({ decks }) => ({ decks });

export default connect(mapStateToProps)(Deck);
