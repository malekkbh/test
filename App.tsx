import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import CarItem from './src/components/CarItem';
import {Cars} from './src/res/Data';
import MainNavigation from './route/nav';
import TestProvider from './store/testProvider';

const App = () => {
  // return (
  //   <View style={styles.container}>
  //     <ScrollView>{renderCars()}</ScrollView>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <TestProvider>
        <MainNavigation />
      </TestProvider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, // cover the all the screen
  },
  txt: {
    fontSize: 50,
    fontWeight: 'bold',
    borderWidth: 3,
    // padding: 15 ,
    width: 140,
    textAlign: 'center',
    marginTop: 10,
  },
});
