import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from './src/components/card';

const App = () => {
  const data = [
    {name: 'btata', price: 10},
    {name: 'roz', price: 7},
    {name: 'batngan', price: 33},
    {name: 'shawerma', price: 45},
    {name: 'stick', price: 120},
    {name: 'mansaf', price: 300},
    {name: 'pizza', price: 60},
    {name: 'frika', price: 20},
    {name: 'water', price: 5},
    {name: 'cola', price: 7},
    {name: 'tamer', price: 2},
    {name: 'ktaeyef', price: 7},
  ];

  const renderCards = () => {
    const cards = data.map(product => {
      return <Card title={product.name} price={product.price} />;
    });
    return cards;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderCards()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
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
