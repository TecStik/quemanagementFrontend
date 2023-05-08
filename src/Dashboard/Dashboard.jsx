import React, { useState } from "react";
import {
    StyleSheet, Text, View, Image, TextInput, Button, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../Header/Header";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Dashboard() {
    return (

        <>

            <LinearGradient
                colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >

                <Header ScreenName="Dashboard"/>
                <ScrollView>
                    <View style={{ marginTop: windowHeight / 5 }}>

                        <View style={styles.container}>
                            <View>
                                <Text style={{ fontSize: 25, color: "black" }}>Ufone</Text>
                                <Text style={{ fontSize: 25, color: "black" }}>10:00am <Text style={{ fontSize: 15 }}>Expected</Text></Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>04</Text>
                                    <Text style={{ fontSize: 15, color: "black", marginTop: 15, width: windowWidth }}>Ticket No</Text>
                                </View>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>05</Text>
                                    <Text style={{ fontSize: 15, color: "black", marginTop: 15, width: windowWidth }}>Current No</Text>
                                </View>
                            </View>
                        </View>
                         <View style={styles.container}>
                            <View>
                                <Text style={{ fontSize: 25, color: "black" }}>Zong</Text>
                                <Text style={{ fontSize: 25, color: "black" }}>10:00am <Text style={{ fontSize: 15 }}>Expected</Text></Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>04</Text>
                                    <Text style={{ fontSize: 15, color: "black", marginTop: 15, width: windowWidth }}>Ticket No</Text>
                                </View>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>05</Text>
                                    <Text style={{ fontSize: 15, color: "black", marginTop: 15, width: windowWidth }}>Current No</Text>
                                </View>
                            </View>
                        </View>
                         <View style={styles.container}>
                            <View>
                                <Text style={{ fontSize: 25, color: "black" }}>Clinic</Text>
                                <Text style={{ fontSize: 25, color: "black" }}>10:00am <Text style={{ fontSize: 15 }}>Expected</Text></Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>04</Text>
                                    <Text style={{ fontSize: 15, color: "black", marginTop: 15, width: windowWidth }}>Ticket No</Text>
                                </View>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>05</Text>
                                    <Text style={{ fontSize: 15, color: "black", marginTop: 15, width: windowWidth }}>Current No</Text>
                                </View>
                            </View>
                        </View>
                         <View style={styles.container}>
                            <View>
                                <Text style={{ fontSize: 25, color: "black" }}>Saloon</Text>
                                <Text style={{ fontSize: 25, color: "black" }}>10:00am <Text style={{ fontSize: 15 }}>Expected</Text></Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>04</Text>
                                    <Text style={{ fontSize: 15, color: "black", marginTop: 15, width: windowWidth }}>Ticket No</Text>
                                </View>
                                <View style={styles.numberBox}>
                                    <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>05</Text>
                                    <Text style={{ fontSize: 15, color: "black", marginTop: 15, width: windowWidth }}>Current No</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.container}></View>
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
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight / 7,
        borderRadius: 30,
        marginTop: "4%",
        borderColor: "#1D7874",
        borderWidth: 5,
        // width: windowWidth - 6,
        margin: 10,
        padding: 10
    },
    numberBox: {
        width: 63,
        height: 56,
        elevation: 2,
        borderRadius: 28,
        marginBottom: 30,
        backgroundColor: 'whitesmoke',
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

