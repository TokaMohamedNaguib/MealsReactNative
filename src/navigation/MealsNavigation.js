import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../Screens/CategoriesScreen';
import MealsListScreen from '../Screens/MealsListScreen';
import MealsDetailsScreen from '../Screens/MealsDetailsScreen';
import FavouritesScreen from '../Screens/FavouritesScreen';
import FilterScreen from '../Screens/FilterScreen';




const Stack = createStackNavigator();

const MealsStack= () =>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Meals" component={MealsListScreen} />
      <Stack.Screen name="Details" component={MealsDetailsScreen} />
    </Stack.Navigator>
  );
}

export default MealsStack;
