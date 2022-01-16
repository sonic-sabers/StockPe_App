import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home,  } from "../screens";
// import Loginscreen from "../screens/Loginscreen";
import BottomNavigators from "../screens/BottomNavigators";
import Accountscreen from "../screens/Accountscreen";

const Stack = createStackNavigator();

export default AppNavigator = () => (
    <Stack.Navigator
        screenOptions = {{
            headerShown: null
        }}
    >     
        <Stack.Screen 
            name="Home" 
            component= {Home}
        />          
        <Stack.Screen 
            name="BottomNavigators" 
            component= {BottomNavigators}
        />          
        <Stack.Screen 
            name="Accountscreen" 
            component= {Accountscreen}
        />          
         
    </Stack.Navigator> 
)