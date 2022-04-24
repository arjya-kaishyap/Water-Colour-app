import React,{Component} from 'react';
import {Text,View,TextInput,StyleSheet,Image,Button} from 'react-native';
import firebase from "firebase";

export default class AddYourStyle extends Component {
  constructor(props){
    super(props)
    
    }

     async addStyle() {
    if (
      this.state.title &&
      this.state.description 
      ) {
      let styleData = {
        title: this.state.title,
        description: this.state.description,
        author: firebase.auth().currentUser.displayName,
        created_on: new Date(),
        author_uid: firebase.auth().currentUser.uid,
        likes: 0
      };
      await firebase
        .database()
        .ref(
          "/posts/" +
            Math.random()
              .toString(36)
              .slice(2)
        )
        .set(styleData)
        .then(function(snapshot) {});
      this.props.setUpdateToTrue();
      this.props.navigation.navigate("Styles");
    } else {
      alert(
        "Error",
        "All fields are required!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  }

  render(){ 
    return(
      <View style={styles.container}>
          <Image
                source = {require("../assets/logo_Trans.png")}
                style={[styles.iconImage,{width: 50,height: 50}]}                  

              ></Image>
      <Text style = {{marginLeft: 100, fontWeight: "bold", fontSize: 30}}>
      Add Your Style 
      </Text>
      <View style={styles.titleContainer}>
      <TextInput 
      placeholder = {"Title"}
      onChangeText = {title =>this.setState({title})}
      style = {styles.inputFont}
       />
       </View>
       <View style={styles.descriptionContainer}>
       <TextInput 
       placeholder = {"Description"}
       onChangeText = {description =>this.setState({description})}
       multiline = {true}
       numberOfLines = {10}
       style = {styles.inputFont}
        />
        </View>
        <View style={styles.submitButton}>
                <Button
                  onPress={() => this.addStyle()}
                  title="Submit"
                  color="#841584"
                />
              </View>
      </View>
    )
  
  
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen"
  },
titleContainer:{
  borderWidth:2,
  borderRadius:20
},
inputFont: {
borderColor: "black",
borderRadius: 10,
color: "black",

},
descriptionContainer:{
  marginTop:20,
   borderWidth:2,
  borderRadius:20
  
},
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
})