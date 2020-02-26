import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import CategoriesScreen from '../Screens/CategoriesScreen';
import MealsListScreen from '../Screens/MealsListScreen';
import MealsDetailsScreen from '../Screens/MealsDetailsScreen';
import FavouritesScreen from '../Screens/FavouritesScreen';
import FilterScreen from '../Screens/FilterScreen';


import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

const MealsStack= () =>{
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
              backgroundColor: Platform.OS==='android'? Colors.primaryColor:'',
            },
      headerTintColor: Platform.OS==='android'? "#fff": Colors.primaryColor,
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
      }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Meals" component={MealsListScreen} />
      <Stack.Screen name="Details" component={MealsDetailsScreen} />
    </Stack.Navigator>
  );
}



const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator  barStyle={{ backgroundColor: Colors.primaryColor }}>
      <Tab.Screen name="MealsStack" component={MealsStack}
      options={{
          tabBarLabel: 'Meals',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-restaurant" color={"#fff"} size={25} />
          ),
        }} />
      <Tab.Screen name="Favourites"
      component={FavouritesScreen}
      options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-star" color={"#fff"} size={25} />
          ),
        }}
       />
    </Tab.Navigator>
  );
}

export default MyTabs;
