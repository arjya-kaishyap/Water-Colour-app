import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique extends Component {
render(){
  return(
    <ScrollView>
    <Text>
     Splattering gives your painting an energetic vibe, but it’s easier said than done — this technique can easily get messy and uncontrollable. But there are three approaches to making splattering more approachable.

The Tapping Method
Fill the bristles of your paintbrush with pigment. Then, either with your fingers or a second brush, gently tap the pigment-filled paintbrush over your paper. That will give the paint enough force travel across your canvas and cover a lot of ground. But keep in mind that this method makes the paint more difficult to control.

The Flicking Method
For more control over your splatter, you’ve gotta get your hands dirty. Load a stiff-bristled brush (or a spare toothbrush, if you have one) with pigment and hold it in one hand at a downward angle, so the bristles are pointed toward the ground. Then, with your opposite hand, slowly run your fingers along the edge of the brush, pulling the bristles back so that they launch paint onto the canvas.

Make a Stencil
For ultimate control over your splatter paint, make a stencil. It’s simple — just cut a shape from a large sheet of paper and place it over your canvas before splattering paint.
</Text>
              <Image
                source = {require("../assets/image_14.jpg")}
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