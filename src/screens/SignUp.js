import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Button, Input, TextButton} from '../components';
// services
import {Auth} from '../services';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

export default SignUp = ({navigation}) => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={{width: '100%', height: '100%'}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#111', '#1E71ED']}
        style={styles.linearGradient}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Input
              placeholder="Full Name"
              value={userName}
              onChangeText={e => setUserName(e)}
            />
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

            <Button
              buttonText="Sign Up"
              onPress={() => Auth.signUp(userName, email, password)}
            />

            <TextButton
              text="Have an account? Login"
              onPress={() => navigation.navigate('Loginscreen')}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    // borderRadius: 5,
  },
});
