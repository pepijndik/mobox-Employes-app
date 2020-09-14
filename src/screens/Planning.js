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
import Planning_list from '../components/planning_list';
import {GetUserData} from '../components/Data';

const Planning = ({navigation}) => {
  return (
    <View>
      <Text>Planning</Text>
      <View style={{height: 300, top: 10}}>
        <Planning_list actie="get_planning.php" user_id="7" />
      </View>
    </View>
  );
};

export default Planning;
