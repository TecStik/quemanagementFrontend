import React, { useState } from "react";
import {
    StyleSheet, Text, View, Image, TextInput, Button, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../Header/Header";
import DropDownPicker from 'react-native-dropdown-picker'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AddManager() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Admin', value: 'Admin' },
        { label: 'User', value: 'User' },
    ]);

    return (

        <>

            <LinearGradient
                colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >

                <Header ScreenName="AddManager" />
                <ScrollView >
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: windowHeight / 4.5
                    }}>
                        <View style={styles.container}>
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
                                    placeholder="Email/ID"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(name) => setEmail(name)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Phone"
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
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Re-Type Password"
                                    placeholderTextColor="#003f5c"
                                    secureTextEntry={true}
                                    onChangeText={(password) => setPassword(password)}
                                />
                            </View>
                            <View >
                                <DropDownPicker
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    style={styles.inputView}

                                />
                            </View>
                            <TouchableOpacity>
                                {/* <Text style={styles.forgot_button}>Forgot Password?</Text> */}
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginBtn}>
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
        // height: windowHeight / 2,
        width: windowWidth / 1.2,
        borderRadius: 30,
        // marginTop: "20%",
        margin: 10,
        padding: 10
    },
    inputView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        width: windowWidth / 1.3,
        marginBottom: 17,
        alignItems: "center",
        height: 60,
        borderColor: "#1D7874",
        borderWidth: 5
    },
    TextInput: {
        height: 50,
        flex: 1,
        // padding: 10,
        fontSize: 22
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