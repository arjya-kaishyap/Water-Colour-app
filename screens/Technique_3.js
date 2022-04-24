import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique_3 extends Component {
render(){
  return(
    <ScrollView>
    <Text>
    An underpainting is essentially a monochrome wash that’s used for the first layer of the painting. You’ll add layers of transparent washes over the underpainting, which gives realistic and luminous effects.

First, mix a light purple shade (a combo of cadmium red and ultramarine blue works great). Neutral shades of blue or green can also work.

Lightly paint your subject using the purple, and pay careful attention to light and shade. Since you’re only working in one color, you can really focus on rendering the shape. Use a soft brush and a light hand to keep the purple from overpowering the rest of the painting.

Let the underpainting dry completely before moving on to glazing in color. If it’s wet, you might muddy your colors.
    </Text>
    <Image source = {require("../assets/image_3.jpg")}
     style={[styles.iconImage,{width: 400,height: 400}]} >
    </Image>
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