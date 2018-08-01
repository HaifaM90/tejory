import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'



const Input = ({ label,value,onChangeText,placeholder,secureTextEntry }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.label}>{label}</Text>
            <TextInput
                autoCurrect={false}
                onChangeText={onChangeText}
                // placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                style={styles.input}
                value={value}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        borderColor: '#ccc',
        borderBottomWidth: 1,
    },
    label: {
        paddingBottom: 0,
        color: '#fff',
        fontSize: 17,
        fontWeight: '700',
        width: '100%',
    },
    input: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 10,
        color: '#fff',
        fontSize: 18,
        width: '100%',
    }
})


export default Input
