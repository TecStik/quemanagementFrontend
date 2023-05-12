import React, { useState } from "react";
import {
    StyleSheet, Text, View, Image, TextInput, Button, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../Header/Header";
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function List() {

    const navigation = useNavigation();

    return (

        <>

            <LinearGradient
                colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >

                <Header ScreenName="List" />
                <ScrollView>
                    <View style={{ marginTop: windowHeight / 7 }}>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                            <View style={styles.twoNumberBox}>
                                <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>04</Text>
                            </View>
                            <View style={styles.twoNumberBox}>
                                <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>05</Text>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                            <View style={styles.container}>
                                <Text style={{ fontSize: 25, color: "white" }}>Ahmed Raza</Text>
                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>04</Text>
                                    </View>
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>05</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                            <View style={styles.container}>
                                <Text style={{ fontSize: 25, color: "white" }}>Ahmed Raza</Text>
                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>04</Text>
                                    </View>
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>05</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                            <View style={styles.container}>
                                <Text style={{ fontSize: 25, color: "white" }}>Ahmed Raza</Text>
                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>04</Text>
                                    </View>
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>05</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                            <View style={styles.container}>
                                <Text style={{ fontSize: 25, color: "white" }}>Ahmed Raza</Text>
                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>04</Text>
                                    </View>
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>05</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                            <View style={styles.container}>
                                <Text style={{ fontSize: 25, color: "white" }}>Ahmed Raza</Text>
                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>04</Text>
                                    </View>
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>05</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.container}></View>
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
        backgroundColor: "#679289",
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight / 7,
        borderRadius: 30,
        marginTop: "4%",
        borderColor: "yellow",
        borderWidth: 5,
        // width: windowWidth - 6,
        margin: 10,
        padding: 10
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

