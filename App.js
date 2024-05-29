import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HelloScreen from './screens/HelloScreen';
import SaveScreen from "./screens/SaveScreen";
import { NavigationContainer } from '@react-navigation/native';
import ListScreen from './screens/ListScreen';
import { Feather } from '@expo/vector-icons';

import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor:"purple"
    }}>
      <Tab.Screen 
          name="Home" 
          component={HelloScreen} 
          options={{headerShown:false, tabBarIcon: () => <Feather name="book" size={24} color="#6B53FF" />}}/>
      <Tab.Screen 
          name="Saved Items" 
          component={SaveScreen} 
          options={{headerShown:false, tabBarIcon:() => <Feather name="bookmark" size={24} color="#6B53FF" />}}/>
      <Tab.Screen 
          name="List" 
          component={ListScreen} 
          options={{headerShown:false, tabBarIcon:() => <FontAwesome name="list" size={24} color="#6B53FF" />}}/>
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App