import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import Header from "../components/Details/Header";
import DetailsTag from "../components/Details/DetailsTag";

const Details_page = () => {
  return (
    <View style={styles.topView}>
      <View style={styles.header}>
        <Header name="Fried Rice" />
      </View>
      <ScrollView>
        <Image source={styles.source_food} style={styles.foodImg} />
        <View style={styles.tags}>
          <DetailsTag
            uri={require("../assets/icons/cuisine.png")}
            text="Asian"
          />
          <DetailsTag
            uri={require("../assets/icons/time.png")}
            text="20 mins"
          />
          <DetailsTag
            uri={require("../assets/icons/difficulty.png")}
            text="Easy"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 15,
  },
  tags: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  topView: {},
  source_food: {
    uri: "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000",
  },
  foodImg: {
    height: 300,
    borderRadius: 20,
    resizeMode: "cover",
    marginBottom: 5,
  },
});

export default Details_page;
