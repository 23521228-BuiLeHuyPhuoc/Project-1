import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'

export default function Counter() {
    const [count,setCount]=React.useState(0);
    const myRef=React.useRef(0);
    const handleIncrement=()=>{
        setCount(count+1);
    }
    useEffect(()=>{
        console.log("Component mounted");
        myRef.current=count;
        return ()=>{
            console.log("Component unmounted");
        }
})
console.log(myRef.current);
  return (
    <View>
      <Text>counter:{count}</Text>
      <Button title="Increment" onPress={handleIncrement}/>
    </View>
  )
}