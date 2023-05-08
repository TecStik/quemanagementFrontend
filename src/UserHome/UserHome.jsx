import React, { useState } from "react";
import {
    StyleSheet, Text, View, Image, TextInput, Button, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../Header/Header";
import appointment from '../../assets/appointment.png';
import appointmentCl from '../../assets/appointmentCl.png';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function UserHome() {


    return (

        <>
            <LinearGradient
                colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >

                <Header ScreenName="User Home"/>
                <ScrollView>
                    <View style={{ marginTop: windowHeight/5, justifyContent: "center", alignItems: "center" }}>

                        <View style={styles.container}>
                            <Image source={appointmentCl} style={{ width: windowWidth / 2, height: windowHeight / 4.5, }} />
                            <Text style={{ fontSize: 20, color: "white" }}>Take Appointment</Text>
                        </View>
                        <View style={styles.container}>
                            <Image source={appointment} style={{ width: windowWidth / 2, height: windowHeight / 4.5, }} />
                            <Text style={{ fontSize: 20, color: "white" }}>Appointment List</Text>

                        </View>


                        {/* <View style={styles.container}></View>
                        <View style={styles.container}></View>
                        <View style={styles.container}></View>
                        <View style={styles.container}></View>
                        <View style={styles.container}></View> */}
                    </View>
                </ScrollView>
            </LinearGradient>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: "row",
        backgroundColor: "#679289",
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight / 3.5,
        borderRadius: 20,
        marginTop: "8%",
        borderColor: "yellow",
        borderWidth: 5,
        width: windowWidth / 1.5,
        // opacity: 0.5,
        // margin: 10,
        // padding: 10
    },
    numberBox: {
        width: 56,
        height: 56,
        elevation: 2,
        borderRadius: 28,
        marginBottom: 3,
        backgroundColor: 'white',
        margin: 10,
    },
    twoNumberBox: {
        width: 56,
        height: 56,
        elevation: 2,
        marginBottom: 3,
        backgroundColor: 'white',
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
    }
});

