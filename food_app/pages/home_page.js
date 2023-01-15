import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Tag from "../components/Tag";

const Home_page = () => {
  return (
    <ScrollView>
      <Header title="Hungry?" />
      <SearchBar />
      <View style={styles.tags}> 
        <Tag name="Vegan"/>
        <Tag name="Under 20"/>
        <Tag name="Asian"/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  text: {
    fontSize: 50,
    fontFamily: "Comfortaa-Bold",
  },
  tags: {
    flexDirection: "row",
  },
});

export default Home_page;
