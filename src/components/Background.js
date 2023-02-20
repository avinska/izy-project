import React from 'react';
import {StyleSheet, KeyboardAvoidingView} from 'react-native';

export default function Background({children}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      {children}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 5,
    backgroundColor: '#fff',
    width: '100%',
    // maxWidth: 340,
    paddingHorizontal: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
