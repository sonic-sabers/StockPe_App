import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {TextInput} from 'react-native-paper';
import DatePicker from 'react-native-neat-date-picker';
import {LogBox} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';

LogBox.ignoreLogs(['EventEmitter.removeListener']);

export default function Accountscreen({navigation}) {
  const [text, setText] = React.useState('');
  const [newdate, setnewdate] = React.useState('2422/09/1995');

  const [showDatePicker, setShowDatePicker] = useState(false);

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false);
  };

  const onConfirm = date => {
    // You should close the modal in here
    setShowDatePicker(false);
    var newdate = date.getDate();

    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    //   onPress={() => navigation.navigate('Otpscreen')}
    //
    console.log(date.getDate());
  };
  return (
    <View style={{width: '100%', height: '100%'}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#111', '#1E71ED']}
        style={styles.linearGradient}>
        {/* <Login screenName="Otpscreen" /> */}
        <ScrollView showsVerticalScrollIndicator={false}> 
          <KeyboardAvoidingView behavior="padding">
            <View style={{margin: 20}}>
              {/* <Text>HI fndn Lorem ipsum dolor sit amet, consectetur adip</Text> */}
              <Text
                style={{
                  color: '#eee',
                  //   alignSelf: 'center',
                  fontSize: 30,
                  fontWeight: '700',
                  marginTop: 20,
                  //   textAlign: 'center',
                }}>
                Account info
              </Text>
              <TouchableOpacity style={{marginBottom: 30}}>
                {/* <View style={{flexDirection: 'row',justifyContent:'space-between'}}> */}
                <Image
                  source={require('../assets/Ashish.jpeg')}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 20,
                    alignSelf: 'center',
                    marginTop: 40,
                    marginBottom: 20,
                  }}
                />
                <View
                  style={{
                    backgroundColor: '#33E6F6',
                    width: 45,
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                    marginTop: -60,
                    alignSelf: 'center',
                    marginRight: -70,
                  }}>
                  <Icon name="camera" size={30} color="#fff" />
                </View>
                {/* </View> */}
              </TouchableOpacity>
              <View style={{}}>
                <TextInput
                  style={styles.inputs}
                  onChangeText={text => setText(text)}
                  value={text}
                  placeholder="First name"
                  placeholderTextColor="#33E6F6"
                />
                <TextInput
                  style={styles.inputs}
                  onChangeText={text => setText(text)}
                  value={text}
                  placeholder="Last name"
                  placeholderTextColor="#33E6F6"
                  placeholderFontWeight="Bold"
                />
                <TextInput
                  style={styles.inputs}
                  onChangeText={text => setText(text)}
                  value={text}
                  placeholder="Email ID"
                  placeholderTextColor="#33E6F6"
                  placeholderFontWeight="700"
                  placeholderFontSize="40"
                  selectionColor="#eee"
                />
              </View>

              <View style={styles.inputs}>
                <TouchableOpacity onPress={openDatePicker}>
                  <Icon name="calendar-outline" size={30} color="#33E6F6" />
                  <DatePicker
                    isVisible={showDatePicker}
                    mode={'single'}
                    onCancel={onCancel}
                    onConfirm={onConfirm}
                  />
                  {/* <Text>{newdate}</Text> */}
                </TouchableOpacity>
              </View>
              {/* <Button title={'open'} onPress={openDatePicker} /> */}
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  flex: 1,
                }}>
                <View />
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}>
                    <View
                      style={{
                        width: '100%',
                        height: 50,

                        backgroundColor: '#33E6F6',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        margin: 10,
                        marginBottom: 60
                        // alignSelf: 'flex-end'
                      }}>
                      <Text style={styles.font}>Confirm</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
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
  font: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#222',
  },
  input: {
    // height: 50,
    marginHorizontal: 12,
    // borderWidth: 0.4,
    // padding: 10,
    // width: '90%',
    fontSize: 20,
    marginTop: 20,
    // height: 35,
    // borderRadius:47,
    // borderBottomRadius:30,
    // overflow:"hidden",
    // borderColor: '#EEE',
    // backgroundColor: 'white',
    // marginBottom: 30,
    // backgroundColor: 'rgba(255,255, 255, 0)',
    opacity: 0.5,
  },
  inputs: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 13,
    color: 'white',
    borderColor: '#777',
  },
});
