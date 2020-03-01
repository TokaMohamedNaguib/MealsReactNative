import React, {useLayoutEffect} from 'react' ;
import {Text,View,StyleSheet,Platform,FlatList,Dimensions} from 'react-native';
import { useSelector } from 'react-redux';
import {CATEGORIES} from '../data/dummy-data'
import Colors from '../constants/Colors'
const {height, width} = Dimensions.get('window');
import MealList from '../components/MealList'



const MealsListScreen = (props) => {
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  let categId = props.route.params.categId;
  let mealsList=availableMeals.filter((meal)=> {
       return(meal.categoryIds.indexOf(categId)>=0)});


  useLayoutEffect(()=>{


    let categ=CATEGORIES.filter((item)=>categId===item.id);


    props.navigation.setOptions({
      headerTitle: categ[0].title,
      headerTitleStyle:{
        fontFamily:"OpenSans-Bold",
        width:(60*width)/100,

      }

       });


  },[  props.navigation,categId]);





return (
<View style={styles.container}>

<MealList
mealsList={mealsList}
navigation={props.navigation}
/>

</View>
)

}
MealsListScreen.setOptions={headerTitle: "Meals Categories"};

const styles = StyleSheet.create({
container:{
  flex:1,
}

});

export default MealsListScreen;
