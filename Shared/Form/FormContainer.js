import React from 'react';
import {View, Text, ScrollView, Dimensions, StyleSheet} from 'react-native';

var {width} = Dimensions.get("window");

export default function FormContainer(props) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 400,
        width: width,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
    }
})