import React, { Component, useState, useEffect } from 'react';
import { Modal, Text, Dimensions, TouchableHighlight, ScrollView, View, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Colors = {
  Grey: '#DCDCDC',
  White: '#FFFFFF',
  Blue: '#0000FF',
  Black: '#000000',
};

export default function VisitorModal({ visible, onClose, FranchiseData }) {

  let [QrCodeData, setQrCodeData] = useState('')
  const [visClose, setvisClose] = useState(false);


  useEffect(() => {
    _retrieveData()
  }, [FranchiseData])

  const _retrieveData = async () => {
    console.log("faiz e raza");
    try {
      const value = await AsyncStorage.getItem('Visitor');
      if (value !== null) {
        // We have data!!
        console.log(value, "get AsyncStorage Data");
      }
    } catch (error) {
      // Error retrieving data
      console.log(value, "not get AsyncStorage Data");
    }
  };

  return (
    <View style={{ marginTop: 10 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={QrCodeData == "" ? visible : visClose}
        onRequestClose={onClose}

      >


        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
          {/* <ScrollView> */}
          <View
            style={{
              backgroundColor: '#90ACAC',
              marginLeft: 10,
              marginRight: 10,
              marginTop: 50,
              flex: 1,
              marginBottom: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,

            }}>

            <View
              style={{
                marginTop: 10,
                paddingBottom: 10,
                paddingRight: 20,
                paddingLeft: 10,
                alignItems: "flex-end",
              }}>
              <Text style={{ fontSize: 35, fontFamily: "20px", color: "red" }} onPress={onClose}> X </Text>
            </View>
            <View />

            <View style={{ alignItems: 'center' }}>
              <View
                style={{
                  // marginTop: 20,
                  marginBottom: 40,
                  padding: 10,
                  alignItems: "center",
                  width: windowWidth / 1.2,
                  backgroundColor: '#6D9C9B',
                  borderRadius: 5,
                }}>
                <Text style={{ fontSize: 25, fontFamily: "20px", backgroundColor: "#6D9C9B", color: "white", fontWeight: "bold" }}>Telenor SHF </Text>

              </View>

              <View style={styles.num}>
                <Text style={{ fontSize: 25, fontFamily: "20px", fontWeight: "bold" }}> Current No </Text>
                <Text style={{ fontSize: 25, fontFamily: "20px", backgroundColor: "#1D7874", color: "white", fontWeight: "bold" }} > {FranchiseData.CurrentToken} </Text>
              </View>
              <View style={styles.num}>
                <Text style={{ fontSize: 25, fontFamily: "20px", fontWeight: "bold" }} >Last Issued </Text>
                <Text style={{ fontSize: 25, fontFamily: "20px", backgroundColor: "#1D7874", color: "white", fontWeight: "bold" }} > {FranchiseData.TokenNumber} </Text>
              </View>

            </View>

            <View style={{ alignItems: "center", marginTop: 20 }}>
              <View style={styles.numCard}>
                <Text style={{ fontSize: 25, fontFamily: "20px", fontWeight: "bold" }}>{FranchiseData.Name}</Text>
              </View>

              <View style={styles.numCard}>
                <Text style={{ fontSize: 25, fontFamily: "20px", fontWeight: "bold" }} >{FranchiseData.ContactNum}</Text>
              </View>
            </View>


            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {
                    marginTop: 30,
                    backgroundColor: "#1D7874",
                    flex: 1,
                    marginRight: 5,
                    marginLeft: 10,
                  },
                ]}
                onPress={onClose}>
                <Text style={{ textAlign: 'center', color: "white", fontSize: 20 }}>Get Token</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {
                    marginTop: 30,
                    backgroundColor: "#1D7874",
                    flex: 1,
                    marginRight: 5,
                    marginLeft: 10,
                  },
                ]}
                onPress={onClose}>
                <Text style={{ textAlign: 'center', color: "white", fontSize: 20 }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* </ScrollView> */}
        </View>
      </Modal >

    </View >
  );
}


const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  tabTextStyle: {
    color: Colors.Grey,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 30,
  },
  tabUnderline: {
    textDecorationLine: 'underline',
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  buttonStyle: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: Colors.Black,
    borderWidth: 1,
  },
  itemB: {
    color: '#094e80',
    borderWidth: 1,
    borderColor: '#0C9751',
    fontSize: 30,
    justifyContent: "flex-start",

  },
  itemA: {
    backgroundColor: "#E1F0EF",
    borderWidth: 1,
    borderColor: '#0C9751',
    fontSize: 30,
    justifyContent: "flex-start",
  },
  itemText: {
    marginRight: 5,
    fontSize: 20,
    textDecorationColor: "red"
  },
  num: {
    // marginTop: 30,
    alignItems: "center",
    width: windowWidth / 1.5,
    backgroundColor: "#CAD7D7",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    height: 50,
    padding: 2,
    borderBottomWidth: 1,
  },
  numCard: {
    marginTop: 10,
    alignItems: "center",
    width: windowWidth / 1.5,
    backgroundColor: "#6D9C9B",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    height: 50,
    padding: 2,
    // borderBottomWidth: 1,
  }
});
