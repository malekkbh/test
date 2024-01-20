import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
/**
 * 1- component will amount
 *    ** componentWillUpdate
 * 2- render ( loading the component )
 *    ** componentDidUpdate
 * 3- componentDidLoad
 * 4- compomemtWillUnMount
 */

const CarItem = props => {
  const {brand, year, km} = props;

  // const[state , setState] = useState(init value)
  const [x, setX] = useState(0);
  // var x = 0;

  const onPress = () => {
    setX(x+1)
    console.log('x: ', x);
  };

  return (
    <View style={styles.container}>
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>{`Brand: ` + props.brand}</Text>
        <Text style={styles.txt}>{`Year: ${year}`}</Text>
        <Text style={styles.txt}>{'KM: ' + km}</Text>
      </View>
      <TouchableOpacity style={styles.plusContainer} onPress={onPress}>
        <Text style={styles.plus}>{'+'}</Text>
        <Text style={styles.plus}>{x}</Text>
      </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plus: {
    fontSize: 45,
    textAlign: 'center',
  },
  plusContainer: {
    borderWidth: 1,
    flex: 1,
  },
  txtContainer: {
    flex: 1,
  },
});
