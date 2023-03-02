import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from './card';

const CardInfo = props => {
  const {id} = props;
  return (
    <Card
      text={props.text}
      id={id}
      onCardChange={name => props.onCardChange?.(name)}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '60%',
    height: 100,
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
export default CardInfo;
