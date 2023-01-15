import { StyleSheet, Text, View } from "react-native";
import Home_page from "./pages/Home_page";

export default function App() {
  return (
    <View style={styles.container}>
      <Home_page />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 20,
  },
});
