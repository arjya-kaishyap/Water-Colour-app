import React,{Component} from 'react';
import {Text,View, StyleSheet,SafeAreaView,Platform,StatusBar,Image,ScrollView} from 'react-native';
import StackNavigator from '../navigation/StackNavigator'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlatList } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export default class Home extends Component {

  render(){ 
    return(
    
        <ScrollView style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source = {require("../assets/logo_Trans.png")}
                style={[styles.iconImage,{width: 30,height: 30}]}                  

              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}> Water-Colour App </Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={Home}
              renderItem={this.renderItem}
            />
          </View>
        <View>
                  <TouchableOpacity onPress = {() => 
                    this.props.navigation.navigate("Technique_1")
                  } >
              <Image
                source={require("../assets/image_1.png")}
                style={[styles.image,{width: 400,height: 300}]} > 
              </Image>
              <Text>
              1. Watercolor Washes

                  </Text>
                  <Text>
                  There’s more than one way to approach laying a watercolor wash — you can either do it on a wet surface or a dry one.
                  </Text> 
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {() =>
                  this.props.navigation.navigate("Technique_2")
                  }>
                 <Image source = {require("../assets/image_2.jpg")}
                   style={[styles.image,{width: 285,height: 270}]} 

                 >
                 </Image>
                 <Text>
              2. Wet-In-Wet Watercolor Painting
                 </Text>
                 <Text>
Wet-in-wet painting is one of the most basic techniques — so basic you might have already done it before without realizing it
                 </Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress ={() => 
                  this.props.navigation.navigate("Technique_3")
                 }>
                 <Image source = {require("../assets/image_3.jpg")}
                   style={[styles.image,{width: 300,height: 270}]}                  
                 >
                 </Image>
                 <Text>
                 3. Underpainting
                 </Text>
                 <Text>
                 An underpainting is essentially a monochrome wash that’s used for the first layer of the painting. You’ll add layers of transparent washes over the underpainting, which gives realistic and luminous effects.
                 </Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress = {() => 
                 this.props.navigation.navigate("Technique_4")
                 }
                 
                 >
                 <Image source = {require("../assets/image_4.jpg")}
                   style={[styles.image,{width: 285,height: 270}]}                 
                 >
                 </Image>
            <Text>
           4. Gradients and Color Blending
            </Text>
            <Text>
            A simple watercolor wash uses just one color, but you can add depth to your work by using more hues in a gradient. Start by adding fresh watercolor to a wet paint surface.
            </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => 
                this.props.navigation.navigate("Technique_5")
                }>
            <Image source = {require("../assets/image_5.jpg")}
           style={[styles.image,{width: 285,height: 270}]}                  

            >
            </Image>
            <Text>
           5. Layering Watercolors
            </Text>
            <Text>
Once a color of paint has dried, you can add layers of watercolor to create dimension, texture and color variation. Just know that the paper has to be completely dry in between washes so that the colors don’t blend together and get muddy.
            </Text>
                             </TouchableOpacity>
                  <TouchableOpacity onPress = {() =>
                  this.props.navigation.navigate("Technique_6")
                  }>
                   <Image source = {require("../assets/image_6.jpg")}
           style={[styles.image,{width: 285,height: 270}]}                  

            >
            </Image>
            <Text>
         6. Dry Brush
            </Text>
            <Text>
Dry brush painting requires using very little paint and water to create a scratchy, “scraped-across” brushstroke. It can be used for an entire painting, but it’s also perfect for creating texture in small areas of a larger painting.
            </Text>
                 </TouchableOpacity>
                  <TouchableOpacity onPress = {() =>
                  this.props.navigation.navigate("Technique_7")
                  }>            
                 <Image source = {require("../assets/image_7.jpg")}
           style={[styles.image,{width: 285,height: 270}]}                  

            >
            </Image>
            <Text>
7. Lifting Color
            </Text>
            <Text>
In some cases, you’ll want to remove pigment from your painting. This is especially handy when you’ve made a mistake or when you want to add white space to your work. Using different techniques, you can lift color from wet or dry watercolor.
            </Text>
                             </TouchableOpacity>
                  <TouchableOpacity onPress = {() =>
                  this.props.navigation.navigate("Technique_8")
                  }>
                 <Image source = {require("../assets/image_8.jpg")}
           style={[styles.image,{width: 285,height: 270}]}                  

            >
            </Image>
            <Text>
           8. Watercolor Blooms
            </Text>
            <Text>
Watercolor blooms or blossoms like these happen when very wet paint spreads on a drier (but not completely dry) area of a painting. When you apply wet paint on a still-damp wash, the liquid forces the original pigment out, and it creates these fun, irregularly shaped splotches.
            </Text>
                             </TouchableOpacity>
                  <TouchableOpacity onPress = {() =>
                  this.props.navigation.navigate("Technique_9")
                  }>      
                 <Image source = {require("../assets/image_9.jpg")}
           style={[styles.image,{width: 285,height: 270}]}                  

            >
            </Image>
            <Text>
           9. Back Washes
            </Text>
            <Text>
This technique is similar to watercolor blooms because it requires a certain level of dryness to get the look. Apply a wet wash of color and tilt the surface a little. The color should drift to one side of the painting area. Then set the surface down flat. As the water dries, it bleeds upward again and creates a back wash
            </Text>
                             </TouchableOpacity>
                  <TouchableOpacity onPress = {() =>
                  this.props.navigation.navigate("Technique_10")
                  }>
                   <Image source = {require("../assets/image_10.jpg")}
           style={[styles.image,{width: 285,height: 270}]}                  

            >
            </Image>
            <Text>
         10. Feathering
            </Text>
            <Text>
If you’re going for a gradient that goes from a saturated color to a more transparent hue, adding more paint won’t do the trick. What you need is water. Start with a strong area of color and then use a clean, wet brush to “diffuse” the color, making a gentle gradient or “feathering” effect.
            </Text>
                             </TouchableOpacity>
                  <TouchableOpacity onPress = {() =>
                  this.props.navigation.navigate("Technique_11")
                  }>
                  <Image source = {require("../assets/image_11.jpg")}
           style={[styles.image,{width: 285,height: 270}]}                  

            >
            </Image>
            <Text>
        11. Lines, Hatching and Crosshatching
            </Text>
            <Text>
Watercolor can be used to paint lines of any size, shape and thickness. Just like with pen and ink drawings, you can place lines beside each other or layer them perpendicular to each other for a hatching or cross-hatching effect.
            </Text>
                             </TouchableOpacity>
                  <TouchableOpacity onPress = {() =>
                  this.props.navigation.navigate("Technique_12")
                  }>
                  <Image source = {require("../assets/image_12.jpg")}
           style={[styles.image,{width: 285,height: 270}]}                  

            >
            </Image>
            <Text>
        12. Scumbling
            </Text>
            <Text>
            Scumbling is a technique where irregular motions are used to make either a line or layer on paint. It’s basically like scribbling with your brush
            </Text>
                 </TouchableOpacity>
                  <TouchableOpacity onPress = {() =>
                  this.props.navigation.navigate("Technique_13")
                  }>
                  <Image source = {require("../assets/image_13.jpg")}
           style={[styles.image,{width: 285,height: 270}]}                  

            >
            </Image>
            <Text>
            13. Stippling
            </Text>
            <Text>
Instead of applying lines or areas of paint, stippling is painting tiny dots in a concentrated area. Once you’ve painted many dots, you’ll have a saturated color and fascinating texture.
         </Text>
                 </TouchableOpacity>
                  <TouchableOpacity onPress = {() =>
                  this.props.navigation.navigate("Technique_2")
                  }>
                 <Image source = {require("../assets/image_14.jpg")}
           style={[styles.image,{width: 285,height: 270}]}                  

            >
            </Image>
            <Text>
           14. Splattering
            </Text>
            <Text>
Splattering gives your painting an energetic vibe, but it’s easier said than done — this technique can easily get messy and uncontrollable. But there are three approaches to making splattering more approachable.
         </Text>
                 </TouchableOpacity>
                  <TouchableOpacity onPress = {() =>
                  this.props.navigation.navigate("Technique_15")
                  }>  
                  <Image source = {require("../assets/image_15.jpg")}
           style={[styles.image,{width: 285,height: 270}]}                  

            >
            </Image>
            <Text>
            15. Sponge Painting
            </Text>
            <Text>
A textured sponge can be a very handy tool to paint everything from foliage in trees to sand on a beach. 
         </Text>
                 </TouchableOpacity>
                  <TouchableOpacity onPress = {() =>
                  this.props.navigation.navigate("Technique_16")
                  }>
                  <Image source = {require("../assets/image_16.jpg")}
           style={[styles.image,{width: 285,height: 270}]}                  

            >
            </Image>
            <Text>
           16. Adding Texture with Salt
            </Text>
            <Text>
When salt is sprinkled on a wet wash, it starts to gather the watercolor pigments and makes the coolest texture.
         </Text>
           </TouchableOpacity>
            </View>
            </ScrollView>
          

        
      );
    
  
  
  
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "lightgreen"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(30),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 10,
    marginTop: 30
  }
});
