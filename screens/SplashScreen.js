import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import React from 'react';
import Constants from "expo-constants";
const SplashScreen = () => {
  return (
    
    <View style={styles.container}>
   
      <Text style={styles.text}>Online Learning</Text>
      <Text style={styles.subText}>Lorem ipsum dolor sit amet, consecteur adipiscing elit</Text>
      <View style={styles.ImageContainer}>
      <Image style={styles.image} source={require("../assets/Group 25.png")}/>
      </View>
     
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    justifyContent:"flex-start",
    alignItems:"center",
    paddingLeft:10,
    backgroundColor:"#6B53FF",
    flex:1

  },
  text:{
    fontSize: 50,
    color: "#fff",
    fontWeight:"600",
    
  },
  subText:{
    fontSize: 20,
    paddingLeft:30,
    color: "#fff",
    fontStyle:"italic",
    fontWeight:"600",
  },
  ImageContainer:{
    paddingTop: 310,
   
  },
  image:{
    width: 420.21,
    heigh: 458
    
  }

});
export default SplashScreen