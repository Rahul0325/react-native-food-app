import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Tag = (props) => {
  return (
    <View style={styles.tagBox}>
      <LinearGradient colors={["#1FA4FD", "#11FEBE"]} style={styles.tagGradient} start={{x:0, y:0}}>
        <Text style={styles.tagText}>{props.name}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  tagText: {
    color: "black",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  tagBox: {
    margin: 10,
    flex: 1,
  },
  tagGradient: {
    borderRadius: 20,
  },
});

export default Tag;
