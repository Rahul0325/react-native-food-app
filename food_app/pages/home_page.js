import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const Home_page = () => {
  return (
    <ScrollView>
      <Header title="Hungry?" />
      <SearchBar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 50,
    fontFamily: "Comfortaa-Bold",
  },
});

export default Home_page;
