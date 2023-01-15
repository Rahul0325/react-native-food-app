import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import Tag from "../components/Tag";

const Card = () => {
  const [fontsLoaded] = useFonts({
    "Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={styles.source_food} />
      <View style={styles.container_text}>
        <Text style={styles.text}>Fried rice</Text>
        <Image
          style={styles.heart}
          source={require("../assets/heart_unchecked.png")}
        />
      </View>
      <View style={styles.tags}>
        <Tag name="Vegan" />
        <Tag name="Under 20" />
        <Tag name="Asian" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // backgroundColor: "red",
  },
  container_text: {
    flexDirection: "row",
    marginStart: 10,
    marginEnd: 10,
    justifyContent: "space-between",
  },
  image: {
    height: 200,
    resizeMode: "cover",
    borderRadius: 20,
  },
  text: {
    fontFamily: "Comfortaa-Regular",
    fontSize: 30,
  },
  heart: {
    resizeMode: "contain",
    height: 30,
    width: 30,
    alignSelf: "center",
  },
  source_food: {
    uri: "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000",
  },
  tags: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Card;
