import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { useFonts, Comfortaa_600SemiBold } from "@expo-google-fonts/comfortaa";

const Header = (props) => {
  let [fontsLoaded] = useFonts({
    Comfortaa_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.outerView}>
      <View style={styles.detailsHeader}>
        <View style={styles.backButton}>
          <Image source={require("../../assets/icons/Back.png")} />
        </View>

        <Text style={styles.headerText}>{props.name}</Text>
        <View style={styles.backButton}>
          <Image source={require("../../assets/icons/back_white.png")} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 40,
    textAlign: "right",
    fontFamily: "Comfortaa_600SemiBold",
    justifyContent: "center",
  },
  backButton: {
    justifyContent: "center",
    marginRight: 10,
    marginTop: 5,
  },
  source_food: {
    uri: "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000",
  },
  outerView: {},
});

export default Header;
