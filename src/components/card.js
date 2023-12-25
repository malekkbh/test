import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ScreenNames from '../../route/ScreenNames';

const Card = props => {
  const navigation = useNavigation();

  const navigateToScreen = () => {
    navigation.navigate(ScreenNames.screen2, {title: props.title});
  };

  return (
    <TouchableOpacity onPress={navigateToScreen}>
      <View style={styles.card}>
        <View style={styles.nameContainer}>
          <Text style={styles.text}>{props.title}</Text>
          <Text style={styles.text2}>!!!</Text>
        </View>
        <Text style={styles.text}>{`${props.price || 0}₪`}</Text>
      </View>
    </TouchableOpacity>
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
