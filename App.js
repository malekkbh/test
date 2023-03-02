import React from 'react';
import {View} from 'react-native';
import MainNavigator from './route/nav';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <MainNavigator />
    </View>
  );
};

export default App;
