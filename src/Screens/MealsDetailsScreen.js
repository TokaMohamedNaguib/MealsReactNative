import React ,{useLayoutEffect} from 'react' ;
import {Text,View,StyleSheet,Button,ScrollView,Image,Dimensions,Platform} from 'react-native';
import {  useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
const {height, width} = Dimensions.get('window');

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
const availableMeals = useSelector(state => state.meals.meals);
const mealId = props.route.params.mealId;
const selectedMeal = availableMeals.find(meal => meal.id === mealId);
const currentMealIsFavourite= useSelector(state=> state.meals.favoriteMeals.some(meal => meal.id===mealId))


useLayoutEffect(()=>{
props.navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: () => (
          <Icon name="ios-star"
          size={25}
          color={Platform.OS === 'android' ? currentMealIsFavourite?Colors.accentColor:"#fff" :  currentMealIsFavourite?Colors.accentColor:Colors.primaryColor}
          style={{marginRight:(3*width)/100}}
          onPress={()=>{dispatch(mealsActions.toggleFavorite(mealId))  }}

           />),
           headerTitleStyle:{
             fontFamily:"OpenSans-Bold",
             width:(60*width)/100,

           }

        });


  },[currentMealIsFavourite,selectedMeal,props.navigation]);



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
