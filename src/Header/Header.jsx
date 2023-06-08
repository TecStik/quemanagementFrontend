import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet, Text, Dimensions, View, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import home from '../../assets/header-icon/home.png';
import back from '../../assets/header-icon/back.png';
import { NativeBaseProvider } from "native-base";
import { useNavigation, useRoute } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Header({ ScreenName, FNSHeader, SNSHeader }) {

    const navigation = useNavigation();
    const route = useRoute();

    const handleBack = () => {
        // console.log("in arowpress", navigation, route.name);
        if (navigation.canGoBack()) {
            navigation.goBack();
        }

    }
    return (
        <View style={{ position: 'absolute', left: 0, right: 0, zIndex: 1 }}>
            <View style={styles.Topheader}>
                <TouchableOpacity onPress={() => handleBack()}>
                    <Image style={styles.image} source={back} />
                </TouchableOpacity>
                <Text style={{ color: "white", fontSize: 30, marginLeft: "4%", marginTop: "2%", fontWeight: "bold" }}>{ScreenName}</Text>
                <TouchableOpacity>
                    <Image style={styles.image} source={home} />
                </TouchableOpacity>
            </View>
            <View style={{
                backgroundColor: "#1D7874", opacity: 0.5, borderBottomEndRadius: 20, borderBottomStartRadius: 20, height: "70%", borderColor: "yellow",
                borderBottomWidth: 5,
                display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"
            }}>
                <Text style={{ fontSize: 20, color: "white" }}>{FNSHeader}</Text>
                <Text style={{ fontSize: 20, color: "white" }}>{SNSHeader}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    linearGradient: {

    },
    image: {
        width: windowWidth / 10,
        height: windowHeight / 20,
        // marginLeft: "4%",
        margin: "2%",
        // paddingTop:"2%",
        // marginTop: "2%",
        // marginRight: "4%"
    },
    Topheader: {
        backgroundColor: "#1D7874", width: "100%", height: "80%", zIndex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
})
export default Header