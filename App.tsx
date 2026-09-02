import 'react-native-gesture-handler';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from './src/screens/index';
import FlatlistScreen from './src/screens/flatlist';
import HttpRequestScreen from './src/screens/http-request';
import CounterScreen from './src/screens/counter';
import DemoScreen from './src/screens/demo';
import FormScreen from './src/screens/form';
import ProductScreen from './src/screens/ProductScreen';
import PressScreen from './src/screens/press';
import ScrollViewScreen from './src/screens/scrollview';
import SectionListScreen from './src/screens/sectionlist';
import TodoScreen from './src/screens/todo';
import HomeTab from '@/screens/HomeTabs/HomeTab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="index"
              component={HomeScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="flatlist"
              component={FlatlistScreen}
              options={({ navigation }) => ({
                headerShown: true,
                headerTitleAlign: "center",
                headerTitleStyle: {
                  color: "green",
                },
                headerBackTitle: "Back",
                headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('http-request')}>
                    <Text style={{ marginRight: 10 }}>HELLO</Text>
                  </TouchableOpacity>
                ),
                headerLeft: () => (
                  <Text>Left</Text>
                )
              })}
            />
            <Stack.Screen name="http-request" component={HttpRequestScreen} options={{ headerShown: true }} />
            <Stack.Screen name="counter" component={CounterScreen} options={{ headerShown: true }} />
            <Stack.Screen name="demo" component={DemoScreen} options={{ headerShown: true }} />
            <Stack.Screen name="form" component={FormScreen} options={{ headerShown: true }} />
            <Stack.Screen name="press" component={PressScreen} options={{ headerShown: true }} />
            <Stack.Screen name="scrollview" component={ScrollViewScreen} options={{ headerShown: true }} />
            <Stack.Screen name="sectionlist" component={SectionListScreen} options={{ headerShown: true }} />
            <Stack.Screen name="todo" component={TodoScreen} options={{ headerShown: true }} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: true }} />
            <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: true }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
