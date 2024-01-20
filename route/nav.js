import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import Screen1 from '../src/Screens/Screen1';
import Screen2 from '../src/Screens/Screen2';
import Screen3 from '../src/Screens/Screen3';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.Home} component={Screen1} />
        <Stack.Screen name={ScreenNames.screen2} component={Screen2} />
        <Stack.Screen name={ScreenNames.screen3} component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
