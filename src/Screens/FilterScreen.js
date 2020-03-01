import React ,{useState,useLayoutEffect,useCallback} from 'react' ;
import { View, Text, StyleSheet, Switch, Platform ,Dimensions} from 'react-native';

import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';
const {height, width} = Dimensions.get('window');

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
  const dispatch = useDispatch();


const saveFilters = useCallback(() => {
      const appliedFilters = {
        glutenFree: isGlutenFree,
        lactoseFree: isLactoseFree,
        vegan: isVegan,
        vegetarian: isVegetarian
      };

      dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);



useLayoutEffect(() => {

     props.navigation.setOptions({
         headerTitle: "Filter",
         headerLeft: () => (
               <Icon
               name="ios-menu"
               size={25}
               color={Platform.OS==='android'?"#fff":''}
               style={{marginLeft:(3*width)/100}}
               onPress={()=>{ props.navigation.toggleDrawer()}}/>),

        headerRight: () => (
        <Icon
          color={Platform.OS==='android'?"#fff":''}
          size={25}
          style={{marginRight:(3*width)/100}}
          name="ios-save"
          onPress={saveFilters}
        />

    ),
    headerTitleStyle:{
      fontFamily:"OpenSans-Bold",
      width:(60*width)/100,

    }

     })
   }, [props.navigation, saveFilters]);


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
