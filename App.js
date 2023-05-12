import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  useColorScheme,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import SignIn from './src/SignIn/SignIn';
import AuthNavigator from './src/AuthNavigation';
import SplashScreen from './src/SplashScreen/SplashScreen';
import WelcomScreen from './src/WelcomScreen/WelcomScreen';
import SignUP from './src/SignUP/SignUP';
import List from './src/List/List';
import AdminHome from './src/AdminHome/AdminHome';
import Dashboard from './src/Dashboard/Dashboard';
import ManagerHome from './src/ManagerHome/ManagerHome';
import Registration from './src/Registration/Registration';
import Franchise from './src/Franchise/Franchise';

import {NativeBaseProvider} from 'native-base';
import FranchiseList from './src/FranchiseList/FranchiseList';
import AddManager from './src/AddManager/AddManager';
import Visitor from './src/Visitor/Visitor';
// import Header from './src/Header/Header';

function App() {
  return (
    <NavigationContainer options={{headerShown: false}}>
      <NativeBaseProvider>
        <AuthNavigator />
        {/* <FranchiseList /> */}
        {/* <WelcomScreen /> */}
        {/* <SplashScreen /> */}
        {/* <AddManager /> */}

        {/* <SignUP /> */}
        {/* <SignIn /> */}
        {/* <Dashboard /> */}
        {/* <ManagerHome /> */}
        {/* <AdminHome /> */}
        {/* <Visitor /> */}
        {/* <List /> */}
        {/* <Franchise /> */}
        {/* <Registration /> */}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default App;
