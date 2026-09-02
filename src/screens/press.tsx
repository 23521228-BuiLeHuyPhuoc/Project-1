import { View, Text, TouchableOpacity,TouchableHighlight,StyleSheet } from 'react-native'
import React from 'react'


export default function Press() {
    const handlePress=()=>{
        console.log("Vừa click");
    }
  return (
    <View>
      <Text>press</Text>
      <TouchableHighlight style={styles.button} 
      onPressIn={()=>console.log("Vừa nhấn")}
      onPressOut={()=>console.log("Vừa thả")}
      onPress={handlePress}
      underlayColor={"blue"}
      >
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});