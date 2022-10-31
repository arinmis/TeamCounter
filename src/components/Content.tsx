import React from 'react';
import {View, StyleSheet} from 'react-native';

function Content({children}) {
  return <View style={styles.main}>{children}</View>;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});

export default Content;
