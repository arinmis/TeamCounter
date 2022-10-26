import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
import CustomButton from '../components/custom_button/CustomButton';
import {AllSports} from '../images';
import Content from '../components/Content';

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
      <View style={styles.container}>
        <Image style={styles.image} source={AllSports} />
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
        <CustomButton onPress={handleClick} title="Login" />
      </View>
    </Content>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '90%',
    // Without height undefined it won't work
    height: undefined,
    // figure out your image aspect ratio
    aspectRatio: 135 / 76,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: '10%',
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    borderRadius: 35,
    padding: 10,
  },
});

export default Login;
