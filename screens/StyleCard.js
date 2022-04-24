import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import firebase from "firebase";


export default class StyleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style_id: this.props.userstyle.key,
      style_data: this.props.userstyle.value,
      is_liked: false,
      likes: this.props.userstyle.value.likes
    };
  }

  likeAction = () => {
    // console.log("this.state.story_id",this.state.story_id)
    if (this.state.is_liked) {
      firebase
        .database()
        .ref("posts")
        .child(this.state.style_id)
        .child("likes")
        .set(firebase.database.ServerValue.increment(-1));
      this.setState({ likes: (this.state.likes - 1), is_liked: false });
    } else {
      firebase
        .database()
        .ref("posts")
        .child(this.state.style_id)
        .child("likes")
        .set(firebase.database.ServerValue.increment(1));
      this.setState({ likes: (this.state.likes + 1), is_liked: true });
    }
  };

  
  render() {
    let userstyle = this.state.style_data;
       
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("UserStyle", {
              userstyle: userstyle,
              style_id:this.state.style_id
            })
          }
        >
          <SafeAreaView style={styles.droidSafeArea} />
          <View
            style={
             styles.cardContainer
}
          >
            
            <View style={styles.titleContainer}>
              <View style={styles.titleTextContainer}>
                <Text
                  style={
                    styles.userstyleTitleText
                  }
                >
                  {userstyle.title}
                </Text>
                <Text
                  style={
                    styles.userstyleAuthorText
                  }
                >
                  {userstyle.author}
                </Text>
                <Text
                  style={
                    styles.descriptionText
                  }
                >
                  {this.props.userstyle.description}
                </Text>
              </View>
            </View>

            <View style={styles.actionContainer}>
              <TouchableOpacity
                style={
                  this.state.is_liked
                    ? styles.likeButtonLiked
                    : styles.likeButtonDisliked
                }
                onPress={() => this.likeAction()}
              >
                <Ionicons
                  name={"heart"}
                  size={RFValue(30)}
                  color={ "white"}
                />

                <Text
                  style={
                   styles.likeText
                  }
                >
                  {this.state.likes}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      );
    
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "lightgreen",
    borderRadius: RFValue(20)
  },
  
  
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  titleTextContainer: {
    flex: 0.8
  },
  iconContainer: {
    flex: 0.2
  },
  userstyleTitleText: {
    fontSize: RFValue(25),
    color: "white"
  },
  
  userstyleAuthorText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(18),
    color: "white"
  },
  
  descriptionContainer: {
    marginTop: RFValue(5)
  },
  descriptionText: {
    
    fontSize: RFValue(13),
    color: "white"
  },
 
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButtonLiked: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeButtonDisliked: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#eb3948",
    borderWidth: 2,
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontSize: 25,
    marginLeft: 25,
    marginTop: 6
  },
 
});
