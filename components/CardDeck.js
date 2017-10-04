import React   from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CardDeck({ deckName, qtdCards, onPress }){

  const { containerStyle, textStyle, titleTextStyle } = styles;

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress} >
      <Text style={titleTextStyle}>{deckName}</Text>
      <Text style={textStyle}>{qtdCards === 1
                               ? '1 question'
                               : `${qtdCards} questions`}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  titleTextStyle: {
		fontSize: 30,
		fontWeight: '600',
    paddingBottom: 10

	},
  textStyle: {
    fontSize: 16,
  },
  containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center'
	}
})
