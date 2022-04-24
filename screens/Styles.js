import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import StyleCard from "./StyleCard";

import AppLoading from "expo-app-loading";
import { FlatList } from "react-native-gesture-handler";
import firebase from "firebase";


//let userstyles = require("./temp_userstyles.json");

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userstyles: []
    };
  }

  

  componentDidMount() {
    this.fetchStyles();
  
  }

  fetchStyles = () => {
    firebase
      .database()
      .ref("/posts/")
      .on(
        "value",
        snapshot => {
          let userstyles = [];
          if (snapshot.val()) {
            Object.keys(snapshot.val()).forEach(function (key) {
              userstyles.push({
                key: key,
                value: snapshot.val()[key]
              });
            });
          }
          this.setState({ userstyles: userstyles });
          this.props.setUpdateToFalse();
        },
        function (errorObject) {
           console.log("The read failed: " + errorObject.code);
        }
      );
  };

  

  renderItem = ({ item: userstyle }) => {
    // console.log('feed screen', story)
    return <StyleCard userstyle={userstyle} navigation={this.props.navigation} />;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    
      return (
        <View
          style={
            styles.container
          }
        >
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo_Trans.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text
                style={
                   styles.appTitleText
                }
              >
                Water Color App
              </Text>
            </View>
          </View>
          {!this.state.userstyles[0] ? (
            <View style={styles.nouserStyles}>
              <Text
                style={
                   styles.nouserStylesText
                }
              >
                No Styles Available
              </Text>
            </View>
          ) : (
            <View style={styles.cardContainer}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.userstyles}
                renderItem={this.renderItem}
              />
            </View>
          )}
          <View style={{ flex: 0.08 }} />
        </View>
      );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green"
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
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  
  cardContainer: {
    flex: 0.85
  },
  nouserStyles: {
    flex: 0.85,
    justifyContent: "center",
    alignItems: "center"
  },
  
  nouserStylesText: {
    color: "white",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans"
  }
});