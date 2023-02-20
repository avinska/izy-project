import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import FormList from '../screens/FormList';
import TabNavigator from './TabNavigator';
import ComplaintDetail from '../screens/ComplaintDetail';
import FormComplaint from '../screens/FormComplaint';
import SubmittedScreen from '../screens/SubmittedScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: '#1E1934',
        headerStyle: {backgroundColor: '#fff'},
        // headerShown: false,
      }}>
      <Stack.Screen
        name="HomeTab"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FormList"
        component={FormList}
        options={{
          title: 'Form List',
        }}
      />
      <Stack.Screen
        name="Form"
        component={FormComplaint}
        options={{
          title: 'Complaint Form',
        }}
      />
      <Stack.Screen
        name="Submit"
        component={SubmittedScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={ComplaintDetail}
        options={{
          title: 'Detail',
        }}
      />
    </Stack.Navigator>
  );
}
