import React ,{useEffect} from 'react' ;
import {Text,View,StyleSheet,Button} from 'react-native';
import {MEALS,CATEGORIES} from '../data/dummy-data'


import Icon from 'react-native-vector-icons/Ionicons';

const MealsDetailsScreen= props => {

  useEffect(()=>{

    let mealId = props.route.params.mealId;
    let meal=MEALS.find((item)=>mealId===item.id);


    props.navigation.setOptions({
      headerTitle: meal.title,
      headerRight: () => (
          <Icon name="ios-star" size={25} color="#fff" style={{marginLeft:10}} />)

        });


  },[]);

return (
<View>
<Text>CategoriesScreen</Text>
</View>
)

}
export default MealsDetailsScreen;

const styles = StyleSheet.create({
container:{
  flex:1,
}

});
