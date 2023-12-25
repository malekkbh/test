import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNavigation from './route/nav';
import TestProvider from './store/testProvider';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <TestProvider>
        <MainNavigation />
      </TestProvider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
