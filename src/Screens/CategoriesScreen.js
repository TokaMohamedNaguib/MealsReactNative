import React,{useEffect,useLayoutEffect} from 'react' ;
import {Text,View,StyleSheet,Button,FlatList,TouchableOpacity,Platform} from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import Colors from '../constants/Colors'
import CategoryItemGrid from '../components/CategoryItemGrid'
import Icon from 'react-native-vector-icons/Ionicons';


const CategoriesScreen = (props) => {

  useLayoutEffect(() => {

     props.navigation.setOptions({

         headerTitle: "Meals Categories",
           headerLeft: () => (
               <Icon name="ios-menu" size={25} color="#fff" style={{marginLeft:10}} onPress={()=>{ props.navigation.toggleDrawer()}}/>)





     })
   }, [props.navigation]);

// useEffect(()=>{
//
//   props.navigation.setOptions({
//
//     headerTitle: "Meals Categories",
//     headerLeft: () => (
//         <Icon name="ios-menu" size={25} color="#fff" style={{marginLeft:10}} />)
//
//
//
//      });
// },[])
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
