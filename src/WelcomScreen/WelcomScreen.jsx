import React, { useState } from "react";
import {
    StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../Header/Header";
import { useNavigation } from '@react-navigation/native';
import { VStack, Stack, Box, Input, Center, Button } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


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

                <Header ScreenName="Welcome" />

                <ScrollView>

                    <View style={{ marginTop: windowHeight / 3.6, alignContent: "center" }}>
                        <Stack space={4} w="75%" maxW="300px" mx="auto">

                            <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                                <Box width="100%" bg="#FFFFFF" p="4" shadow={2} _text={{
                                    fontSize: "2xl",
                                    color: "#679289"
                                }} style={styles.BoxOutline}>
                                    <FontAwesome5 name="user-check" size={35} color="#679289" style={{ marginRight: "5%" }} />
                                    Rigester
                                </Box>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                                <Box width="100%" bg="#FFFFFF" p="4" shadow={2} _text={{
                                    fontSize: "2xl",
                                    color: "#679289"
                                }} style={styles.BoxOutline}>
                                    <Fontisto name="locked" size={35} color="#679289" style={{ marginRight: "5%" }} />
                                    Login
                                </Box>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Visitor')}>
                                <Box width="100%" bg="#FFFFFF" p="4" shadow={2} _text={{
                                    fontSize: "2xl",
                                    color: "#679289"
                                }} style={styles.BoxOutline}>
                                    <FontAwesome5 name="users" size={35} color="#679289" style={{ marginRight: "5%" }} />
                                    Visitor
                                </Box>
                            </TouchableOpacity>
                        </Stack>

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
    },
    BoxOutline: {
        borderWidth: 6,
        borderRadius: 15,
        borderColor: "#679289",
        marginTop: windowHeight / 21,
        display: "flex",
        flexDirection: "row",

    }
});

