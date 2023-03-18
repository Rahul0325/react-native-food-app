import { SafeAreaView, Text, TextInput, StyleSheet } from "react-native";

const TextForm = (props) => {
  return (
    <SafeAreaView style={styles.border}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        style={styles.input}
        multiline={props.isMultiLine}
        placeholder={props.placeholder}
      ></TextInput>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "#b4c2c1",
    textAlignVertical: "center",
    maxHeight: 150,
    minHeight: 30,
    elevation: 10,
  },
  border: {
    margin: 10,
  },
});

export default TextForm;
