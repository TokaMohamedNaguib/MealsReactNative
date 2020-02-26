import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/navigation/MealsNavigation'

const App = () => {
  return (
    <NavigationContainer>
    <MyTabs/>
     </NavigationContainer>
  );
};


const styles = StyleSheet.create({
container:{
  fontFamily:'OpenSans-Bold',
  fontSize:24,
}

});
export default App;
