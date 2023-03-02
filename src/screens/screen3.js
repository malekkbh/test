import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Screen3 = props => {
  const data = props.route.params.batata;

  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Screen3;
