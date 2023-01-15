import React from "react";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, SafeAreaView, Text } from "react-native";

const Header = ({ title }) => {
  const [fontsLoaded] = useFonts({
    "Comfortaa-Bold": require("../assets/fonts/Comfortaa-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.text}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "red",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: 20,
  },
  text: {
    fontSize: 50,
    fontFamily: "Comfortaa-Bold",
  },
});

export default Header;
