import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique extends Component {
render(){
  return(
    <ScrollView>
    <Text>
    Scumbling is a technique where irregular motions are used to make either a line or layer on paint. It’s basically like scribbling with your brush. Don’t think too hard about it: just paint irregularly in an area. To really see the texture, use a relatively dry brush.
</Text>
              <Image
                source = {require("../assets/image_12.jpg")}
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