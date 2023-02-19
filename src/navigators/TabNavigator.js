import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MeongScreen from '../screens/MeongScreen';
import DummyContent from '../components/DummyContent';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Chat') {
            iconName = focused
              ? 'chatbox-ellipses'
              : 'chatbox-ellipses-outline';
          } else if (route.name === 'Others') {
            iconName = focused ? 'list-outline' : 'list-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerTitleAlign: 'Center',
        headerShown: true,
        headerTintColor: '#212121',
        headerTitle: (
          props, // App Logo
        ) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 150}}
              source={require('../assets/logo_cornerstone.png')}
              resizeMode="contain"
            />
            <TouchableOpacity onClick={() => {}}>
              <Image
                style={{width: 30}}
                source={require('../assets/notification.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: {backgroundColor: '#fff'},
        tabBarActiveTintColor: '#BAC62A',
        tabBarInactiveTintColor: '#212121',
        tabBarActiveBackgroundColor: '#fff',
        tabBarInactiveBackgroundColor: '#fff',
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={MeongScreen} />
      <Tab.Screen name="Chat" component={DummyContent} />
      <Tab.Screen name="Others" component={DummyContent} />
    </Tab.Navigator>
  );
}
