import React from 'react';
import {View} from 'react-native';

function Content(props) {
  return (
    <View {...props} style={[{padding: 20}, props.style]}>
      {props.children}
    </View>
  );
}

export default Content;
