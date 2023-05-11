import React, { useState } from "react";
import {
    StyleSheet, Text, View, Image, TextInput, Button, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../Header/Header";
import franchise from '../../assets/AdminHome/franchise.png';
import addUser from '../../assets/AdminHome/addUser.png';
import appointment from '../../assets/AdminHome/appointment.png';
import manager2 from '../../assets/AdminHome/manager2.png';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AdminHome() {

    const navigation = useNavigation();

    return (

        <>
            <LinearGradient
                colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >

                <Header ScreenName="Admin Home" />
                <ScrollView>
                    <View style={{ marginTop: windowHeight / 5 }}>

                        <View style={styles.container}>
                            <Image source={franchise} style={{ width: "28%", height: windowHeight / 8 }} />
                            <TouchableOpacity onPress={() => navigation.navigate('ManagerHome')}>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 22, color: "red", textAlign: "center", }}>Create franchies</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <Image source={addUser} style={{ width: "28%", height: windowHeight / 8 }} />
                            <TouchableOpacity onPress={() => navigation.navigate('ManagerHome')}>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 22, color: "red", textAlign: "center", }}>Add Manager</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <Image source={manager2} style={{ width: "28%", height: windowHeight / 8 }} />
                            <TouchableOpacity onPress={() => navigation.navigate('ManagerHome')}>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 22, color: "red", textAlign: "center", }}>Assign Manager</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <Image source={appointment} style={{ width: "28%", height: windowHeight / 8 }} />
                            <TouchableOpacity onPress={() => navigation.navigate('FranchiseList')}>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 22, color: "red", textAlign: "center", }}>List Of Franchies</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}></View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        // backgroundColor: "#679289",
        backgroundColor: "white",
        justifyContent: "space-around",
        // alignItems: "center",
        height: windowHeight / 6,
        borderRadius: 30,
        marginTop: "4%",
        borderColor: "#1D7874",
        borderWidth: 5,
        // width: windowWidth - 6,
        margin: 10,

        padding: 10,

    },
    numberBox: {
        width: windowWidth / 2,
        height: 56,
        elevation: 2,
        borderRadius: 28,
        // marginBottom: 3,
        backgroundColor: 'white',
        // margin: 10,
        marginTop: windowHeight / 24,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#1D7874",
        borderWidth: 4,
        // alignItems:"flex-end"
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

