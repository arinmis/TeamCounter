import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

function CustomButton({onPress, title}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 10,
    backgroundColor: '#008080',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  text: {
    color: 'white',
  },
});

export default CustomButton;
