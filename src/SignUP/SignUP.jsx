import React, { useState } from "react";
import {
    StyleSheet, Text, View, Image, TextInput, Button, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../Header/Header";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { useNavigation } from '@react-navigation/native';


export default function SignUP() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    return (

        <>

            <LinearGradient
                colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >

                <Header ScreenName="Sign Up"/>
                <ScrollView >
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop:windowHeight/4
                    }}>
                        <View style={styles.container}>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="First Name"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(name) => setEmail(name)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Last Name"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(name) => setEmail(name)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Cell No"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(email) => setEmail(email)}
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
                                    placeholder="Password."
                                    placeholderTextColor="#003f5c"
                                    secureTextEntry={true}
                                    onChangeText={(password) => setPassword(password)}
                                />
                            </View>
                            <TouchableOpacity>
                                {/* <Text style={styles.forgot_button}>Forgot Password?</Text> */}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('SignIn')}>
                            <Text style={{ fontSize: 30,color:"white" }}>Next</Text>
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
        height: windowHeight / 1.5,
        width: windowWidth / 1.2,
        borderRadius: 30,
        // marginTop: "20%",
        // margin:10,
        // padding:10
    },
    image: {
        // marginTop:10,
        // marginBottom: 40,
    },
    inputView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        width: "85%",
        marginBottom: 17,
        alignItems: "center",
        borderColor:"#1D7874",
        height: 60,
        borderWidth:5
    },
    TextInput: {
        flex: 1,
        height: 50,
        fontSize:22,
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