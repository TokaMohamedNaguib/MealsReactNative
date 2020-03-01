import * as types from "./types";
import {
  Dimensions,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';



 export const toggleFavorite = (id) => {

    return { type: types.TOGGLE_FAVORITE, mealId: id };
};


export const setFilters = filterSettings => {
    return { type: types.SET_FILTERS, filters: filterSettings };
};
