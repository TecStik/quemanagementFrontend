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
                <Header ScreenName="Admin Home" FNSHeader="Welcom Faiz e Raza" />
                <ScrollView>
                    <View style={{ marginTop: windowHeight / 5 }}>

                        <View style={styles.container}>
                            <Image source={franchise} style={{ width: "25%", height: windowHeight / 8.5 }} />
                            <TouchableOpacity onPress={() => navigation.navigate('Franchise')}>

                                {/* <LinearGradient
                                    colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
                                    style={styles.numberBox}
                                    start={{ x: 0, y: 0.5 }}
                                    end={{ x: 1, y: 0.5 }}
                                > */}
                                   <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 22, color: "#00CBA0", textAlign: "center", }}>Create Franchise</Text>
                                   </View>
                                {/* </LinearGradient> */}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <Image source={addUser} style={{ width: "25%", height: windowHeight / 8.5 }} />
                            <TouchableOpacity onPress={() => navigation.navigate('AddManager')}>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 22, color: "#00CBA0", textAlign: "center", }}>Add Manager</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <Image source={manager2} style={{ width: "25%", height: windowHeight / 8.5 }} />
                            <TouchableOpacity onPress={() => navigation.navigate('ManagerAssign')}>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 22, color: "#00CBA0", textAlign: "center", }}>Assign Manager</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <Image source={appointment} style={{ width: "25%", height: windowHeight / 8.5 }} />
                            <TouchableOpacity onPress={() => navigation.navigate('FranchiseList')}>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 22, color: "#00CBA0", textAlign: "center", }}>List Of Franchies</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* <View stylFe={styles.container}></View> */}
                    </View>
                </ScrollView>
            </LinearGradient >
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
        // marginBottom: 3,
        // margin: 10,
        marginTop: windowHeight / 30,
        // backgroundColor: 'white',
        borderRadius: 28,
        borderWidth: 4,
        borderColor: "#1D7874",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
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

