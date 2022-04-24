import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique_2 extends Component {
render(){
  return(
    <ScrollView>
    <Text>
Wet-in-wet painting is one of the most basic techniques — so basic you might have already done it before without realizing it!

Start by brushing water (and only water) onto your paper. Then dip your brush in paint and spread it over the water wash. The paint will feather and diffuse like magic.
    </Text>
    <Image
                source = {require("../assets/image_1.png")}
                style={[styles.iconImage,{width: 500,height: 400}]}                  

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
    backgroundColor: "red"
  },
  iconImage: {
  width: "100%",
  height: "100%",
  resizeMode: "contain"
}


})