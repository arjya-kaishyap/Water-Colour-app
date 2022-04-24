 import React,{Component} from 'react';
import Home from '../screens/Home';
import Styles from '../screens/Styles';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AddYourStyle from '../screens/AddYourStyle';

const Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends Component {
  renderStyles = props => {
    return <Styles setUpdateToFalse={this.removeUpdated} {...props} />;
  };

  renderStyle = props => {
    return <AddYourStyle setUpdateToTrue={this.changeUpdated} {...props} />;
  };

  changeUpdated = () => {
    console.log('31')
    this.setState({ isUpdated: true });
  };

  removeUpdated = () => {
    console.log('35')
    this.setState({ isUpdated: false });
  };
render(){

  return(
    <Tab.Navigator>
     <Tab.Screen name = "Home" component = {Home} />
      <Tab.Screen name = "Styles" component={this.renderStyles}
          options={{ unmountOnBlur: true }} />
      <Tab.Screen name = "AddYourStyle" component = {this.renderStyle} 
      options={{ unmountOnBlur: true }} 
      />
    </Tab.Navigator>
  )
}


}