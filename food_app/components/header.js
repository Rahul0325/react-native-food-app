import React from "react";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, SafeAreaView, Text } from "react-native";

// Docs for importing font in expo: https://docs.expo.dev/guides/using-custom-fonts/
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
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginTop: "5%",
  },
  text: {
    fontSize: 50,
    fontFamily: "Comfortaa-Bold",
  },
});

export default Header;
