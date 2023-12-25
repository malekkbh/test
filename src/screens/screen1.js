import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAllUsers} from '../res/api/api';

const screen1 = () => {
  const [users, setUsers] = useState([]);

  const getAllusersFromApi = () => {
    getAllUsers().then(res => {
      console.log("all users: ", res);
      setUsers(res);
    });
  };
  
  useEffect(() => {
    getAllusersFromApi();
  }, []);

  return (
    <View>
      <Text>screen1</Text>
    </View>
  );
};

export default screen1;

const styles = StyleSheet.create({});
