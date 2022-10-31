import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Link = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  button: {},
  text: {
    color: '#008080',
    textDecorationLine: 'underline',
    marginTop: '3%',
  },
});
