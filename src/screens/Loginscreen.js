import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, Text, View, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from '../constants/Login';

const delay = 0.5;

export default function Loginscreen({navigation}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <View>
      {show ? (
        <View style={{width: '100%', height: '100%'}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#111', '#1E71ED']}
            style={styles.linearGradient}>
            <Login screenName="Otpscreen" />
          </LinearGradient>
        </View>
      ) : (
        <View style={{width: '100%', height: '100%'}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#111', '#1E71ED']}
            style={styles.linearGradient}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/Logomain.png')}
                style={{width: 250, height: 90}}
              />
            </View>
          </LinearGradient>
        </View>
      )}
      {/* <Button
      title="Go to Profile"
      onPress={() => navigation.navigate('Profile')}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
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
});
// #1E71ED Dark blue
// #33E6F6 Blue circle gradient
// #33E6F6 Blue
