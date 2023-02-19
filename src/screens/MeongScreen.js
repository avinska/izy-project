import React, {useState} from 'react';
import Tabs from '../components/Tabs';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

export default function MeongScreen({navigation}) {
  return (
    <View>
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    height: 40,
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
  },
  forgotPassword: {
    width: '100%',
    justifyContent: 'flex-end',
    textAlign: 'right',
    marginBottom: 30,
  },
  forgot: {
    fontSize: 13,
    color: '#212529',
    fontWeight: 500,
    textAlign: 'right',
  },
  loginButton: {
    backgroundColor: '#BBCA2B',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 8,
  },
});
