import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import {Button, Input, TextButton, SocialButton} from '../components';
// service
import Auth from '../services/Auth';

export default Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <Input
        placeholder="Email"
        value={email}
        onChangeText={e => setEmail(e)}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={e => setPassword(e)}
      />

      <TextButton
        text="Forget Password"
        onPress={() => navigation.navigate('ForgetPassword')}
      />

      <Button buttonText="Login" onPress={() => Auth.signIn(email, password)} />

      <TextButton
        text="Have not an account? SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    // borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  input: {
    height: 50,
    marginHorizontal: 12,
    borderWidth: 0.4,
    padding: 10,
    width: '100%',
    // height: 40,
    // borderRadius:5,
    // borderBottomRadius:30,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    borderColor: '#EEE',
    // backgroundColor: 'white',
    marginBottom: 30,
    backgroundColor: 'rgba(1, 1, 1, 0.1)',
    color: 'white',
  },
  inputCountry: {
    marginTop: 30,
    height: 50,
    marginHorizontal: 12,
    borderWidth: 0.4,
    padding: 10,
    width: '100%',
    // height: 40,
    // borderRadius:5,
    // borderBottomRadius:30,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderColor: '#EEE',
    // backgroundColor: 'white',

    backgroundColor: 'rgba(1, 1, 1, 0.1)',
    color: 'white',
  },
  font: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
