import React from 'react' ;
import {Text,View,StyleSheet,Dimensions,TouchableOpacity,Platform} from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import Colors from '../constants/Colors'


const {height, width} = Dimensions.get('window');


const CategoryItemGrid = (props) => {

return(

<TouchableOpacity  style={styles.gridItem} onPress={props.onSelect}>
  <View style={{...styles.container,...{backgroundColor:props.color}}}>
  <Text style={styles.mealTitle}>{props.title}</Text>
  </View>
</TouchableOpacity>


 )

  }


const styles = StyleSheet.create({

  gridItem:{
    flex:1,
    height:(height*20)/100,
    margin:"5%",


},
container:{
  flex:1,
  justifyContent:"flex-end",
  alignContent:"flex-end",
  borderRadius:20
},
mealTitle:{
  fontFamily:'OpenSans-Bold',
  fontSize:20,
  margin:"7%",
  textAlign:'right'






}

});

export default CategoryItemGrid;
