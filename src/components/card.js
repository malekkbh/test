import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Card = props => {
  var userId = props.id || 0;

  const [id, setId] = useState(userId);

  const onCardsPress = () => {
    setId(id + 1);
    console.log('id: ', userId);
    //triger
    props.onCardChange?.(props.text);
  };

  return (
    <Pressable onPress={onCardsPress}>
      <View style={styles.cardContainer}>
        <Text>{props.text || '404'}</Text>
        <Text>{id}</Text>
      </View>
    </Pressable>
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

export default Card;
