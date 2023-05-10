import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './SignIn/SignIn';
import SignUP from './SignUP/SignUP';
import AdminHome from './AdminHome/AdminHome';
import ManagerHome from './ManagerHome/ManagerHome';
import List from './List/List';
import Dashboard from './Dashboard/Dashboard';
import UserHome from './UserHome/UserHome';
import Registration from './Registration/Registration';
import Franchise from './Franchise/Franchise';
import WelcomScreen from './WelcomScreen/WelcomScreen';
import SplashScreen from './SplashScreen/SplashScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        options={{headerShown: false}}
        component={SplashScreen}
      />
      <Stack.Screen
        name="WelcomScreen"
        options={{headerShown: false}}
        component={WelcomScreen}
      />
      <Stack.Screen
        name="SignUP"
        options={{headerShown: false}}
        component={SignUP}
      />
      <Stack.Screen
        name="SignIn"
        options={{headerShown: false}}
        component={SignIn}
      />
      <Stack.Screen
        name="AdminHome"
        options={{headerShown: false}}
        component={AdminHome}
      />
      <Stack.Screen
        name="ManagerHome"
        options={{headerShown: false}}
        component={ManagerHome}
      />
      <Stack.Screen
        name="List"
        options={{headerShown: false}}
        component={List}
      />
      <Stack.Screen
        name="Dashboard"
        options={{headerShown: false}}
        component={Dashboard}
      />
      <Stack.Screen
        name="UserHome"
        options={{headerShown: false}}
        component={UserHome}
      />
      <Stack.Screen
        name="Registration"
        options={{headerShown: false}}
        component={Registration}
      />
      <Stack.Screen
        name="Franchise"
        options={{headerShown: false}}
        component={Franchise}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
