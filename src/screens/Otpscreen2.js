import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, Text, View, Button} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import OtpInput from '../components/OtpInput';
import Icon from 'react-native-vector-icons/Ionicons';
import Auth from '../services/Auth';
import {useNavigation, NavigationContainer} from '@react-navigation/native';

export default function Otpscreen2(props) {
  // const {number, confirm} = props.route?.params;
  const navigation = useNavigation();
  const [codeArr, setCodeArr] = useState([]);
  // const [number, setNumber] = useState();
  const code = codeArr.join('');
  // const numberFromProps = props.route?.params.number;
  // const confirmFromProps = props.route?.params.confirm;
  handleCode = (e, index) => {
    const codeArray = [...code];
    codeArray[index] = e;
    setCodeArr(codeArray);
  };
  const _sendOtp = () => {
      Auth.sendOtp('+' + 91 + number).then(confirmation =>setConfirm(confirmation),
      );
      alert("OTP send to "+ "+91"+number);
  };


  async function confirmCode() {
    try {
      const code = otpArray.join('');
      const response = await confirm.confirm(code);
      if (response) {
        navigation.navigate('successScreen');
      }
    } catch (e) {
      alert(JSON.stringify(e));
    }
  }
  return (
    <View style={{width: '100%', height: '100%'}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        f
        colors={['#111', '#1E71ED']}
        style={styles.linearGradient}>
        <ScrollView >
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              borderRadius: 30,
              borderColor: '#eee',
              borderWidth: 1,
              height: 40,
              width: 40,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}>
            <Text
              style={{
                color: '#eee',
                fontSize: 30,
                fontWeight: '700',
                alignSelf: 'center',
                marginTop: -4,
              }}>
              <Icon name="chevron-back-outline" size={30} color="#33E6F6" />
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: '#eee',
              alignSelf: 'center',
              fontSize: 30,
              fontWeight: '700',
              marginTop: 50,
              textAlign: 'center',
            }}>
            00:30
          </Text>
        {/* </ScrollView> */}
        <View style={{alignContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: '#eee',
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: '700',
              marginTop: 10,
              textAlign: 'center',
            }}>
            Type the verification code {'\n'} that we have sent you
          </Text>
        </View>
        <OtpInput
          onChangeText={(e, index) => handleCode(e, index)}
          value={codeArr}
          noOfInput={6}
        />
        <Button
          title="Verify"
          onPress={() => Auth.confirmCode(confirm, code)}
        />
        {/* <ScrollView
          style={{
            justifyContent: 'space-between',
            flexDirection: 'column',
            flex: 1,
          }}> */}
          <TouchableOpacity onPress={() => _sendOtp(number)}>
            <Text
              style={{
                color: '#33E6F6',
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: '700',
                //   marginTop: 60,
                textAlign: 'center',
              }}>
              Send againdc
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Accountscreen')}>
            <View
              style={{
                width: '90%',
                height: 50,
                alignSelf: 'center',
                backgroundColor: '#33E6F6',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                margin: 10,
                marginBottom: 30,
              }}>
              <Text style={styles.font}>Login</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  font: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#222',
  },
});
