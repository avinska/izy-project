import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

export default function SubmittedScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.text}>
            Your complaint has been submitted. We apologize for your
            inconvenience and we are working on resolving your complaint as soon
            as possible.
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('FormList')}>
            <Text style={styles.btnText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginHorizontal: 40,
    paddingTop: 35,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    color: '#212121',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 23,
    paddingBottom: 46,
  },
  btn: {
    backgroundColor: '#1E1934',
    alignItems: 'center',
    padding: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 500,
  },
});
