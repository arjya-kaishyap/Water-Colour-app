 import React,{Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import Profile from '../screens/Profile';
import LogOut from "../screens/LogOut";

const Drawer = createDrawerNavigator()

export default class DrawerNavigator extends Component {

render(){
  return(
    <Drawer.Navigator >
    <Drawer.Screen name ="Home" component = {StackNavigator} options={{ unmountOnBlur: true }}/>
    <Drawer.Screen name = "Profile" component = {Profile} options={{ unmountOnBlur: true }}/>
    <Drawer.Screen name = "LogOut" component = {LogOut} options={{ unmountOnBlur: true }}/>
    </Drawer.Navigator>
  )
}
  
}