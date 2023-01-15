import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";

const Home_page = () => {
  return (
    <ScrollView>
      <View styles={styles.container}>
        <Header title="Hungry?" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    // width: 100,
    // height: 100,
    // alignSelf: "stretch",
    // margin: 100,
  },
  text: {
    fontSize: 50,
    fontFamily: "Comfortaa-Bold",
  },
});

export default Home_page;
