import React, {useEffect} from 'react' ;
import {Text,View,StyleSheet,Platform,FlatList} from 'react-native';
import Colors from '../constants/Colors'
import MealsItem from '../components/MealsItem'



const MealList = (props) => {



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
data={props.mealsList}
renderItem={renderMealsItems}
/>

</View>
)

}


const styles = StyleSheet.create({
container:{
  flex:1,
}

});

export default MealList;
