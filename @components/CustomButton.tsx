import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
type Props={
    children:React.ReactNode
    colorr?: string
    size?: number
    onPress?:()=>void
}
export default function CustomButton({children,colorr,size,onPress}:Props) {
  return (
    <View>
        <TouchableOpacity onPress={onPress}>
      <Text style={{ color: colorr, fontSize: size }}>{children}</Text>
      </TouchableOpacity>
    </View>
  )
}