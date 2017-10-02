import React   from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { white } from '../../utils/colors';

export default function Button({ children, onPress, btnStyle, textStyle}){

  return (
    <TouchableOpacity style={[styles.buttonStyle, btnStyle]} onPress={onPress} >
      <Text style={[styles.textStyle, textStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textStyle: {
		alignSelf: 'center',
		fontSize: 16,
		fontWeight: '600',
    color: white,

	},
	buttonStyle: {
    justifyContent: 'center',
		backgroundColor: '#000',
    borderRadius: 7,
    padding: 15
	}
})
