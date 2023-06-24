import React, { useContext, useEffect, useState } from "react";
import {
    StyleSheet, Text, View, Dimensions, TouchableOpacity,
} from "react-native";
import axios from "axios";
import { Url } from "../../Core";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AppointmentListView({ item }) {

    let [FranchiseData, setFranchiseData] = useState(null)



    useEffect(() => {
        axios({
            method: "post",
            url: Url + "/api/franchise/get",
            data: {
                filter: {
                    "_id": item.FranchiseId
                }
            }
        }).then((res) => {
            setFranchiseData(res.data)
            console.log(res.data, "Response Of====FranchiseData");
        }).catch((err) => {
            console.log(err, "Error Of Franchise Data");
        })
    }, [])

    // console.log(FranchiseData);
    return (
        <>{FranchiseData !== null ?
            <>
                <TouchableOpacity>
                    <View style={styles.container}>
                        <View>
                            <Text style={{ fontSize: 25, color: "black" }}>{FranchiseData[0].Name}</Text>
                            {/* <Text style={{ fontSize: 20, color: "black" }}>10:00am <Text style={{ fontSize: 15 }}>Expected</Text></Text> */}
                        </View>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                            <View style={styles.numberBox}>
                                <Text style={{ fontSize: 25, color: "black", textAlign: "center", marginTop: 10 }}>{item.TokenNumber}</Text>
                                <Text style={{ fontSize: 15, color: "black", marginTop: 13, width: windowWidth, margin: -7, padding: -5 }}>Ticket No</Text>
                            </View>
                            <View style={styles.numberBox}>
                                <Text style={{ fontSize: 25, color: "black", textAlign: "center", marginTop: 10 }}>{FranchiseData[0].TokenNumber}</Text>
                                <Text style={{ fontSize: 15, color: "black", marginTop: 13, width: windowWidth, margin: -7, padding: -5 }}>Current No</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </> : <></>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-around",
        alignItems: "center",
        height: windowHeight / 7,
        borderRadius: 30,
        marginTop: "4%",
        borderColor: "#679289",
        borderWidth: 5,
        // width: windowWidth - 6,
        margin: 10,
        padding: 10
    },
    numberBox: {
        width: 63,
        height: 56,
        elevation: 2,
        borderRadius: 28,
        marginBottom: 30,
        backgroundColor: 'whitesmoke',
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
