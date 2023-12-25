import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import screen1 from '../src/screens/screen1';
import screen2 from '../src/screens/Screen2';
import Screen3 from '../src/screens/Screen3';


const MainNavigation = () => {

  const Stack = createNativeStackNavigator(); 

  return (
    <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen name='screen1' component={screen1} />
          <Stack.Screen name='screen2' component={screen2} />
          <Stack.Screen name='screen3' component={Screen3} />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation;