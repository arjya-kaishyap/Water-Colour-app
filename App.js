import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createSwitchNavigator,createAppContainer } from 'react-navigation';
import LogIn from './screens/LogIn';
import DashBoard from './screens/DashBoard.js';
import LoadingScreen from './screens/LoadingScreen';
import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const AppSwitchNavigator = createSwitchNavigator({ 
  LoadingScreen:LoadingScreen,
  LogIn:LogIn,
  DashBoard:DashBoard
 })
 const AppNavigator = createAppContainer(AppSwitchNavigator)

 export default function App(){
   return(
     <AppNavigator />
   )
 }