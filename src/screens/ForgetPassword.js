import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Button, Input, TextButton} from '../components';
// services
import {Auth} from '../services';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window');

export default ForgetPassword = ({navigation}) => {
  const [email, setEmail] = useState();

  return (
    <View>
      <View style={{width: '100%', height: '100%'}}>
      {/* <Text>Hibsvdvsd</Text> */}
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#111', '#1E71ED']}
          style={styles.linearGradient}>
          {/* <Login screenName="Otpscreen" /> */}
          <View style={styles.container}>
            <Input
              placeholder="Email"
              value={email}
              onChangeText={e => setEmail(e)}
            />

            <Button
              buttonText="Forget Password"
              onPress={() => Auth.forgetPassword(email)}
            />

            <TextButton
              text="Back to Login"
              onPress={() => navigation.navigate('Loginscreen')}
            />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
    width,
    flex: 1,
    // backgroundColor: colors.white,
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
