import React,{useEffect} from 'react' ;
import {Text,View,StyleSheet} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {  useSelector } from 'react-redux'
import MealList from '../components/MealList'

const FavouritesScreen= props => {
const favouriteMeals= useSelector(state=> state.meals.favoriteMeals);


  useEffect(()=>{


    props.navigation.setOptions({
      headerTitle: "Favourites",

       });


  },[]);

    ;


return (
<View style={styles.container}>

<MealList
mealsList={favouriteMeals}
navigation={props.navigation}
/>

</View>
)

}



export default FavouritesScreen;


const styles = StyleSheet.create({
container:{
  flex:1,
}

});
