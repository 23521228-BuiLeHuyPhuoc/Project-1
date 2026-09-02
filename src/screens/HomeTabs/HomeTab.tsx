import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import {
    createBottomTabNavigator,
    createBottomTabScreen,
} from '@react-navigation/bottom-tabs';
import Feed from './Feed';
import FlatlistScreen from '../flatlist';
const Tab = createBottomTabNavigator();
export default function HomeTab() {
    const [currentTab,setCurrentTab]=useState("feed");
    console.log(currentTab);
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor:"red" }}>
            <Tab.Screen name="Feed"
             component={Feed} options={{
                title: "Tin mới",
                tabBarIcon: ({color})=>{
                    return (
                        <Ionicons name="albums-sharp"  size={24} color= {color} />
                        )
                }
            }}
            listeners={{
                        tabPress:()=>{
                            setCurrentTab("feed")
                        }
            }}
            />
            <Tab.Screen name="flatlist" component={FlatlistScreen}
                options={{ title: "Danh sách sản phẩm" ,
                    tabBarIcon:({color})=>{
                        return(<Ionicons name="aperture" size={24} color={color} 
                            
                        />) 
                    },
                    tabBarBadge:3,
                    
                }}
            />
        </Tab.Navigator>

    )
}