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
import Icon from 'react-native-vector-icons/Ionicons';

export default function Competition(props) {
  return (
    <View>
      <View
        style={{
          width: '100%',
          marginHorizontal: 1,
          //   height: 200,
          backgroundColor: 'rgba(	30, 113, 237, 0.1)',
          borderRadius: 14,
          borderWidth: 1.5,
          borderColor: '#999',
          marginVertical: 10,
          padding: 15,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#EEE', fontSize: 25, fontWeight: '700'}}>
           {props.name}
          </Text>
          <View
            style={{
              backgroundColor: '#d00000',
              height: 20,
              borderRadius: 7,
              width: 45,
            }}>
            <Text
              style={{
                color: '#222',
                fontSize: 17,
                fontWeight: '700',
                alignSelf: 'center',
              }}>
              Offer
            </Text>
          </View>
        </View>
        <Text style={{color: '#EEE', fontSize: 15, fontWeight: '100'}}>
          Competition vsvsfvf
        </Text>
        <Text style={{color: '#EEE', fontSize: 15, fontWeight: '100'}}>
          Competition sdvsbsfbsfb
        </Text>
        <Text
          style={{
            color: '#EEE',
            fontSize: 16,
            fontWeight: '600',
            marginTop: 15,
          }}>
          Prize:$ 10K
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text
              style={{
                color: '#EEE',
                fontSize: 18,
                fontWeight: '400',
                marginTop: 20,
              }}>
              05m:09s to end
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <View>
                <Icon name="share-social-outline" size={35} color="#eee" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.buttonText}>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: '900',
                  }}>
                  Register Now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
