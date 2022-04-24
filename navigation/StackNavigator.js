 import React,{Component} from 'react';
 import TabNavigator from './TabNavigator';
 import UserStyle from '../screens/UserStyle';
 import Technique_1 from '../screens/Technique_1';
 import Technique_2 from '../screens/Technique_2';
 import Technique_3 from '../screens/Technique_3';
 import Technique_4 from '../screens/Technique_4';
 import Technique_5 from '../screens/Technique_5';
 import Technique_6 from '../screens/Technique_6';
 import Technique_7 from '../screens/Technique_7';
 import Technique_8 from '../screens/Technique_8';
 import Technique_9 from '../screens/Technique_9';
 import Technique_10 from '../screens/Technique_10';
 import Technique_11 from '../screens/Technique_11';
 import Technique_12 from '../screens/Technique_12';
 import Technique_13 from '../screens/Technique_13';
 import Technique_14 from '../screens/Technique_14';
 import Technique_15 from '../screens/Technique_15';
 import Technique_16 from '../screens/Technique_16';

 import {createStackNavigator} from '@react-navigation/stack';
 
 const Stack = createStackNavigator();

 export default class StackNavigator extends Component {
 render(){
   return(
     <Stack.Navigator>
     <Stack.Screen name = "Home" component = {TabNavigator} />
     <Stack.Screen name = "UserStyle" component = {UserStyle} />
     <Stack.Screen name = "Technique_1" component = {Technique_1} />
     <Stack.Screen name = "Technique_2" component = {Technique_2} />
     <Stack.Screen name = "Technique_3" component = {Technique_3} />
     <Stack.Screen name = "Technique_4" component = {Technique_4} />
     <Stack.Screen name = "Technique_5" component = {Technique_5} />
     <Stack.Screen name = "Technique_6" component = {Technique_6} />
     <Stack.Screen name = "Technique_7" component = {Technique_7} />
     <Stack.Screen name = "Technique_8" component = {Technique_8} />
     <Stack.Screen name = "Technique_9" component = {Technique_9} />
     <Stack.Screen name = "Technique_10" component = {Technique_10} />
     <Stack.Screen name = "Technique_11" component = {Technique_11} />
     <Stack.Screen name = "Technique_12" component = {Technique_12} />
     <Stack.Screen name = "Technique_13" component = {Technique_13} />
     <Stack.Screen name = "Technique_14" component = {Technique_14} />
     <Stack.Screen name = "Technique_15" component = {Technique_15} />
     <Stack.Screen name = "Technique_16" component = {Technique_16} />

     </Stack.Navigator>
   )
 }

 }