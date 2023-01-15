import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home_page from "./pages/Home_page";

export default function App() {
  return (
    <View>
      <Home_page />
      <Text>app.js</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
