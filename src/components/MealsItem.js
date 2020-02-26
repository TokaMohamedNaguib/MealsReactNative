import React from 'react' ;
import {Text,View,StyleSheet,Dimensions,TouchableOpacity,Platform,ImageBackground} from 'react-native';
import {CATEGORIES} from '../data/dummy-data'
import Colors from '../constants/Colors'


const {height, width} = Dimensions.get('window');


const MealsItem = (props) => {

return(

<TouchableOpacity  style={styles.mealItem} onPress={props.onSelect}>

  <View style={styles.container}>

<ImageBackground source={{uri : props.imageUrl}} style={styles.mealImage}>
<View style={styles.titleContainer}>
<Text  numberOfLines={1}  style={styles.mealTitle}>{props.title}</Text>
</View>
  </ImageBackground>
  </View>
  <View style={styles.secondBar}>
<Text>{props.duration}</Text>
<Text>{props.affordability}</Text>
<Text>{props.complexity}</Text>
  </View>
</TouchableOpacity>


 )

  }


const styles = StyleSheet.create({

mealItem:{
flex:1,
height:(height*40)/100,
margin:"5%",
backgroundColor: '#f5f5f5',
borderRadius: 10,
overflow: 'hidden'


},

container:{
flex:1,
height:"90%",
},

mealImage:{
  flex:1,
  justifyContent:'flex-end',
  alignItems:'center',



},
mealTitle:{
  fontFamily:'OpenSans-Bold',
  fontSize:20,
  color:"#fff",
},
titleContainer: {
    width:"100%",
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: "20%"
  },

secondBar:{

  flexDirection:"row",
   justifyContent: 'space-between',
   padding:"5%"
}

});

export default MealsItem;
