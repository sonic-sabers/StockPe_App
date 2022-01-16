import React, {useState} from 'react';
import {View,Button, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import { Input, TextButton} from '../components';
// service
import {Auth} from '../services';

import auth from '@react-native-firebase/auth';
import BottomNavigators from './BottomNavigators';
// function onAuthStateChanged(user) {
//   setUser(user);
//   if (initializing) setInitializing(false);
// }
const delay = 0.5;
export default Home = ({navigation}) => {
  const [show, setShow] = useState(false);

  React.useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const [age, setage] = useState();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <View style={{width: '100%', height: '100%'}}>
      <BottomNavigators />
      <Text>Yeh remove hojye ga,Neeche wala</Text>
      <Button title="Sign Out" onPress={() => Auth.signOut()}/>
    </View>
  );
};
