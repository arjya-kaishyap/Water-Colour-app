
import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique extends Component {
render(){
  return(
    <ScrollView>
    <Text style = {{flex:0.2}}>
    When salt is sprinkled on a wet wash, it starts to gather the watercolor pigments and makes the coolest texture. The effect will vary depending on the size of the grains of salt and the wetness of the paper, so experiment on scraps of watercolor paper before you commit on your final painting. Once the paint is dry, simply brush off the excess salt.
</Text>
              <Image
                source = {require("../assets/image_16.jpg")}
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