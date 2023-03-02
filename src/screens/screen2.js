import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Screen2 = props => {
  const data = props.route.params.batata;
  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Screen2;
