import React from 'react'
import { Text, View, Image, StyleSheet, TextInput, SafeAreaView } from 'react-native'

const SearchBar = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.searchBar}>
          <Image 
            source={require("../assets/icons/search.png")}
            style={styles.searchIcon}
          />
          <TextInput 
            placeholder='Search for a recipe'
            style={styles.searchText} 
          />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    searchBar: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 1.5,
      borderRadius: 50,
      height: 45,
      margin: '5%',
    },
    searchIcon: {
      margin: '5%',
    },
    searchText: {
      flex: 2,
      alignItems: 'flex-start',
    }
  }
)

export default SearchBar