import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {TextInput} from 'react-native-paper';
import DatePicker from 'react-native-neat-date-picker';
import {LogBox} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Competition from './Competition';

export default function Live() {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#111', '#1E71ED']}
        style={styles.linearGradient}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Competition name="Competition 1" />
          <Competition name="Competition 2" />
          <Competition name="Competition 3" />
          <Competition name="Competition 4" />
          <Competition name="Competition 5" />
          <Competition name="Competition 6" />
          <Competition name="Competition 7" />
          <Competition name="Competition 8" />
          <Competition name="Competition 9" />
          <Competition name="Competition 10" />
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
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 13,
    color: 'white',
    borderColor: '#777',
    backgroundColor: '#33E6F6',
    marginTop: -1,
    marginRight: -10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    zIndex: 10,
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
