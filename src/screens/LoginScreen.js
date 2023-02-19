import React, {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
// import TextInput from '../components/TextInput';
import Logo from '../components/Logo';
import Background from '../components/Background';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  return (
    <Background>
      <Logo />
      <View style={styles.inputContainer}>
        <TextInput
          // label="Email"
          // returnKeyType="next"
          style={styles.input}
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          placeholder="Username / Email"
          // error={!!email.error}
          // errorText={email.error}
          // autoCapitalize="none"
          // autoCompleteType="email"
          // textContentType="emailAddress"
          // keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          // label="Password"
          // returnKeyType="done"
          style={styles.input}
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          placeholder="Password"
          // error={!!password.error}
          // errorText={password.error}
          secureTextEntry
          type="password"
        />
      </View>
      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgot}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
        <Text style={{color: '#212529', fontWeight: '500'}}>LOG IN</Text>
      </TouchableOpacity>
    </Background>
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
