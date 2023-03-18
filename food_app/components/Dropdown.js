import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet } from "react-native";
import { useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      dropDownContainerStyle={{
        borderColor: "#b4c2c1",
        elevation: 10,
      }}
      style={styles.border}
    />
  );
};

const styles = StyleSheet.create({
  border: {
    borderColor: "#b4c2c1",
    elevation: 10,
  },
});

export default Dropdown;
