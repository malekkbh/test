/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import Card from './src/components/card';
import CardInfo from './src/components/cardInfo';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

import {StyleSheet, View} from 'react-native';
//npm start
const App = () => {
  return (
    <View style={styles.container}>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

// export default App;
