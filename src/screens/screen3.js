import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TestContext from '../../store/testContext';

const Screen3 = props => {
  const data = props.route.params.batata;

  const {total, setTotal} = useContext(TestContext);

  return (
    <View>
      <Text style={styles.txet}>{'page 3 tabs: ' + total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  txet: {
    fontSize: 30,
  },
});

export default Screen3;
