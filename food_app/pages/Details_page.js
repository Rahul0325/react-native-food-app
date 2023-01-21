import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Details/Header";

const Details_page = () => {
  return (
    <View style={styles.header}>
      <Header name="Dumplings And Soup Loved By US :)"/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 15,
  }
})

export default Details_page;
