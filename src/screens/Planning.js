import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Events from '../components/event';
import EventsData from '../../model/event';
const Planning = ({navigation}) => {
  const renderItem = ({item}) => (
    <Events
      start={item.start}
      end={item.end}
      title={item.title}
      klant={item.klant}
      boxen={item.boxen}
      boxnmr={item.boxnmr}
    />
  );
  return (
    <View>
      <Text>Planning</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={EventsData}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Planning;
