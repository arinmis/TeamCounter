import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

function Content({children}) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.main}>{children}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
  },
});

export default Content;
