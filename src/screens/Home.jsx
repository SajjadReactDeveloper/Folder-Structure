import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const Home = () => {
  return (
    <View style = {{ marginTop: 60 }}>
      <View style = {styles.searchBarContainer}>
        <TextInput placeholder = "Search" placeholderTextColor={colors.text} style = {styles.searchBar} />
        <Image source={require('../../assets/search.png')} />
      </View>

      <View>
        <Image source={require('../../assets/Rectangle.png')} />
        <Image source={require('../../assets/Rectangle.png')} />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 50,
        marginHorizontal: 40,
        marginTop: 20,
        height: 50,
        width: '80%',
        paddingHorizontal: 20,
        alignSelf: 'center',
    }
})