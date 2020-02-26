import React, {useEffect} from 'react' ;
import {Text,View,StyleSheet,Platform,FlatList} from 'react-native';
import {MEALS,CATEGORIES} from '../data/dummy-data'
import Colors from '../constants/Colors'
import MealsItem from '../components/MealsItem'



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

const renderMealsItems =(dataItem)=>{
  return(  <MealsItem
     title={dataItem.item.title}
     duration={dataItem.item.duration}
     imageUrl={dataItem.item.imageUrl}
     affordability={dataItem.item.affordability}
     complexity={dataItem.item.complexity}
     onSelect={()=>{props.navigation.navigate("Details",{mealId:dataItem.item.id})}}
     />)
  }

return (
<View style={styles.container}>

<FlatList
data={mealsList}
renderItem={renderMealsItems}
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
