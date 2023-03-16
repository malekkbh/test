import React, {useContext} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import ScreenNames from '../../route/ScreenNames';
import TestContext from '../../store/testContext';

const Screen1 = props => {
  const {total, setTotal} = useContext(TestContext);

  const onPress = () => {
    setTotal(total + 1);
    props.navigation.navigate(ScreenNames.screen3, {batata: 'abc'});
  };

  return (
    <View style={{flex:1}}>
      <Text style={styles.txet}>{'Screen 3 tabs: ' + total}</Text>
      <Button title="screen3" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  txet:{
    fontSize: 30 ,
  }
});

export default Screen1;
