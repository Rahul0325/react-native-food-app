import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./components/SearchBar";
import Home_page from "./pages/Home_page";

export default function App() {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
