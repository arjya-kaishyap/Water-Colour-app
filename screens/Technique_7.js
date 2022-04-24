import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique extends Component {
render(){
  return(
    <ScrollView>
    <Text>
    In some cases, you’ll want to remove pigment from your painting. This is especially handy when you’ve made a mistake or when you want to add white space to your work. Using different techniques, you can lift color from wet or dry watercolor.

Lifting from Wet Watercolors
If your paint’s still wet, it’s easy to remove pigment. Blot your brush thoroughly and touch it to the paint to lift it back off the paper. The trick here is that the damp-but-blotted brush absorbs more water than it releases, so it’ll quickly pick the wet color up from your painting.

Another option is to use a paper towel or tissue paper to lift the pigment. These tools can be the better choice if you’re going for a more abstract, less controlled white space. If you want more control, use a brush.

Lifting Dry Watercolor
You can also lift pigment off the page even if the paint’s dry, though it’s a little more difficult. Believe it or not, this can be pretty effectively done with a simple eraser.

For a little more control, start by wetting the area with water, then use a stiff, nearly dry brush or a paper towel to lift the color.
</Text>
              <Image
                source = {require("../assets/image_7.jpg")}
                style={[styles.iconImage,{width: 300,height: 300}]}                  

              ></Image>
</ScrollView>
  )}}
const styles = StyleSheet.create({
    iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  iconImage: {
  width: "100%",
  height: "100%",
  resizeMode: "contain"
}


})