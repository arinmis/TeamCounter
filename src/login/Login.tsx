import * as React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../components/custom_button/CustomButton';

const Login = ({navigation}) => {
  function handleClick() {
    console.log('here');
    navigation.navigate('welcome');
  }

  return (
    <View>
      <Text>Login</Text>
      <CustomButton onPress={handleClick} title="Login" />
    </View>
  );
};

export default Login;
