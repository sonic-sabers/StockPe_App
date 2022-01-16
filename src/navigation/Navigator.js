import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-community/google-signin';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

import auth from '@react-native-firebase/auth';

export default Navigator = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

    function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1022241950588-4dfrc16ms1llha50mmr5r7hp0kg4h2pv.apps.googleusercontent.com',
    });
    
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  if (initializing) return null;

    return(
        <NavigationContainer>
            { user ? <AppNavigator /> : <AuthNavigator /> }
        </NavigationContainer>
    )
}