import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique_5 extends Component {
render
(){
  return(
    <ScrollView>
    <Text>
    Once a color of paint has dried, you can add layers of watercolor to create dimension, texture and color variation. Just know that the paper has to be completely dry in between washes so that the colors don’t blend together and get muddy.

Wait until your initial color has dried completely (not damp — dry!), then paint the second color on top. Just don’t add much water to the second color since this can re-wet the initial color and make the two blend.

To make the lines of your second color less severe, you can wet the brush with water and brush gently to feather the line.
    </Text>
                  <Image
                source = {require("../assets/image_5.jpg")}
                style={[styles.iconImage,{width: 300,height: 300}]}                  

              ></Image>
    </ScrollView>
  )
}
}
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