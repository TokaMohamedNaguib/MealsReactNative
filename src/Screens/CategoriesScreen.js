import React from 'react' ;
import {Text,View,StyleSheet,Button,FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data'


const CategoriesScreen = (props) => {
const renderGridItems=(itemData)=>{
return(<View style={styles.gridItem}>
  <Text>{itemData.item.title}</Text>
  </View>)
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
     alignItems:"center"
  },
  gridItem:{
  
    margin:15,
    height:150,

  }

});

export default CategoriesScreen;
