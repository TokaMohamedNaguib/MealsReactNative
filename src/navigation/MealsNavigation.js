import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import CategoriesScreen from '../Screens/CategoriesScreen';
import MealsListScreen from '../Screens/MealsListScreen';
import MealsDetailsScreen from '../Screens/MealsDetailsScreen';
import FavouritesScreen from '../Screens/FavouritesScreen';
import FilterScreen from '../Screens/FilterScreen';


import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/Ionicons';

const screenOption={
  headerStyle: {
          backgroundColor: Platform.OS==='android'? Colors.primaryColor:'',
        },
  headerTintColor: Platform.OS==='android'? "#fff": Colors.primaryColor,
  // headerTitleStyle: {
  //   fontWeight: 'bold',
  // },
  }

const Stack = createStackNavigator();

const MealsStack= () =>{
  return (
    <Stack.Navigator screenOptions={screenOption}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Meals" component={MealsListScreen} />
      <Stack.Screen name="Details" component={MealsDetailsScreen} />
    </Stack.Navigator>
  );
}


const FavouriteStack= () =>{
  return (
    <Stack.Navigator screenOptions={screenOption}>
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen name="Details" component={MealsDetailsScreen} />
    </Stack.Navigator>
  );
}

const FilterStack= () =>{
  return (
    <Stack.Navigator screenOptions={screenOption}>
      <Stack.Screen name="Filter" component={FilterScreen} />
    </Stack.Navigator>
  );
}



const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator  activeColor="#e91e63" barStyle={{ backgroundColor: Colors.primaryColor }}>
      <Tab.Screen name="MealsStack" component={MealsStack}
      options={{
          tabBarLabel: 'Meals',
          tabBarIcon: ({focused}) => (
            <Icon name="ios-restaurant" color={focused ?"#e91e63":"#fff"} size={25} />
          ),
        }} />
      <Tab.Screen name="Favourites"
      component={FavouriteStack}
      options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({focused}) => (
            <Icon name="ios-star" color={focused ?"#e91e63":"#fff"} size={25} />
          ),
        }}
       />
    </Tab.Navigator>
  );
}


const Drawer = createDrawerNavigator();

function MainNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Meals" component={MyTabs} />
      <Drawer.Screen name="Filter" component={FilterStack} />
    </Drawer.Navigator>
  );
}
export default MainNavigator;
