import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './SignIn/SignIn';
import SignUP from './SignUP/SignUP';
import AdminHome from './AdminHome/AdminHome';
import ManagerHome from './ManagerHome/ManagerHome';
import List from './List/List';
import AppointmentList from './AppointmentList/AppointmentList';
import Registration from './Registration/Registration';
import Franchise from './Franchise/Franchise';
import WelcomScreen from './WelcomScreen/WelcomScreen';
import SplashScreen from './SplashScreen/SplashScreen';
import FranchiseList from './FranchiseList/FranchiseList';
import AddManager from './AddManager/AddManager';
import SignUpVisitor from './SignUpVisitor/SignUpVisitor';
import Visitor from './Visitor/Visitor';
import ManagerAssign from './ManagerAssign/ManagerAssign';

// import QrCodeScanner from './QrCodeScanner/QrCodeScanner';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        options={{ headerShown: false }}
        component={SplashScreen}
      />
      <Stack.Screen
        name="WelcomScreen"
        options={{ headerShown: false }}
        component={WelcomScreen}
      />
      <Stack.Screen
        name="SignUP"
        options={{ headerShown: false }}
        component={SignUP}
      />
      <Stack.Screen
        name="SignIn"
        options={{ headerShown: false }}
        component={SignIn}
      />
      <Stack.Screen
        name="AdminHome"
        options={{ headerShown: false }}
        component={AdminHome}
      />
      <Stack.Screen
        name="ManagerHome"
        options={{ headerShown: false }}
        component={ManagerHome}
      />
      <Stack.Screen
        name="AddManager"
        options={{ headerShown: false }}
        component={AddManager}
      />
      <Stack.Screen
        name="List"
        options={{ headerShown: false }}
        component={List}
      />
      <Stack.Screen
        name="AppointmentList"
        options={{ headerShown: false }}
        component={AppointmentList}
      />
      <Stack.Screen
        name="Visitor"
        options={{ headerShown: false }}
        component={Visitor}
      />
      <Stack.Screen
        name="SignUpVisitor"
        options={{ headerShown: false }}
        component={SignUpVisitor}
      />
      <Stack.Screen
        name="Registration"
        options={{ headerShown: false }}
        component={Registration}
      />
      <Stack.Screen
        name="Franchise"
        options={{ headerShown: false }}
        component={Franchise}
      />
      <Stack.Screen
        name="FranchiseList"
        options={{ headerShown: false }}
        component={FranchiseList}
      />
      <Stack.Screen
        name="ManagerAssign"
        options={{ headerShown: false }}
        component={ManagerAssign}
      />
      {/* <Stack.Screen
        name="QrCodeScanner"
        options={{ headerShown: false }}
        component={QrCodeScanner}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
