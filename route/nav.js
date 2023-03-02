import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ScreenNames from './ScreenNames';
import Screen1 from '../src/screens/screen1';
import Screen2 from '../src/screens/screen2';
import Screen3 from '../src/screens/screen3';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.screen1} component={Screen1} />
        <Stack.Screen name={ScreenNames.screen2} component={Screen2} />
        <Stack.Screen name={ScreenNames.screen3} component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
