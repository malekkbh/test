import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import TestContext from '../../store/testContext';
import CarItem from '../components/CarItem';

const Screen3 = () => {
  const {cart} = useContext(TestContext);
  const renderCars = () => {
    return cart.map(car => {
      return <CarItem {...car} />;
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {renderCars()}
      </ScrollView>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
