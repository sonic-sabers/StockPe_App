import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Button} from 'react-native';
import Toptab from './Toptab';
import Accountscreen from './Accountscreen';
import Loginscreen from './Loginscreen';
import Otpscreen from './Otpscreen';
import Otpscreen2 from './Otpscreen2';
// import HomeScreen from '../screens/HomeScreen';
// import Screen from '../screens/Screen';

const Tab = createBottomTabNavigator();

function HomeScreen({navigation}) {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Button
				title="Go to Screen"
				onPress={() => navigation.navigate('Screen')}
			/>
			<Button title="Go back" onPress={() => navigation.goBack()} />
		</View>
	);
}
function Screen({navigation}) {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<Button
				title="Go to HomeScreen"
				onPress={() => navigation.navigate('HomeScreen')}
			/>
		</View>
	);
}

const BottomNavigators = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				style: {
					height: 60,
					backgroundColor: '#111',
				},
				tabBarStyle: {position: 'absolute', backgroundColor: '#333'},
				headerStyle: {
					backgroundColor: '#333',
				},
				headerTintColor: '#fff',
				activeTintColor: 'blue',
				inactiveTintColor: 'green',
				showLabel: false,
				// activeTintColor: '#1E71ED',
			}}>
			<Tab.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					tabBarIcon: ({color}) => (
						<Icon name="home-filled" color={color} size={28} />
					),
				}}
			/>
			<Tab.Screen
				name="Tournament"
				component={Toptab}
				options={{
					tabBarIcon: ({color}) => <Icon name="code" color={color} size={28} />,
				}}
			/>
			<Tab.Screen
				name=" "
				component={Otpscreen}
				options={{
					tabBarIcon: ({color}) => (
						<View
							style={{
								height: 65,
								width: 65,
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: 'white',
								borderColor: '#1E71ED',
								borderWidth: 2,
								borderRadius: 30,
								top: -20,
								elevation: 5,
								backgroundColor: '#1E71ED',
								shadowColor: '#000',
								shadowOpacity: 0.2,
								shadowOffset: {width: 0, height: 2},
								elevation: 2,
								zIndex: 10,
							}}>
							<Icon name="trending-up" color={'#222'} size={28} />
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Leaderboard"
				component={Otpscreen2}
				options={{
					tabBarIcon: ({color}) => (
						<Icon name="leaderboard" color={color} size={28} />
					),
				}}
			/>
			<Tab.Screen
				name="Account"
				component={Accountscreen}
				options={{
					tabBarIcon: ({color}) => (
						<Icon name="account-circle" color={color} size={28} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomNavigators;
