import * as types from "./types";
import {
  Dimensions,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';

export const toggleFavoriteAction=(id)=>{
 return async (dispatch,getState) => {

 dispatch(toggleFavorite(id))
 }

}

const toggleFavorite = (id) => {

    return { type: types.TOGGLE_FAVORITE, mealId: id };
};
