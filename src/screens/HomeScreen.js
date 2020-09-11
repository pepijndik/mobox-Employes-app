import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
let EventsData = [
  {
    id: 1,
    start: '15:00',
    end: '16:00',
    title: 'Hillegom',
    klantnaam: 'Lissete van deursen',
    boxen: '1x 8kuub, 2x 14kuub',
    boxnmr: 'A180, 24, 25',
  },
];

import Events from '../components/event';

const GetPlanning = (user_id) => {
  fetch('https://werknemer.mobox.nl/functions/app/get_today_planning.php', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: user_id,
    }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (
        responseJson.actie === 'MELDING' ||
        responseJson.actie === 'RIJTIJD' ||
        responseJson.actie === 'melding' ||
        responseJson.actie === 'rijtijd'
      ) {
      } else {
        EventsData.push(responseJson);
        //console.log('Geen melding actie');
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const HomeScreen = ({navigation}) => {
  const {colors, mobox} = useTheme();
  const theme = useTheme();
  GetPlanning();

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

  const renderItem = ({item}) => (
    <Events
      start={item.start}
      end={item.end}
      title={item.title}
      klantnaam={item.klantnaam}
      boxen={item.boxen}
      boxnmr={item.boxnmr}
    />
  );
  //End of styles
  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <Text style={styles.head_text}>MOBOX</Text>

        <StatusBar
          backgroundColor="#F53D3D"
          barStyle={theme.dark ? 'light-content' : 'dark-content'}
        />
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.tabs}
          onPress={() => navigation.navigate('Planning')}>
          <Image
            style={styles.img}
            source={require('../../assets/planning_icon.png')}></Image>
          <Text style={{marginLeft: 40, fontWeight: 'bold'}}>Planning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabs}
          onPress={() => navigation.navigate('Event')}>
          <Image
            style={styles.img}
            source={require('../../assets/box.png')}></Image>
          <Text style={{marginLeft: 40, fontWeight: 'bold'}}>Boxen</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, marginTop: '-45%', marginRight: 15}}>
        <Text
          style={
            (styles.head_text,
            {color: '#3333', marginLeft: 20, marginBottom: 10})
          }>
          Bezorgingen Vandaag
        </Text>
        <FlatList
          style={{backgroundColor: mobox.backgroundColor}}
          keyExtractor={(item) => item.id.toString()}
          data={EventsData}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
