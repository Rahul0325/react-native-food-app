import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.detailsHeader}>
        <View style={styles.backButton}><Image source={require("../../assets/icons/Back.png")}/></View>
        <View><Text style={styles.headerText}>{props.name}</Text></View>
    </View>
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
})

export default Header