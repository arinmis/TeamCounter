import React from 'react';
import {Image, StyleSheet} from 'react-native';

const PageImage = ({src, aspectRatio}) => {
  return (
    <Image
      style={[
        styles.image,
        {
          aspectRatio: aspectRatio,
        },
      ]}
      source={src}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '90%',
    // Without height undefined it won't work
    height: undefined,
    // figure out your image aspect ratio
    borderRadius: 5,
  },
});

export default PageImage;
