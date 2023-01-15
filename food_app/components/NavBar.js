import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const NavBar = () => {
  return (
    <View style={styles.navBar}>
        <Image style={styles.icons} source={require("../assets/icons/Explore.png")}/>
        <Image style={styles.icons} source={require("../assets/icons/Add.png")}/> 
        <Image style={styles.icons} source={require("../assets/icons/Profile.png")}/>
    </View>
  );
}

const styles = StyleSheet.create({
    navBar: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "black",
      borderWidth: 1, 
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    icons: {
        width: 36,
        height: 35,
        marginTop: 5,
        marginBottom: 5,
    },
  });

export default NavBar