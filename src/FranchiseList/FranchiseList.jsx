import React, { useState } from "react";
import {
    StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../Header/Header";
import { useNavigation } from '@react-navigation/native';
import { Button, Box } from "native-base";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FranchiseList() {

    const navigation = useNavigation();

    return (

        <>

            <LinearGradient
                colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >

                <Header />
                <ScrollView>
                    <View style={{ marginTop: windowHeight / 4.6 }}>


                        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                            <View style={styles.container}>
                                <Text style={{ fontSize: 20, color: "white" }}>Zong</Text>
                                <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Nursery</Text>
                                <Text style={{ fontSize: 23, color: "white" }}>Status: {" "}
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 15, color: "white", textAlign: "center", margin: 1 }}>Open</Text>
                                    </View>
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.container}>
                                <Text style={{ fontSize: 20, color: "white" }}>Zong</Text>
                                <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Nursery</Text>
                                <Text style={{ fontSize: 23, color: "white" }}>Status: {" "}
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 15, color: "red", textAlign: "center", margin: 1 }}>Close</Text>
                                    </View>
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.container}>
                                <Text style={{ fontSize: 20, color: "white" }}>Jazz</Text>
                                <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Nursery</Text>
                                <Text style={{ fontSize: 23, color: "white" }}>Status: {" "}
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 15, color: "white", textAlign: "center", margin: 1 }}>Open</Text>
                                    </View>
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.container}>
                                <Text style={{ fontSize: 20, color: "white" }}>telenor</Text>
                                <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Nursery</Text>
                                <Text style={{ fontSize: 23, color: "white" }}>Status: {" "}
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 15, color: "red", textAlign: "center", margin: 1 }}>Close</Text>
                                    </View>
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.container}>
                                <Text style={{ fontSize: 20, color: "white" }}>Zong</Text>
                                <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Nursery</Text>
                                <Text style={{ fontSize: 23, color: "white" }}>Status: {" "}
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 15, color: "white", textAlign: "center", margin: 1 }}>Open</Text>
                                    </View>
                                </Text>
                            </View>
                        </TouchableOpacity>


                        <View style={styles.container}></View>
                        {/* <View style={styles.container}></View>
                        <View style={styles.container}></View> */}
                    </View>
                </ScrollView>
            </LinearGradient>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#679289",
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight / 6,
        borderRadius: 30,
        marginTop: "4%",
        borderColor: "#1D7874",
        borderWidth: 5,
        // width: windowWidth - 6,
        margin: 10,
        padding: 10
    },

    numberBox: {
        width: 80,
        // height: 36,
        elevation: 2,
        borderRadius: 28,
        // marginBottom: 3,
        backgroundColor: 'black',
        // margin: 10,
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

