import React, { useState, useContext, useEffect } from 'react';
import { Modal, Text, Dimensions, View, Alert, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StoreContext from '../../GlobalState/GlobalState';
import axios from 'axios';
import { Url } from '../../Core';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Colors = {
  Grey: '#DCDCDC',
  White: '#FFFFFF',
  Blue: '#0000FF',
  Black: '#000000',
};

export default function ManagerModal({ visible, onClose, data, ManagerUpdate }) {

  // console.log(data, "Modal data");
  let [UserData, setUserData] = useState('')
  // const UpdateManager = (item) => {
  //   console.log(item, "Update Manager Data");
  // }
  useEffect(() => {
    axios({
      method: "post",
      url: Url + "/api/user/get",
      data: {
        filter: {
          CraetedBy: data.BelongTo
        }
      }
    }).then((res) => {
      setUserData(res.data)
      // console.log(res.data, "Response User Data");
    }).catch((err) => {
      console.log(err, "User Error");
    })
  }, [data])

  return (
    <View style={{ marginTop: 10 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >


        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>

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

              <SafeAreaView>
                <FlatList
                  data={UserData}
                  renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => ManagerUpdate(item)}>
                      <View style={styles.manCard}>
                        <Text style={{ fontSize: 25, fontFamily: "20px", color: "#6D9C9B", fontWeight: "bold", }}>{item.Name}</Text>
                      </View>
                    </TouchableOpacity>
                  } />
              </SafeAreaView>

              {/* <View style={styles.manCard}>
                <Text style={{ fontSize: 25, fontFamily: "20px", color: "#6D9C9B", fontWeight: "bold", }}>Attended</Text>
              </View>
              <View style={styles.manCard}>
                <Text style={{ fontSize: 25, fontFamily: "20px", color: "#6D9C9B", fontWeight: "bold", }}>Attended</Text>
              </View> */}
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
                <Text style={{ textAlign: 'center', color: "white", fontSize: 20 }}>Attend</Text>
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
                <Text style={{ textAlign: 'center', color: "white", fontSize: 20 }}>Discharge</Text>
              </TouchableOpacity>
            </View>
          </View>

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
  // tabUnderline: {
  //   textDecorationLine: 'underline',
  // },
  // buttonsContainer: {
  //   flexDirection: 'row',
  //   position: 'absolute',
  //   bottom: 0,
  //   alignItems: 'center',
  // },
  // buttonStyle: {
  //   padding: 10,
  //   borderRadius: 5,
  //   marginBottom: 10,
  //   borderColor: Colors.Black,
  //   borderWidth: 1,
  // },
  // itemB: {
  //   color: '#094e80',
  //   borderWidth: 1,
  //   borderColor: '#0C9751',
  //   fontSize: 30,
  //   justifyContent: "flex-start",

  // },
  // itemA: {
  //   backgroundColor: "#E1F0EF",
  //   borderWidth: 1,
  //   borderColor: '#0C9751',
  //   fontSize: 30,
  //   justifyContent: "flex-start",
  // },
  // itemText: {
  //   marginRight: 5,
  //   fontSize: 20,
  //   textDecorationColor: "red"
  // },
  // num: {
  //   // marginTop: 30,
  //   alignItems: "center",
  //   width: windowWidth / 1.5,
  //   backgroundColor: "#CAD7D7",
  //   borderRadius: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexDirection: "row",
  //   height: 50,
  //   padding: 2,
  //   borderBottomWidth: 1,
  // },
  manCard: {
    marginTop: 20,
    // marginBottom: 40,
    padding: 10,
    alignItems: "center",
    width: windowWidth / 1.2,
    backgroundColor: '#CAD7D7',
    borderRadius: 5,

  }
});
