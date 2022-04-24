import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique extends Component {
render(){
  return(
    <ScrollView>
    <Text>
    A textured sponge can be a very handy tool to paint everything from foliage in trees to sand on a beach. You can use a sea sponge or a regular new household sponge; just dip it into your pigment and press it to your paper.
</Text>
              <Image
                source = {require("../assets/image_15.jpg")}
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