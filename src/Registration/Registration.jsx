import React, { useState } from "react";
import {
    StyleSheet, Text, View, Image, TextInput, Center, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../Header/Header";
import axios from "axios";
import { Url } from "../../Core";

import logo from '../../assets/logo/logo1.png';
import back from '../../assets/header-icon/back.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Registration() {

    const [Name, setRigName] = useState("");
    const [Email, setEmail] = useState("");
    const [ContactNum, setContactNum] = useState("");
    const [LoginId, setLoginId] = useState("");
    const [Password, setPassword] = useState("");

    function RigesterHandler() {
        axios({
            method: "post",
            url: Url + "/api/rigester",
            data: {
                Name: Name,
                Email: Email,
                ContactNum: ContactNum,
                LoginId: LoginId,
                Password: Password
            }
        }).then((res) => {
            console.log(res.data, "Register Response")
        }).catch((err) => {
            console.log(err);
        })
    }

    return (

        <>

            <LinearGradient
                colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <Header ScreenName="Registration" />
                
                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: windowHeight / 6
                }}>
                    <Image style={{ alignItems: "center", justifyContent: "center" }} source={logo} />
                </View>

                <ScrollView >
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        // marginTop: windowHeight / 3.7
                    }}>
                        <View style={styles.container}>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Name."
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(Name) => setRigName(Name)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Email."
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(Email) => setEmail(Email)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Contact Number."
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(ContactNum) => setContactNum(ContactNum)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Login ID"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(LoginId) => setLoginId(LoginId)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Password."
                                    placeholderTextColor="#003f5c"
                                    secureTextEntry={true}
                                    onChangeText={(Password) => setPassword(Password)}
                                />
                            </View>
                            {/* <TouchableOpacity>
                                <Text style={styles.forgot_button}>Forgot Password?</Text>
                            </TouchableOpacity> */}

                            <TouchableOpacity style={styles.loginBtn} onPress={RigesterHandler}>
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
        width: windowWidth / 1.2,
        backgroundColor: "#679289",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "7%",
        borderRadius: 30,
        padding: 10,
        // height: windowHeight / 2,
        // marginTop: "-0%",
        // margin: 10,
    },
    image: {
        // marginTop:10,
        // marginBottom: 40,
    },
    inputView: {
        backgroundColor: "#FFFFFF",
        borderColor: "#1D7874",
        borderRadius: 30,
        borderWidth: 5,
        width: "85%",
        height: 50,
        height: 60,
        margin: "2%",
        // alignItems: "center",
        // marginBottom: 25,
    },
    TextInput: {
        flex: 1,
        height: 50,
        padding: 10,
        fontSize: 20,
        marginLeft: 10,
    },
    forgot_button: {
        height: 30,
        // marginBottom: 30,
    },
    loginBtn: {
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#00CBA0",
        marginBottom: 10
    },
});