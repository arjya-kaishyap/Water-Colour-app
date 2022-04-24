import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import AppLoading from 'expo-app-loading';

import firebase from 'firebase';

export default class StoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.route.params.userstyle.likes,
      is_liked: false,
    };
  }
   

  likeAction = () => {
    if (this.state.is_liked) {
      firebase
        .database()
        .ref('posts')
        .child(this.props.route.params.style_id)
        .child('likes')
        .set(firebase.database.ServerValue.increment(-1));
      this.setState({ likes: this.state.likes - 1, is_liked: false });
    } else {
      firebase
        .database()
        .ref('posts')
        .child(this.props.route.params.style_id)
        .child('likes')
        .set(firebase.database.ServerValue.increment(1));
      this.setState({ likes: this.state.likes + 1, is_liked: true });
    }
  };

  render() {
    if (!this.props.route.params) {
      this.props.navigation.navigate('Styles');
    }  else {
      
      return (
        <View
          style={
           styles.container
          }>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.iconImage}></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text
                style={
                  styles.appTitleText
                }>
                WaterColor App
              </Text>
            </View>
          </View>
          <View style={styles.styleContainer}>
            <ScrollView
              style={
                styles.styleCard
              }>
              
              <View style={styles.dataContainer}>
                <View style={styles.titleTextContainer}>
                  <Text
                    style={
                     styles.styleTitleText
                    }>
                    {this.props.route.params.userstyle.title}
                  </Text>
                  <Text
                    style={
                      styles.styleAuthorText
                    }>
                    {this.props.route.params.userstyle.author}
                  </Text>
                  <Text
                    style={
                       styles.styleAuthorText
                    }>
                    {this.props.route.params.userstyle.created_on}
                  </Text>
                </View>
                <View style={styles.iconContainer}>
                  
                </View>
              </View>
              <View style={styles.storyTextContainer}>
                <Text
                  style={
                    styles.styleText
                  }>
                  {this.props.route.params.userstyle.description}
                </Text>
                
              </View>
              <View style={styles.actionContainer}>
                <TouchableOpacity
                  style={
                    this.state.is_liked
                      ? styles.likeButtonLiked
                      : styles.likeButtonDisliked
                  }
                  onPress={() => this.likeAction()}>
                  <Ionicons
                    name={'heart'}
                    size={RFValue(30)}
                    color={this.state.light_theme ? 'black' : 'white'}
                  />

                  <Text
                    style={
                      this.state.light_theme
                        ? styles.likeTextLight
                        : styles.likeText
                    }>
                    {this.state.likes}
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
   droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
 
  styleContainer: {
    flex: 1,
  },
  styleCard: {
    margin: RFValue(20),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
  },
 
  image: {
    width: '100%',
    alignSelf: 'center',
    height: RFValue(200),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    resizeMode: 'contain',
  },
  dataContainer: {
    flexDirection: 'row',
    padding: RFValue(20),
  },
  titleTextContainer: {
    flex: 0.8,
  },
  styleTitleText: {
    
    fontSize: RFValue(25),
    color: 'white',
  },
 
  styleAuthorText: {
    
    fontSize: RFValue(18),
    color: 'white',
  },
 
  iconContainer: {
    flex: 0.2,
  },
  storyTextContainer: {
    padding: RFValue(20),
  },
  styleText: {
    fontSize: RFValue(15),
    color: 'white',
  },
  
 
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: RFValue(10),
  },
  likeButtonLiked: {
    flexDirection: 'row',
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  likeButtonDisliked: {
    flexDirection: 'row',
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#eb3948',
    borderRadius: RFValue(30),
    borderWidth: 2,
  },
  likeText: {
    color: 'white',
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
  likeTextLight: {
    fontFamily: 'Bubblegum-Sans',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
