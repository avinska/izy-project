import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FloatingButton = () => {
  return (
    <TouchableOpacity style={styles.floatingBtn}>
      <Icon name="plus" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  floatingBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 5,
    right: 5,
    height: 70,
    backgroundColor: '#BAC62A',
    borderRadius: 100,
    elevation: 0.4,
  },
});
