import React,{useEffect} from 'react' ;
import {Text,View,StyleSheet,Dimensions,Platform} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {  useSelector } from 'react-redux'
import MealList from '../components/MealList'
const {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
const FavouritesScreen= props => {
const favouriteMeals= useSelector(state=> state.meals.favoriteMeals);


  useEffect(()=>{


    props.navigation.setOptions({
      headerTitle: "Favourites",
      headerLeft: () => (
            <Icon
            name="ios-menu"
            size={25}
            color={Platform.OS==='android'?"#fff":''}
            style={{marginLeft:(3*width)/100}}
            onPress={()=>{ props.navigation.toggleDrawer()}}/>),

      headerTitleStyle:{
             fontFamily:"OpenSans-Bold",
             width:(60*width)/100,

           }



       });


  },[]);




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
