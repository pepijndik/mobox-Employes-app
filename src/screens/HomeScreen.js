import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();

  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <Text style={styles.head_text}>Mobox</Text>

        <StatusBar
          backgroundColor="#F53D3D"
          barStyle={theme.dark ? 'light-content' : 'dark-content'}
        />
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.tabs}>
          <Image
            style={styles.img}
            source={require('../../assets/planning_icon.png')}></Image>
          <Text style={{marginLeft: 40, fontWeight: 'bold'}}>Planning</Text>
        </View>
        <View style={styles.tabs}>
          <Image
            style={styles.img}
            source={require('../../assets/box.png')}></Image>
          <Text style={{marginLeft: 40, fontWeight: 'bold'}}>Boxen</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  main: {
    width: height,
    height: height,
    backgroundColor: '#E7EEF0',
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
    fontWeight: 'bold',
    fontFamily: 'Poppins',
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
});
