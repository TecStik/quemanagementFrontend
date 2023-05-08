import React, { useState } from "react";
import {
    StyleSheet, Text, View, Image, TextInput, Button, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../Header/Header";
import appointment from '../../assets/MangerHome/appointment.png';
import franchise from '../../assets/MangerHome/franchise.png';
import ticke from '../../assets/MangerHome/ticke.png';
import summary from '../../assets/MangerHome/summary.png';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ManagerHome() {

    const navigation = useNavigation();


    return (

        <>
            <LinearGradient
                colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >

                <Header ScreenName="Manager Home" />


                <ScrollView>
                    <View style={{ marginTop: windowHeight / 5 }}>
                        <View style={styles.container}>

                            <View>
                                <Text style={{ fontSize: 25, color: "black" }}>Current Franchise</Text>
                                <Text style={{ fontSize: 25, color: "black", marginTop: 5 }}>Current Ticket</Text>
                            </View>
                            <View style={{}}>
                                <View style={styles.TwonumberBox}>
                                    <Text style={{ fontSize: 25, color: "red", textAlign: "center" }}>Zong <Text style={{ fontSize: 15 }}>Sader Branch</Text></Text>
                                </View>
                                <View style={styles.TwonumberBox}>
                                    <Text style={{ fontSize: 25, color: "red", textAlign: "center" }}>88</Text>
                                    {/* <Text style={{ fontSize: 15, color: "black", width: windowWidth }}>Current No</Text> */}
                                </View>
                            </View>
                        </View>

                        <View style={styles.container}>
                            <Image source={appointment} style={{ width: "28%", height: windowHeight / 8 }} />
                            <TouchableOpacity onPress={() => navigation.navigate('List')}>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 22, color: "red", textAlign: "center", }}>Appointment List</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <Image source={franchise} style={{ width: "28%", height: windowHeight / 8 }} />
                            <TouchableOpacity onPress={() => navigation.navigate('List')}>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 22, color: "red", textAlign: "center", }}>Select Franchise</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <Image source={ticke} style={{ width: "28%", height: windowHeight / 8 }} />
                            <TouchableOpacity onPress={() => navigation.navigate('List')}>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 22, color: "red", textAlign: "center", }}>Issue Ticket</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <Image source={summary} style={{ width: "28%", height: windowHeight / 8 }} />
                            <TouchableOpacity onPress={() => navigation.navigate('List')}>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 22, color: "red", textAlign: "center", }}>Summary</Text>
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
        backgroundColor: "#679289",
        // backgroundColor: "white",
        justifyContent: "space-around",
        // alignItems: "center",
        height: windowHeight / 5.5,
        borderRadius: 30,
        marginTop: "4%",
        borderColor: "#1D7874",
        borderWidth: 5,
        // width: windowWidth - 6,
        margin: 10,

        padding: 10,
        alignItems: "center"
    },
    numberBox: {
        height: 56,
        elevation: 2,
        borderWidth: 4,
        borderRadius: 28,
        marginBottom: 16,
        alignItems: "center",
        borderColor: "#1D7874",
        backgroundColor: 'white',
        justifyContent: "center",
        width: windowWidth / 2,
        marginTop: windowHeight / 28,
    },
    TwonumberBox: {
        width: windowWidth / 3.8,
        height: 60,
        elevation: 2,
        borderWidth: 4,
        marginBottom: 3,
        borderRadius: 20,
        backgroundColor: 'white',
        // margin: 10,
        // padding: 3,
        // marginTop: windowHeight / 24,
        alignItems: "center",
        borderColor: "#1D7874",
        justifyContent: "center",
    },
    // twoNumberBox: {
    //     width: 56,
    //     height: 56,
    //     elevation: 2,
    //     marginBottom: 3,
    //     backgroundColor: 'white',
    //     borderBottomEndRadius: 15,
    //     borderBottomStartRadius: 15,
    // }
});

