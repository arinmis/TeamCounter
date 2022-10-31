import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Content from '../components/Content';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/custom_button/CustomButton';
import Link from '../components/Link';
import PageImage from '../components/PageImage';
import {Basketballer} from '../images';

const Singup = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // post singup
  function handleClick() {
    console.log(`email ${email} and password ${password}`);
    navigation.push('login');
  }

  return (
    <Content>
      <PageImage src={Basketballer} aspectRatio={1} />
      <View style={styles.inputContainer}>
        <CustomTextInput
          onChange={setUsername}
          value={username}
          secureTextEntry={false}
          placeholder="Username"
        />
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
        <View style={styles.buttonContiner}>
          <CustomButton onPress={handleClick} text="Singup" />
        </View>
        <Link
          onPress={() => navigation.push('login')}
          text="Don’t you have an account? Just singup."
        />
      </View>
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
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    borderRadius: 35,
    padding: 10,
  },
  buttonContiner: {
    marginTop: '12%',
  },
});

export default Singup;
