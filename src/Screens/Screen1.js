import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import React from 'react';
import {Cars} from '../res/Data';
import CarItem from '../components/CarItem';
import ScreenNames from '../../route/ScreenNames';

const Screen1 = (props) => {
  const renderCars = () => {
    const carsComponents = Cars.map(car => {
      return <CarItem brand={car.brand} year={car.year} km={car.km} img={car.img} />;
    });

    return carsComponents;
  };

  const onPayPress = () => {
    props.navigation.navigate(ScreenNames.screen2)
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>{renderCars()}</ScrollView>
      <Button title="PAY" onPress={onPayPress} />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
