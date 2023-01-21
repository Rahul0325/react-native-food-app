import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useFonts, Comfortaa_400Regular } from "@expo-google-fonts/comfortaa";

const detailsTag = (props) => {
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.background}>
      <Image style={styles.icon} source={props.uri}></Image>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    margin: 10,
    maxWidth: 70,
  },
  icon: {
    resizeMode: "cover",
    marginTop: 5,
  },
  text: {
    margin: 5,
    textAlign: "center",
    fontFamily: "Comfortaa_400Regular",
  },
});

export default detailsTag;
