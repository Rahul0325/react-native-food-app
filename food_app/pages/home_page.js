import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Divider from "../components/Divider";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

const Home_page = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header title="Hungry?" />
      <SearchBar />
      <Divider />
      <Card />
      <Card />
      <Card />
      <Card />
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
