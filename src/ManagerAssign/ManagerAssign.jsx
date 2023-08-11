import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Header/Header';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {Url} from '../../Core';
import StoreContext from '../../GlobalState/GlobalState';
import ManagerModal from './ManagerModal';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ManagerAssign() {
  const navigation = useNavigation();
  let [FranchiseDta, setFranchiseData] = useState('');
  let [showPopup, setShowPopup] = useState(false);
  let [loading, setloading] = useState(false);
  let [ModalData, setModalData] = useState('');
  let [AysnData, setAysnData] = useState('');

  let SelectFranchies = useContext(StoreContext);
  const handleClick = () => {
    setShowPopup(true);
  };
  const handleClose = () => {
    setShowPopup(false);
  };

  // console.log(SelectFranchies.LoginUser.CraetedBy, "SelectFranchies");
  // setSelectedFranchies

  useEffect(() => {
    axios({
      method: 'post',
      url: Url + '/api/franchise/get',
      data: {
        filter: {
          // BelongTo: "64621726c646e15aadb66a85"
          BelongTo: SelectFranchies.LoginUser._id,
        },
      },
    })
      .then(res => {
        setFranchiseData(res.data);
        setloading(false);
        // console.log(res.data,"Franchise Response");
      })
      .catch(err => {
        console.log(err, 'Franchise error');
      });
  }, [loading]);

  const SelectManager = item => {
    // console.log(item);
    // axios({
    //     method: "post",
    //     url: Url + "/api/user/get",
    //     data: {
    //         "filter": {
    //             "CraetedBy": "648199d2ec7bad4ad7ef7086"
    //         }
    //     }
    // }).then((res) => {
    //     console.log(res.data, "Response Manager");
    // }).catch(() => {
    //     console.log(err, "error");
    // })
    setModalData(item);
    setShowPopup(true);
  };

  const ManagerUpdate = async data => {
    console.log(data.CraetedBy,"manager Update Objet Id==============>");
    console.log(ModalData, "manager Data ===========>");
    // console.log(data.Name, "manager Update Data");

    axios({
      method: 'post',
      url: Url + '/api/franchise/updateFiltered',
      data: {
        filter: {
          BelongTo: data.CraetedBy,
        //   BelongTo: ModalData.BelongTo,
        },
        Update: {
          ManagerName: data.Name,
        },
      },
    })
      .then(res => {
        console.log(res.data, 'Response Manager');
        setShowPopup(false);
        setloading(true);
      })
      .catch(() => {
        console.log(err, 'error');
      });
  };

  return (
    <>
      <LinearGradient
        colors={['#0F3C3A', '#1D7874', '#0F3C3A']}
        style={{flex: 1}}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <Header ScreenName="Relation Franchise" />
        <ManagerModal
          visible={showPopup}
          onClose={handleClose}
          data={ModalData}
          ManagerUpdate={ManagerUpdate}
        />
        <ScrollView>
          <View style={{marginTop: windowHeight / 4.6}}>
            <SafeAreaView>
              <FlatList
                data={FranchiseDta}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={e => SelectManager(item)}>
                    <View style={styles.container}>
                      <Text style={{fontSize: 20, color: 'white'}}>
                        <Text>Franchise Name: </Text> {item.Name}
                      </Text>
                      <Text style={{fontSize: 20, color: 'white'}}>
                        <Text>Manager Name: </Text> {item.ManagerName}
                      </Text>
                      <Text style={{fontSize: 20, color: 'white'}}>
                        <Text>Contact Number: </Text> {item.ContactNum}
                      </Text>
                      <Text style={{fontSize: 20, color: 'white'}}>
                        <Text>Address: </Text> {item.Address}
                      </Text>
                      <Text style={{fontSize: 20, color: 'white'}}>
                        Short Code:{' '}
                        <View style={styles.numberBox}>
                          <Text
                            style={{
                              fontSize: 15,
                              color: 'white',
                              textAlign: 'center',
                              margin: 1,
                            }}>
                            {item.ShortCode}
                          </Text>
                        </View>
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            </SafeAreaView>

            {/* <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                            <View style={styles.container}>
                                <Text style={{ fontSize: 20, color: "white" }}>Zong</Text>
                                <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Nursery</Text>
                                <Text style={{ fontSize: 23, color: "white" }}>Status: {" "}
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 15, color: "white", textAlign: "center", margin: 1 }}>Open</Text>
                                    </View>
                                </Text>
                            </View>
                        </TouchableOpacity> */}

            {/* <TouchableOpacity>
                            <View style={styles.container}>
                                <Text style={{ fontSize: 20, color: "white" }}>Zong</Text>
                                <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Nursery</Text>
                                <Text style={{ fontSize: 23, color: "white" }}>Status: {" "}
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 15, color: "red", textAlign: "center", margin: 1 }}>Close</Text>
                                    </View>
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.container}>
                                <Text style={{ fontSize: 20, color: "white" }}>Jazz</Text>
                                <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Nursery</Text>
                                <Text style={{ fontSize: 23, color: "white" }}>Status: {" "}
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 15, color: "white", textAlign: "center", margin: 1 }}>Open</Text>
                                    </View>
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.container}>
                                <Text style={{ fontSize: 20, color: "white" }}>telenor</Text>
                                <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Nursery</Text>
                                <Text style={{ fontSize: 23, color: "white" }}>Status: {" "}
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 15, color: "red", textAlign: "center", margin: 1 }}>Close</Text>
                                    </View>
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.container}>
                                <Text style={{ fontSize: 20, color: "white" }}>Zong</Text>
                                <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>Nursery</Text>
                                <Text style={{ fontSize: 23, color: "white" }}>Status: {" "}
                                    <View style={styles.numberBox}>
                                        <Text style={{ fontSize: 15, color: "white", textAlign: "center", margin: 1 }}>Open</Text>
                                    </View>
                                </Text>
                            </View>
                        </TouchableOpacity> */}

            {/* <View style={styles.container}></View> */}
            {/* <View style={styles.container}></View>
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
    flexDirection: 'column',
    backgroundColor: '#679289',
    justifyContent: 'center',
    // alignItems: "center",
    height: windowHeight / 4,
    borderRadius: 30,
    marginTop: '4%',
    borderColor: '#1D7874',
    borderWidth: 5,
    // width: windowWidth - 6,
    margin: 10,
    padding: 10,
  },

  numberBox: {
    width: 80,
    // height: 36,
    elevation: 2,
    borderRadius: 28,
    // marginBottom: 3,
    backgroundColor: 'green',
    // margin: 10,
  },
  twoNumberBox: {
    width: 56,
    height: 56,
    elevation: 2,
    marginBottom: 3,
    backgroundColor: 'white',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
});
