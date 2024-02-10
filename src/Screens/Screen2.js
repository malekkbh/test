import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useContext} from 'react';
import CarItem from '../components/CarItem';
import TestContext from '../../store/testContext';

const Screen2 = props => {
  const car = props.route.params.car;
  const {cart, setCart} = useContext(TestContext);
  /**
   * const context = useContext(TestContext);
   * const cart = context.cart
   * const setCart = context.setCart
   */

  console.log('car: ', car);

  const checkIFExist = () => {
    const isExist = cart.find(carItem => carItem.id == car.id);
    return !!isExist;
  };

  const exist = checkIFExist();

  const removeFromCart = () => {
    var cartArr = cart;
    cartArr = cartArr.filter(carItem => carItem.id !== car.id);
    setCart([...cartArr]);
  };

  const addToCart = () => {
    const cartArr = cart;
    cartArr.push(car);
    setCart([...cartArr]);
  };

  const onBtnPress = () => {
    exist ? removeFromCart() : addToCart();
  };

  console.log('carrt: ', cart);

  return (
    <View style={styles.container}>
      <Image source={car.img} style={styles.mainImage} />
      <CarItem {...car} hideImage={true} />
      <TouchableOpacity
        style={[styles.btn, {backgroundColor: exist ? 'red' : 'green'}]}
        onPress={onBtnPress}>
        <Text style={[styles.txtBtn]}>
          {exist ? 'remove from Cart' : 'add to cart'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  btn: {
    width: '70%',
    backgroundColor: 'green',
    alignSelf: 'center',
    height: 50,
    borderRadius: 15,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtn: {
    fontSize: 20,
    color: '#ffff',
  },
});
