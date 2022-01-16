import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.inputContainer}
      value={value}
      onChangeText={onChangeText}
      underlineColorAndroid="transparent"
      secureTextEntry={secureTextEntry}
      placeholderTextColor="#EEE"
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    height: 45,
    borderWidth: 1.5,
    marginVertical: 20,
    fontSize: 14,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    marginTop: 10,
  },
});
