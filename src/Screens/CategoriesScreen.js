import React,{useEffect,useLayoutEffect} from 'react' ;
import {Text,View,StyleSheet,Button,FlatList,TouchableOpacity,Platform,Dimensions} from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import Colors from '../constants/Colors'
import CategoryItemGrid from '../components/CategoryItemGrid'
import Icon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window');

const CategoriesScreen = (props) => {

  useLayoutEffect(() => {

     props.navigation.setOptions({

         headerTitle: "Meals Categories",
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
