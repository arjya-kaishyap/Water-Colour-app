import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique extends Component {
render(){
  return(
    <ScrollView>
    <Text>
    Instead of applying lines or areas of paint, stippling is painting tiny dots in a concentrated area. Once you’ve painted many dots, you’ll have a saturated color and fascinating texture.

Stippling can be neat and tidy, or the marks can overlap in a more freeform way. You can use a fairly dry brush for more defined dots or a wet brush for a looser look. And of course, the size of the brush you choose will determine the size of your dots, so choose carefully.
</Text>
              <Image
                source = {require("../assets/image_13.jpg")}
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