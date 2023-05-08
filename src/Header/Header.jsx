import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

function Header({ ScreenName }) {
    return (
        // <View 
        // style={{display:"flex",flex:1}}
        // >

        // <LinearGradient
        //     colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
        //     // style={{ flex: 1 }}
        //     start={{ x: 0, y: 0.5 }}
        //     end={{ x: 1, y: 0.5 }}
        // >
        <View style={{ position: 'absolute', left: 0, right: 0, zIndex: 1 }}>
            <View style={{ backgroundColor: "#1D7874", width: "100%", height: "100%", zIndex: 1 }}>
                <Text style={{ color: "white", fontSize: 25, marginLeft: "4%", marginTop: "2%" }}>{ScreenName}</Text>
            </View>
            <View style={{
                backgroundColor: "#1D7874", opacity: 0.5, borderBottomEndRadius: 20, borderBottomStartRadius: 20, height: "120%", borderColor: "yellow",
                borderBottomWidth: 5,
            }}>
                <Text>Second Header</Text>
            </View>
        </View>
        // </LinearGradient>
        // </View>
    )
}

const styles = StyleSheet.create({
    linearGradient: {

    },
})
export default Header