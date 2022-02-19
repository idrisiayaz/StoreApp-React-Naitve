import React from "react";
import { StyleSheet,View,Image,SafeAreaView } from "react-native";

export default function Header() {
    return (
        <SafeAreaView style={styles.header}>
            <Image 
                source={require("../assets/Cf.png")}
                resizeMode="contain"
                style={{height: 50}}
            />
        </SafeAreaView>
    )

    
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        padding: 10,
        paddingTop: 15
    }
})