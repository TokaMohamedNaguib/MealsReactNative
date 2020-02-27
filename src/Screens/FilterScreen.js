import React ,{useState,useLayoutEffect} from 'react' ;
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';

import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';


const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FilterScreen= props => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  useLayoutEffect(() => {

     props.navigation.setOptions({

         headerTitle: "Filter",
           headerLeft: () => (
               <Icon name="ios-menu" size={25} color="#fff" style={{marginLeft:10}} onPress={()=>{ props.navigation.toggleDrawer()}}/>)





     })
   }, [props.navigation]);
return (
  <View style={styles.screen}>
       <Text style={styles.title}>Available Filters / Restrictions</Text>
       <FilterSwitch
         label="Gluten-free"
         state={isGlutenFree}
         onChange={newValue => setIsGlutenFree(newValue)}
       />
       <FilterSwitch
         label="Lactose-free"
         state={isLactoseFree}
         onChange={newValue => setIsLactoseFree(newValue)}
       />
       <FilterSwitch
         label="Vegan"
         state={isVegan}
         onChange={newValue => setIsVegan(newValue)}
       />
       <FilterSwitch
         label="Vegetarian"
         state={isVegetarian}
         onChange={newValue => setIsVegetarian(newValue)}
       />
     </View>
)

}
export default FilterScreen;
const styles = StyleSheet.create({
  screen: {
      flex: 1,
      alignItems: 'center'
    },
    title: {
      fontFamily: 'open-sans-bold',
      fontSize: 22,
      margin: 20,
      textAlign: 'center'
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      marginVertical: 15
    }
});
