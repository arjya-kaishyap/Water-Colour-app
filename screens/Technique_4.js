import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique_4 extends Component {
render(){
  return(
    <ScrollView>
    <Text>
    A simple watercolor wash uses just one color, but you can add depth to your work by using more hues in a gradient. Start by adding fresh watercolor to a wet paint surface.

Then place the second color — either a more intense version of the same hue or a different hue entirely — right beside the first color.

Because the paints are on a wet surface, they’ll blend slightly and create a natural gradient in the tones. You can control how neat or painterly a gradient comes out by the wetness of the paint.
    </Text>
                  <Image
                source = {require("../assets/image_4.jpg")}
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