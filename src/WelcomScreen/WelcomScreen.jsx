import React, { useState } from "react";
import {
    StyleSheet, Text, View, Image, TextInput, Button, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../Header/Header";
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { VStack, Center } from 'native-base';

export default function WelcomScreen() {

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
                    <View
                        style={{ marginTop: windowHeight / 5.6, alignContent: "center" }}
                    >
                            <VStack space={3} justifyContent="center" alignItems="center">
                                <Center h="20" w="60" bg="primary.300" rounded="md" shadow={3} />
                                <Center h="20" w="60" bg="primary.500" rounded="md" shadow={3} />
                                <Center h="20" w="40" bg="primary.700" rounded="md" shadow={3} />
                            </VStack>
                        {/* <View >

                        </View> */}

                        {/* <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                        </TouchableOpacity> */}

                        {/* <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
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
                        </TouchableOpacity> */}

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

