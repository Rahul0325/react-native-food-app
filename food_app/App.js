import { StyleSheet, Text, View } from "react-native";
import Home_page from "./pages/Home_page";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Home_page />
      </View>
      <NavBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginStart: 20,
    marginEnd: 20,
    marginTop: 20,
    flex: 9,
  },
});
