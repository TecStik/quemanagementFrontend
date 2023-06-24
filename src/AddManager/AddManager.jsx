import React, { useState } from "react";
import {
    StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../Header/Header";
import DropDownPicker from 'react-native-dropdown-picker'
import axios from "axios";
import { Url } from "../../Core";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AddManager() {
    const [Name, setManName] = useState("");
    const [Email, setEmail] = useState("");
    const [ContactNum, setContactNum] = useState("");
    const [LoginId, setLoginId] = useState("");
    const [Password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Assistant ', value: 'Assistant ' },
        { label: 'Manager', value: 'Manager' },
    ]);

    // CraeteUser
    // let body = {
    //     Name: Name,
    //     Email: Email,
    //     ContactNum: ContactNum,
    //     LoginId: LoginId,
    //     Password: Password,
    //     Role: value,
    // }
    function handler() {
        axios({
            method: "post",
            url: Url + "/api/CraeteUser",
            data: {
                Name: Name,
                Email: Email,
                ContactNum: ContactNum,
                LoginId: LoginId,
                Password: Password,
                Role: value,
            }
        }).then((res) => {
            console.log(res.data, "Add Manager Response")
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

                <Header ScreenName="Add Member" />
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
                                    onChangeText={(Name) => setManName(Name)}
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
                                    onChangeText={(ContactNum) => setContactNum(ContactNum)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Login Id"
                                    placeholderTextColor="#003f5c"
                                    // secureTextEntry={true}
                                    onChangeText={(LoginId) => setLoginId(LoginId)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Password"
                                    placeholderTextColor="#003f5c"
                                    secureTextEntry={true}
                                    onChangeText={(Password) => setPassword(Password)}
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
                                    listMode="SCROLLVIEW"
                                />
                            </View>

                            <TouchableOpacity style={styles.loginBtn}>
                                <Text style={{ fontSize: 30, color: "white" }} onPress={handler}>Next</Text>
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
        // marginTop: "-0%",
        // margin: 10,
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