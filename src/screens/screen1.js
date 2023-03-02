import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import ScreenNames from '../../route/ScreenNames';
import {useNavigation} from '@react-navigation/native';

const Screen1 = props => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>{'Screen 1'}</Text>
      <Button
        title="screen3"
        onPress={() =>
          props.navigation.navigate(ScreenNames.screen3, {batata: 'abc'})
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Screen1;
