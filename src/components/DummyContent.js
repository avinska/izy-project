import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function DummyContent() {
  return (
    <View>
      <Text>dummy content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 5,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
