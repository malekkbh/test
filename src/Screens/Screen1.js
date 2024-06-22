import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Cars} from '../res/Data';
import CarItem from '../components/CarItem';
import ScreenNames from '../../route/ScreenNames';
import {getAllUsers} from '../res/api';
import UserItem from '../components/UserItem';

const Screen1 = props => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const renderCars = () => {
    return users.map(user => <UserItem {...user} />);
  };

  const onPayPress = () => {
    props.navigation.navigate(ScreenNames.screen3);
  };

  const getAllUsersFromApi = () => {
    setLoading(true);
    getAllUsers().then(res => {
      console.log('res:', res);
      setUsers(res.users);
      setLoading(false);
    });
  };

  useEffect(() => {
    getAllUsersFromApi();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView>{renderCars()}</ScrollView>
      <Button title="PAY" onPress={onPayPress} />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
