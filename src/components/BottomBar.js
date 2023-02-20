import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function BottomBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{...styles.linearGradient, backgroundColor: '#EFEFEF'}}>
        <Text style={{...styles.buttonText, color: '#9B9B9B'}}>FILTER</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Form')}>
        <LinearGradient
          colors={['#403664', '#1E1934', '#1E1934']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>CREATE FORM</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    position: 'absolute',
    bottom: 0,
    paddingVertical: 16,
    paddingHorizontal: 10,
    width: '100%',
    zIndex: 0,
  },
  linearGradient: {
    // flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 12,
    textAlign: 'center',
    // margin: 10,
    color: '#fff',
    backgroundColor: 'transparent',
  },
});
