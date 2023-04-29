import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainNavigation from './route/nav';

const App = () => {
  return (
    <View style={styles.container}>
      <MainNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    // borderWidth: 4,
    marginTop: 10,
    backgroundColor: 'green',
    height: 300,
    width: 300,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    // borderWidth:1 ,
  },
  text2: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'red',
    // borderWidth:1
  },
});

export default App;
