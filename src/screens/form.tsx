import { View, Text, TextInput,Button} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Form() {
    const handleChangeText=(e)=>{
        console.log(e.nativeEvent);
    }
    const handlePressButton=()=>{
        console.log("Vừa click")
    }
  return (
    <View>
      <Text>form</Text>
      <View> 
        <Text>Name</Text>
      <TextInput placeholder="Enter your name"/>    
    </View>
    <View>
        <Text>Password</Text>
        <TextInput placeholder="Enter your password" 
        secureTextEntry
        onChange={handleChangeText}
        multiline
        readOnly
        />
    </View>
    <View style={styles.button}>
    <Button title="Login" onPress={handlePressButton} />
    </View>
    </View>
  )
  
}const styles = StyleSheet.create({
    button:{
        width:"100%"
    }
  })