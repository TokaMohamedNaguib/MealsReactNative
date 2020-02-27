import React, {useEffect} from 'react' ;
import {Text,View,StyleSheet,Platform,FlatList} from 'react-native';
import {MEALS,CATEGORIES} from '../data/dummy-data'
import Colors from '../constants/Colors'
import MealList from '../components/MealList'



const MealsListScreen = (props) => {

  useEffect(()=>{

    let categId = props.route.params.categId;
    let categ=CATEGORIES.filter((item)=>categId===item.id);


    props.navigation.setOptions({
      headerTitle: categ[0].title,

       });


  },[]);

      let categId = props.route.params.categId;
      let mealsList=MEALS.filter((meal)=> {
           return(meal.categoryIds.indexOf(categId)>=0)});
           console.log(mealsList);


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
