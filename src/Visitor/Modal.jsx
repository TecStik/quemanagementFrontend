import React, {  useState, useEffect } from 'react';
import { Modal, Text, Dimensions, View, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Colors = {
  Grey: '#DCDCDC',
  White: '#FFFFFF',
  Blue: '#0000FF',
  Black: '#000000',
};

export default function ModalScreen({ visible, onClose, handleQr }) {

  let [QrCodeData, setQrCodeData] = useState('')
  const [visClose, setvisClose] = useState(false);



  return (
    <View style={{ marginTop: 10 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={QrCodeData == "" ? visible : visClose}
        onRequestClose={onClose}

      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View
            style={{
              backgroundColor: Colors.White,
              marginLeft: 10,
              marginRight: 10,
              marginTop: 50,
              flex: 1,
              marginBottom: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}>

           <QRCodeScanner
              onRead={({ data }) => { handleQr(data) }}
              // flashMode={RNCamera.Constants.FlashMode.torch}
              reactivate={true}
              showMarker={true}
              reactivateTimeout={500}
            />
            <View />
          
            
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[
                  styles.buttonStyle,
                  {
                    marginTop: 30,
                    backgroundColor: "#970C0C",
                    flex: 1,
                    marginRight: 5,
                    marginLeft: 10,
                  },
                ]}
                onPress={onClose}>
                <Text style={{ textAlign: 'center', color: "white", fontSize: 20 }}>Closed</Text>
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
  }
});
