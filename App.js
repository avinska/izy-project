/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, createContext, useContext, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';

import SplashScreen from 'react-native-splash-screen';
import TabNavigator from './src/navigators/TabNavigator';
import StackNavigator from './src/navigators/StackNavigator';

export const ComplaintsContext = createContext(null);

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      tenantName: 'Paradise Coffee',
      status: 'Waiting',
      type: 'Complaint',
      code: 'L1 #03',
      description:
        'All lights are off & can’t be turned on although MCB looks fine',
      category: 'Electricity',
      assignee: null,
    },
    {
      id: 2,
      tenantName: 'Paradise Coffee',
      status: 'Processed',
      type: 'Complaint',
      code: 'L1 #03',
      description:
        'Lorem ipsum dolor sit amet, consectet adipiscing elit. Phasellus velit lacu …',
      category: 'Electricity',
      assignee: 'B',
    },
  ]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#fff',
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ComplaintsContext.Provider
      value={{
        complaints,
        setComplaints,
      }}>
      <NavigationContainer>
        <StackNavigator>
          <SafeAreaView style={backgroundStyle}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={backgroundStyle.backgroundColor}
            />
            {/* <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}></ScrollView> */}
          </SafeAreaView>
        </StackNavigator>
      </NavigationContainer>
    </ComplaintsContext.Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
