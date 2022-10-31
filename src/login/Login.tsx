import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import CustomButton from '../components/custom_button/CustomButton';
import {AllSports} from '../images';
import Content from '../components/Content';
import PageImage from '../components/PageImage';
import Link from '../components/Link';

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
      <PageImage src={AllSports} />
      <Text>
        Organize your team for events like football, volleyball, basketball.
        Keep track of players, and share match information with others.
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          // onChangeText={onChangeNumber}
          value={email}
          placeholder="User name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          // onChangeText={onChangeNumber}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
        />
      </View>
      <View style={styles.buttonContiner}>
        <CustomButton onPress={handleClick} title="Login" />
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
    // flex: 2,
    // alignItems: 'center',
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

export default Login;
