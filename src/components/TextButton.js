import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default TextButton = ({text, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        color: "#FFF",
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 20
    }
})