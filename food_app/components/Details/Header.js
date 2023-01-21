import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const Header = (props) => {
  return (
    <>
        <View style={styles.detailsHeader}>
            <View style={styles.backButton}><Image source={require("../../assets/icons/Back.png")}/></View>
            <View><Text style={styles.headerText}>{props.name}</Text></View>
        </View>
        <View><Image source={styles.source_food} style={styles.foodImg}/></View>
    </>
  )
}

const styles = StyleSheet.create({
    detailsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 40,
        textAlign: 'right',
    },
    backButton: {
        justifyContent: 'center',
    },
    source_food: {
        uri: "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000",
    },
    foodImg: {
        backgroundColor: "red",
        height: "65%",
        width: "100%",
        borderRadius: 20,
        marginTop: 20,
        resizeMode: "cover",
    }
})

export default Header