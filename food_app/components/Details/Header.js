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
  },
  backButton: {
    justifyContent: "center",
  },
  source_food: {
    uri: "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000",
  },
  foodImg: {
    height: "50%",
    width: "100%",
    borderRadius: 20,
    marginTop: 20,
    resizeMode: "cover",
  },
  outerView: {},
});

export default Header;
