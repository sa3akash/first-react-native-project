import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <View>
        <Text>Welcome to the Home Page!</Text>
        <Text>Explore the features of our app.</Text>

        <Text>Get started by navigating through the menu.</Text>
        
        
      </View>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})