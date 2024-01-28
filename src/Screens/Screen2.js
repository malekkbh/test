import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import CarItem from '../components/CarItem'

const Screen2 = (props) => {

  const car = props.route.params.car

  console.log("car: " , car);

  return (
    <View style={styles.container}>
      <Image source={car.img} style={styles.mainImage}  />
      <CarItem {...car }  hideImage={true}/>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
  container :{
    flex:1
  } , 
  mainImage : {
    width:'100%' , 
    height: 300 , 
    resizeMode:'contain'
  }
})