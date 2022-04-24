import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique extends Component {
render(){
  return(
    <ScrollView>
    <Text>
    Watercolor can be used to paint lines of any size, shape and thickness. Just like with pen and ink drawings, you can place lines beside each other or layer them perpendicular to each other for a hatching or cross-hatching effect.

For clean lines, use a small, pointed brush and load it with pigment, using only a dash of water. Then, paint a line on your paper. Depending on how much water you add to the brush, you can get dark, crisp lines or flowy, freeform lines.
</Text>
              <Image
                source = {require("../assets/image_11.jpg")}
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