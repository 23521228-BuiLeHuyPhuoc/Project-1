import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import TodoScreen from '../todo';
import ProductScreen from '../ProductScreen';
const Drawer = createDrawerNavigator();
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Profile() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="todo" component={TodoScreen} options={{
        title: 'Tai khoan',
        drawerLabel: "HIHIHIHI",
        drawerIcon: () => {
          return <Ionicons name="home" size={24} color="black" />
        }
      }} />
      <Drawer.Screen name="ProductScreen" component={ProductScreen} options={{ title: 'Product Drawer' }} />
    </Drawer.Navigator>
  );
}