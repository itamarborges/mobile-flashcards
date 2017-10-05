import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from './common/Button';

class Deck extends Component {

  render() {
    const { containerStyle, textStyle, titleTextStyle, btnStyle } = styles;
    const { title } = this.props.navigation.state.params;


    const { allDecks } = this.props.decks;
    const deck = allDecks[title];

    console.log('teste '+ this.opa);

    return (
      <View style={containerStyle}>
        <Text style={titleTextStyle}>{deck.title}</Text>
        <Text style={textStyle}>{deck.questions.length === 1
                                 ? '1 card'
                                 : `${deck.questions.length} cards`}</Text>
        <Button btnStyle={btnStyle}>
          Add Card
        </Button>
        <Button btnStyle={btnStyle}>
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
