import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = props => {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.text2}>!!!</Text>
      </View>
      <Text style={styles.text}>{`${props.price || 0}₪`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // borderWidth: 4,
    marginTop: 10,
    backgroundColor: 'green',
    height: 300,
    width: 300,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
  nameContainer: {
    flexDirection: 'row',
  },
});

export default Card;
