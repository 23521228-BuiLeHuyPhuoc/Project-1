import { View, Text } from 'react-native'
import HomeTab from './HomeTab';
import Feed from './Feed';
import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
export default function CustomDraw(props: any) {
    const navigation = useNavigation<any>();
    const handleLogout = ()=>{
        navigation.navigate("Feed")
    }
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {/* <View>
                
                <Text><Ionicons name="log-out" size={24} color="black" />Logout</Text>
            </View> */}
            <DrawerItem label={"Logout"} onPress={()=>{

            }}
            icon={()=>{
                return <Ionicons name="log-out" size={24} color="black" />
            }}
            onPress={handleLogout}
            />
        </DrawerContentScrollView>
)
}