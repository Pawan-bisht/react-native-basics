import { purple } from "color-name";
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ComponentScreen from "./ComponentScreen";

const HomeScreen = () => {
  const greeting = <Text style={styles.subHeadingTextSize}>My name is Pawan Bisht </Text>;
  return <View style={styles.viewStyle}><Text style={styles.textSize}>Getting started with React-Native</Text>{greeting}</View>;
};

const styles = StyleSheet.create({
  textSize: {
    fontSize: 40,
    backgroundColor:"#eff4f2"
  },
  subHeadingTextSize: {
     fontSize:20
  },
  viewStyle:{
    borderRadius:4,
    borderWidth: 5,
    borderColor:"#9b59b6",
    padding:10,
    width:"50%"
  }
});

export default HomeScreen;