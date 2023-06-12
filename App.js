import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StoreProvider } from './GlobalState/GlobalState';
import { NativeBaseProvider } from 'native-base';
import { useColorScheme, SafeAreaView, StyleSheet, ScrollView, StatusBar, Text, View } from 'react-native';
import SignIn from './src/SignIn/SignIn';
import AuthNavigator from './src/AuthNavigation';
import SplashScreen from './src/SplashScreen/SplashScreen';
import WelcomScreen from './src/WelcomScreen/WelcomScreen';
import SignUP from './src/SignUP/SignUP';
import List from './src/List/List';
import AdminHome from './src/AdminHome/AdminHome';
import Dashboard from './src/AppointmentList/AppointmentList';
import ManagerHome from './src/ManagerHome/ManagerHome';
import Registration from './src/Registration/Registration';
import Franchise from './src/Franchise/Franchise';

import FranchiseList from './src/FranchiseList/FranchiseList';
import AddManager from './src/AddManager/AddManager';
import Visitor from './src/Visitor/Visitor';
import SignUpVisitor from './src/SignUpVisitor/SignUpVisitor';

// import Header from './src/Header/Header';

function App() {

  const [LoginUser, setLoginUser] = useState("");
  let [AppointmentList, setAppointmentList] = useState('');
  const [SelectedFranchies, setSelectedFranchies] = useState("");
  const [VisitorData, setVisitorData] = useState('')
  // {
  //   Name: "Faiz",
  //   email: "faizeraza2468@gmail.com",
  //   ContactNum: "03022639133",
  //   _id: "64801b6c8408de3d"
  // }
  return (
    <StoreProvider value={{
      LoginUser, setLoginUser,
      VisitorData, setVisitorData,
      AppointmentList, setAppointmentList,
      SelectedFranchies, setSelectedFranchies
    }}>
      <NavigationContainer options={{ headerShown: false }}>
        <NativeBaseProvider>
          <AuthNavigator />

          {/* <FranchiseList /> */}
          {/* <WelcomScreen /> */}
          {/* <SplashScreen /> */}

          {/* <AddManager /> */}
          {/* <SignUpVisitor /> */}
          {/* <Visitor /> */}
          {/* <SignIn /> */}
          {/* <Registration /> */}

          {/* <SignUP /> */}
          {/* <Dashboard /> */}
          {/* <ManagerHome /> */}
          {/* <AdminHome /> */}
          {/* <List /> */}
          {/* <Franchise /> */}
        </NativeBaseProvider>
      </NavigationContainer>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default App;
