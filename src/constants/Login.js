import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CallingCodePicker} from 'rn-country-code-picker';
import OtpInput from '../components/OtpInput';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import Auth from '../services/Auth';
import {Input, TextButton, SocialButton} from '../components';

export default function Login({screenName}) {
  const navigation = useNavigation();
  // const [number, onChangeNumber] = React.useState(null);
  const [Code, setCode] = React.useState('India(+91)');
  const [codeArr, setCodeArr] = useState([]);
  const [number, setNumber] = useState();
  const code = codeArr.join('');
  const [confirm, setConfirm] = useState(null);

  handleCode = (e, index) => {
    const codeArray = [...code];
    codeArray[index] = e;
    setCodeArr(codeArray);
  };

  const _sendOtp = () => {
    // Auth.sendOtp('+91' + number).then(confirmation => setConfirm(confirmation));
    if (number && number.length > 9 && number.length < 11) {
      Auth.sendOtp('+' + 91 + number).then(confirmation =>
        setConfirm(confirmation),
      );
      // navigation.navigate(screenName, number,confirm);
      navigation.navigate(screenName, {number, confirm});
      // { route: { params: { phoneNumber } }, navigation }
    } else alert('Please enter 10 digit phone number');
  };
  // };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={{width: '100%', height: '100%'}}>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <View style={{padding: 25}}>
            <Text
              style={{
                color: '#eee',
                fontSize: 30,
                fontWeight: 'bold',
                marginTop: 30,
              }}>
              Get starred
            </Text>

            <TextInput
              placeholder="Email"
              style={styles.inputCountry}
              underlineColorAndroid="transparent"
              placeholderTextColor="#EEE"
              value={email}
              onChangeText={e => setEmail(e)}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              style={styles.input}
              placeholderTextColor="#EEE"
              underlineColorAndroid="transparent"
              onChangeText={e => setPassword(e)}
            />


            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <TouchableOpacity onPress={() => Auth.signIn(email, password)}>
                <View
                  style={{
                    width: '100%',
                    height: 50,

                    backgroundColor: '#33E6F6',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginTop: '90%',
                    margin: 10,
                  }}>
                  <Text style={styles.font}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <View style={{alignSelf: 'center'}}>
                  <Text style={styles.TextButton}>
                    Have not an account? SignUp
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => navigation.navigate('ForgetPassword')}>
                <View style={{alignSelf: 'center'}}>
                  <Text style={styles.TextButton1}>Forget Password</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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

  TextButton: {color: '#FFF', fontWeight: 'bold', fontSize: 16},
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  TextButton1: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginTop: 10,
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
    borderRadius: 9,
    borderColor: '#EEE',
    // backgroundColor: 'white',
    marginBottom: 30,
    marginTop: 30,
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
    borderRadius: 9,

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
