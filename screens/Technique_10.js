import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique extends Component {
render(){
  return(
    <ScrollView>
    <Text>
    If you’re going for a gradient that goes from a saturated color to a more transparent hue, adding more paint won’t do the trick. What you need is water. Start with a strong area of color and then use a clean, wet brush to “diffuse” the color, making a gentle gradient or “feathering” effect.
</Text>
              <Image
                source = {require("../assets/image_10.jpg")}
                style={[styles.iconImage,{width: 300,height: 300}]}                  

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