import React, { useState } from "react";
import {
    StyleSheet, Text, View, Image, TextInput, Modal, Button, Dimensions, TouchableOpacity, ScrollView
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../Header/Header";

// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function QrCodeScanner() {


    return (
        <>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={onClose}
                style={styles.modaleStyle}
            >
                <View style={styles.container}>
                    <View style={styles.popup}>
                        <TouchableOpacity style={styles.buttonClose} onPress={onClose}>
                            <Text style={styles.buttonText}>close</Text>
                        </TouchableOpacity>



                    </View>
                </View>
            </Modal>
            {/* <LinearGradient
                colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >

                <Header ScreenName="Visitor Home" />
                <QRCodeScanner
                    onRead={({ data }) => console.log(data)}
                    flashMode={RNCamera.Constants.FlashMode.torch}
                    reactivate={true}
                    showMarker={true}
                />
            </LinearGradient> */}
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },


    popup: {
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        // height: '70%',
        width: windowWidth / 1.3,
        borderWidth: 1,
        borderColor: 'grey',

    },

})