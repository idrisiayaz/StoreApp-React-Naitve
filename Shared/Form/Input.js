import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default function Input(props) {
    return (
        <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        value={props.value}
        autoCorrect={props.autoCorrect}
        onChangeText={props.onChangeText}
        onFocus={props.onFocus}
        sucureTextEntry={props.sucureTextEntry}
        keyboardType={props.keyboardType}
        >

        </TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 60,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        padding: 20,
    }
})