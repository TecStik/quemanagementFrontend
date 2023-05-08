import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SignIn from './src/SignIn/SignIn';
import AuthNavigator from './src/AuthNavigation';
// import SignUP from './src/SignUP/SignUP';
// import List from './src/List/List';
// import UserHome from './src/UserHome/UserHome';
// import AdminHome from './src/AdminHome/AdminHome';
// import Dashboard from './src/Dashboard/Dashboard';
// import ManagerHome from './src/ManagerHome/ManagerHome';
// import Registration from './src/Registration/Registration';
// import Franchise from './src/Franchise/Franchise';



// import Header from './src/Header/Header';

function App() {
  return (
    <NavigationContainer options={{headerShown: false}}>
      <AuthNavigator />
      {/* <SignIn /> */}
      {/* <Dashboard /> */}
      {/* <ManagerHome /> */}
      {/* <AdminHome /> */}
      {/* <UserHome /> */}
      {/* <List /> */}
      {/* <Franchise /> */}
      {/* <Registration /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default App;
