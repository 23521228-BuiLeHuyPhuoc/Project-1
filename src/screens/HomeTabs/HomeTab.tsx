import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Profile from './Profile';
import {
    createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import Feed from './Feed';
import FlatlistScreen from '../flatlist';
const Tab = createMaterialTopTabNavigator();
export default function HomeTab() {
    const [currentTab, setCurrentTab] = useState("feed");
    console.log(currentTab);
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "red", tabBarInactiveTintColor:"black" }}>
            <Tab.Screen name="Feed"
                component={Feed} options={{
                    title: "Tin mới",
                    tabBarIcon: ({ color }) => {
                        return (
                            <Ionicons name="albums-sharp" size={24} color={color} />
                        )
                    }
                }}
                listeners={{
                    tabPress: () => {
                        setCurrentTab("feed")
                    }
                }}
            />
            <Tab.Screen name="flatlist" component={FlatlistScreen}
                options={{
                    title: "Danh sách sản phẩm",
                    tabBarIcon: ({ color }) => {
                        return (<Ionicons name="aperture" size={24} color={color}

                        />)
                    }

                }}
            />
            <Tab.Screen name="Profile" component={Profile} 
            options={{
                tabBarIcon:({color})=> {
                    return(
                        <Ionicons name="person" size={24} color={color} />
                    )
                }
            }}
            />
        </Tab.Navigator>

    )
}