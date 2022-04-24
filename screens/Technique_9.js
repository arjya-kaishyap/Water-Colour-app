import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique extends Component {
render(){
  return(
    <ScrollView>
    <Text>
    This technique is similar to watercolor blooms because it requires a certain level of dryness to get the look. Apply a wet wash of color and tilt the surface a little. The color should drift to one side of the painting area. Then set the surface down flat. As the water dries, it bleeds upward again and creates a back wash.
</Text>
              <Image
                source = {require("../assets/image_9.jpg")}
                style={[styles.iconImage,{width: 350,height: 400}]}                  

              ></Image>
</ScrollView>
  )}}
const styles = StyleSheet.create({
    iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    backgroundColor: "lightgreen"
  },
  iconImage: {
  width: "100%",
  height: "100%",
  resizeMode: "contain"
}


})