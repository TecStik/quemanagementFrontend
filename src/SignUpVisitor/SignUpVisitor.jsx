import React, { useState } from "react";
import {
    StyleSheet, Text, View, Image, TextInput, Button, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../Header/Header";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { Url } from "../../Core";
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignUpVisitor() {
    const [Name, setVistName] = useState("");
    const [Email, setEmail] = useState("");
    const [ContactNum, setContactNum] = useState("");
    const navigation = useNavigation();


    const loginHandler = () => {

        axios({
            method: "post",
            url: Url + "/api/visitor",
            data: {
                Name: Name,
                Email: Email,
                ContactNum: ContactNum
            }
        }).then((res) => {

            AsyncStorage.setItem(
                'Visitor',
                JSON.stringify(res.data),
                navigation.navigate('AdminHome')
            );
            _retrieveData()

            // console.log(res.data, "====>Response");
        }).catch((err) => {
            console.log(err, "====>Error");
        })
        // navigation.navigate('AdminHome')
    }


    const _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('Visitor');
            if (value !== null) {
                // We have data!!
                console.log(value,"get AsyncStorage Data");
            }
        } catch (error) {
            // Error retrieving data
        }
    };


    return (

        <>

            <LinearGradient
                colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >

                <Header ScreenName="Visitor SignUp" />
                <ScrollView >
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: windowHeight / 3.7
                    }}>
                        <View style={styles.container}>
                            {/* <Image style={styles.image} source={require("./assets/log2.png")} />  */}
                            {/* <StatusBar style="auto" /> */}
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Name"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(Name) => setVistName(Name)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Email"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(Email) => setEmail(Email)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Contact Number"
                                    placeholderTextColor="#003f5c"
                                    // secureTextEntry={true}
                                    onChangeText={(ContactNum) => setContactNum(ContactNum)}
                                />
                            </View>

                            <TouchableOpacity style={styles.loginBtn} onPress={_retrieveData}>
                                <Text style={{ fontSize: 30, color: "white" }}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "#679289",
        justifyContent: "center",
        alignItems: "center",
        height: windowHeight / 2,
        width: windowWidth / 1.2,
        borderRadius: 30,
        // marginTop: "2%",
        margin: 10,
        padding: 10
    },
    image: {
        // marginTop:10,
        // marginBottom: 40,
    },
    inputView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        width: "85%",
        height: 50,
        marginBottom: 25,
        alignItems: "center",
        borderColor: "#1D7874",
        borderWidth: 5,
        height: 60,
        // marginTop: "2%",
    },
    TextInput: {
        flex: 1,
        height: 50,
        fontSize: 22,
        padding: 10,
        // marginLeft: 20,
    },
    loginBtn: {
        width: "40%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        // marginTop: 40,
        backgroundColor: "#00CBA0",
    },
});