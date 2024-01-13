import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CarItem = props => {
  const {brand, year, km} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{`Brand: ${props.brand}`}</Text>
      <Text style={styles.txt}>{`Year: ${year}`}</Text>
      <Text style={styles.txt}>{'KM: ' + km}</Text>
    </View>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  txt: {
    fontSize: 35,
  },
  container: {
    borderWidth: 1,
    paddingLeft: 20,
  },
});
