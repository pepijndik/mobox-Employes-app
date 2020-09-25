import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';

import {useTheme} from '@react-navigation/native';
const eventDetials = ({navigation}) => {
  const theme = useTheme();
  const {colors, mobox} = useTheme();
  const {height} = Dimensions.get('screen');
  const styles = StyleSheet.create({
    main: {
      width: height,
      height: height,
      backgroundColor: mobox.backgroundColor,
    },
    img: {
      marginTop: 20,
      marginLeft: 28,
      width: 96,
      height: 96,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    head: {
      backgroundColor: '#F53D3D',
      top: 0,
      width: height,
      height: 100,
    },
    head_text: {
      left: 130,
      color: '#fff',
      fontSize: 35,
      fontFamily: 'Poppins-ExtraBold',
    },
    grid: {
      display: 'flex',
    },
    tabs: {
      borderRadius: 5,
      top: -20,
      marginLeft: 25,
      marginRight: 25,
      width: 150,
      height: 170,
      backgroundColor: '#fff',
    },
    planning_list: {
      marginLeft: 10,
    },
    flatlist_rows: {
      marginVertical: 50,
    },
  });
  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <Text style={styles.head_text}>MOBOX</Text>

        <StatusBar
          backgroundColor="#F53D3D"
          barStyle={theme.dark ? 'light-content' : 'dark-content'}
        />
      </View>
      <Button
        title="Planning"
        onPress={() => navigation.navigate('Planning')}
      />
    </View>
  );
};

export default eventDetials;
