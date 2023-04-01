import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from './src/components/card';

const App = () => {
  const data = [
    'btata',
    'roz',
    'batngan',
    'shawerma',
    'stick',
    'mansaf',
    'pizza',
    'frika',
    'water',
    'cola',
    'tamer',
    'ktaeyef',
  ];

  const renderCards = () => {
    const cards = data.map(name => <Card title={name} />);
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
