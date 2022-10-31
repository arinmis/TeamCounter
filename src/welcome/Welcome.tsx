import Link from '../components/Link';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Content from '../components/Content';
import CustomButton from '../components/custom_button/CustomButton';
import PageImage from '../components/PageImage';
import {Footballer} from '../images';

const Welcome = ({navigation}) => {
  return (
    <Content>
      <PageImage src={Footballer} aspectRatio={1} />
      <View style={styles.inputContainer}>
        <View style={styles.buttonContiner}>
          <CustomButton onPress={() => {}} text="Organize a Match" />
        </View>
        <Link
          onPress={() => {
            navigation.push('login');
          }}
          text="You invited to a match? Join your team with a code."
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

export default Welcome;
