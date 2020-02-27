import React ,{useEffect} from 'react' ;
import {Text,View,StyleSheet,Button,ScrollView,Image} from 'react-native';
import {MEALS,CATEGORIES} from '../data/dummy-data';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import {  useSelector, useDispatch } from 'react-redux'
import * as  mealsActions from "reduxfiles/actions/meals";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};


const MealsDetailsScreen= props => {
const dispatch=useDispatch();
const mealId = props.route.params.mealId;
const selectedMeal = MEALS.find(meal => meal.id === mealId);
const currentMealIsFavourite= useSelector(state=> state.meals.favoriteMeals.some(meal => meal.id===mealId))
  useEffect(()=>{

    let mealId = props.route.params.mealId;
    let meal=MEALS.find((item)=>mealId===item.id);
console.log("heelo");
console.log(currentMealIsFavourite);
    props.navigation.setOptions({
      headerTitle: meal.title,
      headerRight: () => (
          <Icon name="ios-star"
          size={25} color={currentMealIsFavourite?Colors.accentColor:"#fff"}
          style={{marginLeft:10}}
          onPress={()=>{dispatch(mealsActions.toggleFavoriteAction(mealId))  }}

           />)

        });


  },[currentMealIsFavourite]);



   return (
     <ScrollView>
       <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
       <View style={styles.details}>
         <Text>{selectedMeal.duration}m</Text>
         <Text>{selectedMeal.complexity.toUpperCase()}</Text>
         <Text>{selectedMeal.affordability.toUpperCase()}</Text>
       </View>
       <Text style={styles.title}>Ingredients</Text>
       {selectedMeal.ingredients.map(ingredient => (
         <ListItem key={ingredient}>{ingredient}</ListItem>
       ))}
       <Text style={styles.title}>Steps</Text>
       {selectedMeal.steps.map(step => (
         <ListItem key={step}>{step}</ListItem>
       ))}
     </ScrollView>
   );


}
export default MealsDetailsScreen;

const styles = StyleSheet.create({
  image: {
      width: '100%',
      height: "25%"
    },
    details: {
      flexDirection: 'row',
      padding: 15,
      justifyContent: 'space-around'
    },
    title: {
      fontFamily: 'open-sans-bold',
      fontSize: 22,
      textAlign: 'center'
    },
    listItem: {
      marginVertical: "3%",
      marginHorizontal: "5%",
      borderColor: '#ccc',
      borderWidth: 1,
      padding: "2%",

    }

});
