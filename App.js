import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MealsNavigation'

import { Provider } from "react-redux";
import initialState from "reduxfiles/reducers/initialState";
import configureStore from "reduxfiles/configureStore";
const store = configureStore(initialState);


const App = () => {
  return (
      <Provider store={store}>
    <NavigationContainer>
    <MainNavigator/>
     </NavigationContainer>
     </Provider>
  );
};


const styles = StyleSheet.create({
container:{
  fontFamily:'OpenSans-Bold',
  fontSize:24,
}

});
export default App;
