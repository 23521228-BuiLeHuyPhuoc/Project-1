import { View, Text } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native';

export default function Feed() {
    const isFocus=useIsFocused();
    console.log(isFocus? 'feed active':"");
    return (
        <View>
            <Text>Feed</Text>
        </View>
    )
}