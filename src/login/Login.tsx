import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CustomButton from '../components/custom_button/CustomButton';
import {AllSports} from '../images';
import Content from '../components/Content';
import PageImage from '../components/PageImage';
import Link from '../components/Link';
import CustomTextInput from '../components/CustomTextInput';

const Login = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // handle auth
  function handleClick() {
    console.log(`email ${email} and password ${password}`);
    navigation.push('welcome');
  }

  return (
    <Content>
      <PageImage src={AllSports} aspectRatio={135 / 76} />
      <Text>
        Organize your team for events like football, volleyball, basketball.
        Keep track of players, and share match information with others.
      </Text>
      <View style={styles.inputContainer}>
        <CustomTextInput
          onChange={setEmail}
          value={email}
          placeholder="Email"
          secureTextEntry={false}
        />
        <CustomTextInput
          onChange={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>
      <View style={styles.buttonContiner}>
        <CustomButton onPress={handleClick} text="Login" />
      </View>
      <Link
        onPress={() => {
          navigation.push('singup');
        }}
        text="Don’t you have an account? Just singup."
      />
    </Content>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: '10%',
    marginTop: '30%',
  },
  buttonContiner: {
    marginTop: '12%',
  },
});

export default Login;
