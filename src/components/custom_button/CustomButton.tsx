import React from 'react';
import {Button} from 'react-native';

const CustomButton = ({onPress, title}) => {
  return <Button onPress={onPress} title={title} />;
};

export default CustomButton;
