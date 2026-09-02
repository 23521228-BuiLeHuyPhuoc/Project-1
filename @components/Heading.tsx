import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { DemoContext } from '@/contexts/DemoContext'
export default function Heading() {
    const context=useContext(DemoContext);
    console.log(context);
  return (
    <View>
      <Text>{context.message}</Text>
    </View>
  )
}