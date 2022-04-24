import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique extends Component {
render(){
  return(
    <ScrollView>
    <Text>
    Dry brush painting requires using very little paint and water to create a scratchy, “scraped-across” brushstroke. It can be used for an entire painting, but it’s also perfect for creating texture in small areas of a larger painting.

Mix your pigment, making sure your paint mixture is not super wet. Dip your dry brush into the paint, dab it onto a paper towel to remove the excess, and brush lightly across the surface — this method highlights the texture of the paper and also doesn’t muddy your colors.
    </Text>
                  <Image
                source = {require("../assets/image_6.jpg")}
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