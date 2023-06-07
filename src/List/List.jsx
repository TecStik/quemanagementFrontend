import React, { useEffect, useState, useContext } from "react";
import {
    StyleSheet, Text, View, SafeAreaView, FlatList, Button, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import axios from "axios";
import { Url } from "../../Core";
import ListModal from "./ListModal";
import Header from "../Header/Header";
import LinearGradient from 'react-native-linear-gradient'
import StoreContext from "../../GlobalState/GlobalState";
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function List() {

    const navigation = useNavigation();

    let franchiseData = useContext(StoreContext).SelectedFranchies
    let [TokenData, setTokenData] = useState('');
    let [showPopup, setShowPopup] = useState(false);
    let [Data, setData] = useState('');

    console.log(franchiseData, "franchiseData");

    const handleClick = () => { setShowPopup(true) };
    const handleClose = () => { setShowPopup(false) };

    useEffect(() => {
        axios({
            method: "post",
            url: Url + "/api/token/get",
            data: {
                filter: {
                }
            }
        }).then((res) => {
            // console.log(res.data, "Response Token Data");
            setTokenData(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const ActiveModale = async (item) => {
        setData(item)
        setShowPopup(true)
    }

    return (

        <>

            <LinearGradient
                colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >

                <Header ScreenName="List" FNSHeader="Current Token" SNSHeader="Total Token" />
                <ScrollView>
                    <View style={{ marginTop: windowHeight / 5.5 }}>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                            <View style={styles.twoNumberBox}>
                                <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>{franchiseData.CurrentToken}</Text>
                            </View>
                            <View style={styles.twoNumberBox}>
                                <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>{franchiseData.TokenNumber}</Text>
                            </View>
                        </View>
                        <ListModal visible={showPopup} onClose={handleClose} data={Data} />
                        <SafeAreaView>
                            <FlatList
                                data={TokenData}
                                renderItem={({ item }) =>
                                    <TouchableOpacity onPress={() => ActiveModale(item)}>
                                        <View style={styles.container}>
                                            <Text style={{ fontSize: 25, color: "white" }}>{item.Name}</Text>
                                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                                                <View style={styles.numberBox}>
                                                    <Text style={{ fontSize: 25, color: "red", textAlign: "center", marginTop: 10 }}>04</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                }
                                keyExtractor={item => item._id}
                            />
                        </SafeAreaView>


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
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
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
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
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
                        <View style={styles.container}></View>
                        <View style={styles.container}></View>
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
        backgroundColor: "#679289",
        borderColor: "yellow",
        alignItems: "center",
        flexDirection: "row",
        height: windowHeight / 7,
        borderRadius: 30,
        borderWidth: 5,
        marginTop: "4%",
        margin: 10,
        padding: 10
        // justifyContent: "space-around",
        // width: windowWidth - 6,
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

