import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const CustomTextInput = props => {
  return (
    <TextInput
      style={styles.main}
      onChangeText={props.onChange}
      // onChangeText={onChangeNumber}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
      placeholder={props.placeholder}
    />
  );
};

const styles = StyleSheet.create({
  main: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    borderRadius: 35,
    padding: 10,
  },
});

export default CustomTextInput;
