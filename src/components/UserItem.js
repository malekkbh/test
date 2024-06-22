import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UserItem = props => {
  const {name, phone, points} = props;
  return (
    <View style={styles.conatiner}>
      <Text style={styles.txt}>{`name:${name}`}</Text>
      <Text style={styles.txt}>{`phone:${phone}`}</Text>
      <Text style={styles.txt}>{`points:${points}`}</Text>
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({
    txt:{
        fontSize:30
    } , 
    conatiner:{
        borderWidth:1 , 
        marginBottom:10
    }
});
