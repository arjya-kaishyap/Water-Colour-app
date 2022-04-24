import React, { Component } from 'react';
import { Text, View, ScrollView,Image,StyleSheet } from 'react-native';

export default class Technique extends Component {
render(){
  return(
        <ScrollView style={styles.container}>
    <Text>
    There’s more than one way to approach laying a watercolor wash — you can either do it on a wet surface or a dry one.

One tip for any watercolor wash: If you notice a mistake in a previous stroke, don’t try to fix it. Once the wash has started to dry, a new stroke will almost definitely be more noticeable than any small mistake. It’s best to leave these happy little accidents as they are.
</Text>
              <Image
                source = {require("../assets/image_1.png")}
                style={[styles.iconImage,{width: 500,height: 400}]}                  

              ></Image>
<Text>

two papers with blue watercolor washes
Dry Wash
Use a large flat or round brush and an angled surface like a drafting table or easel (this way gravity does some work for you.) On your palette, mix a generous amount of water with your chosen pigment. Remember that watercolors dry lighter than they look when they’re wet. You might want to practice on a scrap of watercolor paper first.

Load your brush with as much paint as it’ll hold. Then, working quickly, make a steady, controlled horizontal stroke along the top of the paper. You’ll notice the water in the first stroke starts to pool along the bottom edge — don’t let this dry! Reload your brush with pigment and paint another stroke just below the first one, overlapping with the bottom edge.

When you reach the bottom, blot your brush on a paper towel, then use the dry tip to carefully pull up the excess paint along the bottom of the final stroke to avoid a darker bottom. Let your paper dry completely at an angle before setting it down flat again.

Blue brush strokes
Wet Wash
A wet surface watercolor wash is about the same as a dry wash, with one main difference: First you’ll dip your brush in water and brush it over the whole surface. Be generous with the water here — you want the paper glistening with moisture.

Once you’ve wet the area, dip the brush in paint and apply lines of color within the wet area, just like you would with a dry wash. The paint will blend together into one luminous wash of color.

painting blue brush strokes
</Text>
</ScrollView>
  )
}
}
const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "lightgreen"
  },
    iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }

})