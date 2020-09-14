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
import Planning_screen from '../components/planningScreen';
const Planning = ({navigation}) => {
  return (
    <View>
      <View style={{height: '100%', top: 0}}>
        {/* <Planning_list actie="get_planning.php" user_id="7" /> */}
        <Planning_screen actie="get_planning.php" user_id="7" />
      </View>
    </View>
  );
};

export default Planning;
