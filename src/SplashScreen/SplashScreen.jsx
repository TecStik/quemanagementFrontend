import React, { useEffect, useState } from 'react';
import {
    StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo/LOG3.png';
import Header from "../Header/Header";
import SignUP from '../SignUP/SignUP';
import WelcomScreen from '../WelcomScreen/WelcomScreen';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SplashScreen() {

    const navigation = useNavigation();
    const [loading, setloading] = useState(true);


    useEffect(() => {
        setloading(false);
        setTimeout(() => {
            setloading(true) // 1
        }, 5000);
    }, [])


    return (

        <>
            <LinearGradient
                colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <ScrollView>
                    {loading ? <WelcomScreen /> :
                        <View style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: windowHeight / 4.5
                        }}>
                            <View style={styles.container}>
                                <Image style={styles.image} source={logo} />
                            </View>
                        </View>
                    }
                </ScrollView>
            </LinearGradient>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "#679289",
        height: windowHeight / 2,
        width: windowWidth / 1.2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        // marginTop: "20%",
        // margin:10,
        // padding:10
    },
    image: {
        width: windowWidth,
        height: windowHeight / 2,
    },

});