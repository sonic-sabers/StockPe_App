import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CallingCodePicker} from 'rn-country-code-picker';
import OtpInput from '../components/OtpInput';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import Auth from '../services/Auth';

export default function Otpscreen({screenName}) {
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

  return (
    <View style={{width: '100%', height: '100%'}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#111', '#1E71ED']}
        style={styles.linearGradient}>
        <KeyboardAvoidingView behavior="padding">
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
            {/* <TextInput
            placeholder="Enter Number"
            value={number}
            onChangeText={e => setNumber(e)}
          /> */}

            <TextInput
              style={styles.inputCountry}
              onChangeText={setCode}
              value={Code}
              placeholder="Country Code"
              keyboardType="numeric"
              placeholderTextColor="#EEE"
              underlineColorAndroid="transparent"
              editable={false}
              selectTextOnFocus={false}
            />
            <TextInput
              style={styles.input}
              onChangeText={setNumber}
              value={number}
              placeholder="Phone Number (Ex=123456789)"
              keyboardType="numeric"
              placeholderTextColor="#EEE"
              underlineColorAndroid="transparent"
            />
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'column',
                flex: 1,
              }}>
              <View />
              <View>
                <TouchableOpacity onPress={() => _sendOtp(number)}>
                  <View
                    style={{
                      width: '100%',
                      height: 50,

                      backgroundColor: '#33E6F6',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      margin: 10,
                    }}>
                    <Text style={styles.font}>Login</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
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
