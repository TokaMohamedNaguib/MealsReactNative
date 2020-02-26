import React,{useEffect} from 'react' ;
import {Text,View,StyleSheet,Button,FlatList,TouchableOpacity,Platform} from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import Colors from '../constants/Colors'
import CategoryItemGrid from '../components/CategoryItemGrid'



const CategoriesScreen = (props) => {

useEffect(()=>{
  props.navigation.setOptions({
    headerTitle: "Meals Categories",

     });
},[])
const renderGridItems=(itemData)=>{
return(
<CategoryItemGrid title={itemData.item.title}
color={itemData.item.color}
onSelect={()=>{props.navigation.navigate("Meals",{categId:itemData.item.id})}}
/>
)
}


return(
<View style={styles.container}>
<FlatList
numColumns={2}
data={CATEGORIES}
renderItem={renderGridItems}
/>

</View>
 )

  }


const styles = StyleSheet.create({
  container:{
     flex:1,
     justifyContent:"center",
     alignContent:"center",
     
  },

});

export default CategoriesScreen;
