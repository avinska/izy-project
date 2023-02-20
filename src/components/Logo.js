/* eslint-disable */
import React from 'react';
import {Image, StyleSheet} from 'react-native';

export default function Logo() {
  return (
    <Image
      source={require('../assets/logo_cornerstone.png')}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    height: 65,
    marginBottom: 80,
  },
});
