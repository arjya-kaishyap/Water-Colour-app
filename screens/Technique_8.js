import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique extends Component {
render(){
  return(
    <ScrollView>
    <Text>
    Watercolor blooms or blossoms like these happen when very wet paint spreads on a drier (but not completely dry) area of a painting. When you apply wet paint on a still-damp wash, the liquid forces the original pigment out, and it creates these fun, irregularly shaped splotches.

First, lay down a colorful wet wash and let it dry a little. Then load your brush with water and touch it lightly to the paper. The drops of water will create sharply defined blooms. How dry the underlying wash is determines the hardness of edges.

You can also do the same thing with two colors: Apply the first and let it dry a bit. Then apply a wet wash of a different color right next to the first one, so that they come in contact. The wetter of the two washes will flow into the other.
</Text>
              <Image
                source = {require("../assets/image_8.jpg")}
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