import React, { useState, useContext } from "react";
import {
    StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Url } from "../../Core";
import LinearGradient from 'react-native-linear-gradient'
import StoreContext from "../../GlobalState/GlobalState";
import Header from "../Header/Header";
import axios from "axios";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignIn() {

    const navigation = useNavigation();
    const LoginUser = useContext(StoreContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function loginHandler() {

        // console.log(email, password);

        axios({
            method: "post",
            url: Url + "/auth/api/userLogin",
            data: {
                Email: "Raza@gmail.com",
                Password: "1234"
            }
        }).then((res) => {

            // console.log(res.data, "Login Response");
            navigation.navigate('AdminHome')
            LoginUser.setLoginUser(res.data)

        }).catch((err) => {
            console.log(err, "Error");
            // navigation.navigate('AdminHome')
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

                <Header ScreenName="Sign IN" />
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
                                    onChangeText={(name) => setEmail(name)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Email"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(email) => setEmail(email)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Password"
                                    placeholderTextColor="#003f5c"
                                    secureTextEntry={true}
                                    onChangeText={(password) => setPassword(password)}
                                />
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.forgot_button}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginBtn} onPress={loginHandler}>
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
    forgot_button: {
        height: 30,
        // marginBottom: 30,
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