import React, { useState, useContext } from "react";
import {
    StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import StoreContext from "../../GlobalState/GlobalState";
import Header from "../Header/Header";
import { Url } from "../../Core";
import axios from "axios";
import logo from '../../assets/logo/logo1.png';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Franchise() {

    const [Name, setFranName] = useState("");
    const [ContctNum, setContctNum] = useState("");
    const [ShortCode, setShortCode] = useState("");
    const [Address, setAddress] = useState("");
    const UserCredential = useContext(StoreContext);

    let BelongToCredential = UserCredential.LoginUser[0]
    // console.log(UserCredential.LoginUser[0]._id, "Context User Object Id");
    // let body = {
    //     Name: Name,
    //     Address: Address,
    //     ContactNum: ContctNum,
    //     ShortCode: ShortCode
    // }

    function Handler() {
        // console.log(BelongToCredential._id);

        // console.log(body);
        axios({
            method: "post",
            url: Url + "/api/franchise",
            data: {
                Name: Name,
                Status: "Close",
                Address: Address,
                ContactNum: ContctNum,
                ShortCode: ShortCode,
                BelongTo: BelongToCredential._id
            }
        }).then((res) => {
            console.log(res.data, "Franchise Response");
        }).catch(() => {
            console.log(error);
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

                <Header ScreenName="Create Franchise" />

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
                                    onChangeText={(Name) => setFranName(Name)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Contact"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(ContctNum) => setContctNum(ContctNum)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Short Code"
                                    placeholderTextColor="#003f5c"
                                    onChangeText={(ShortCode) => setShortCode(ShortCode)}
                                />
                            </View>
                            <View style={styles.inputView}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Address."
                                    placeholderTextColor="#003f5c"
                                    // secureTextEntry={true}
                                    onChangeText={(Address) => setAddress(Address)}
                                />
                            </View>
                            <TouchableOpacity style={styles.loginBtn}>
                                <Text style={{ fontSize: 30, color: "white" }} onPress={Handler}>Next</Text>
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
        fontSize: 22
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