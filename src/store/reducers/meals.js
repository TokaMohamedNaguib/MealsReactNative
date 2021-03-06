import * as types from "../actions/types";

import initialState from "./initialState";

export default function(state = initialState.meals, action) {
    switch (action.type) {


    case types.TOGGLE_FAVORITE:

    const existingIndex = state.favoriteMeals.findIndex(
      meal => meal.id === action.mealId
    );
    if (existingIndex >= 0) {
      const updatedFavMeals = [...state.favoriteMeals];
      updatedFavMeals.splice(existingIndex, 1);
      return { ...state, favoriteMeals: updatedFavMeals };
    } else {
      const meal = state.meals.find(meal => meal.id === action.mealId);
      return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
    }

    case types.SET_FILTERS:
      const appliedFilters = action.filters;
      console.log(appliedFilters);
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };

      default:
            return {...state};
    }
}
