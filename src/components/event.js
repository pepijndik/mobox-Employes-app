import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const event = (props) => {
  let boxen = '';
  if (props.aantal_14 >= 1 && props.aantal_8 >= 1) {
    boxen = props.aantal_14 + ' x 14kuub, ' + props.aantal_8 + 'x 8kuub';
  } else if (props.aantal_14 >= 1) {
    boxen = props.aantal_14 + ' x 14kuub, ';
  } else if (props.aantal_8 >= 1) {
    boxen = props.aantal_8 + ' x 8kuub, ';
  } else {
    boxen = '';
  }
  let start_time = props.start.split(' ');
  start_time = start_time[1].toString();
  let time = start_time.split(':');
  let end = props.end.split(' ');
  end = end[1].toString();
  end = end.split(':');
  return (
    <View style={styles.event_container}>
      <View style={styles.time}>
        <Text>{time[0].toString() + ':' + time[1].toString()}</Text>
        <Text style={styles.time_devider}> - </Text>
        <Text style={{top: -16}}>
          {end[0].toString() + ':' + end[1].toString()}
        </Text>
      </View>
      <View style={styles.info}>
        <View style={styles.detials}>
          <Text style={styles.detials_left}>Plaatsnaam: </Text>
        </View>
        <View style={styles.detials}>
          <Text style={styles.detials_left}>Klant: </Text>
        </View>
        <View style={styles.detials}>
          <Text style={styles.detials_left}>Box(en) : </Text>
        </View>
      </View>

      <View style={styles.data}>
        <View style={styles.detials}>
          <Text
            style={{
              top: '2%',
              fontSize: 14,
              fontFamily: 'Poppins-Bold',
              color: '#F53D3D',
            }}>
            {props.title}
          </Text>
        </View>
        <View style={styles.detials}>
          <Text style={{fontSize: 12, top: '-4%'}}>{props.klantnaam}</Text>
        </View>
        <View style={styles.detials}>
          <Text style={{fontSize: 12, top: '-4%'}}>{boxen}</Text>
        </View>
      </View>
    </View>
  );
};
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  event_container: {
    flexDirection: 'row',
    width: height,
    backgroundColor: '#FFFFFF',
    height: 75,
    marginRight: 5,
    marginBottom: 10,
    bottom: '2%',
  },

  event_text: {
    padding: 20,
    marginVertical: 50,
    textAlign: 'center',
  },
  time_devider: {
    top: -8,
    left: 15,
  },

  time: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#9B9A9A',
    marginLeft: 20,
    marginTop: '2%',
    width: 40,
    height: 50,
  },
  info: {
    left: 10,
    top: '2%',
  },
  data: {
    top: '1.4%',
    left: '14%',
  },
  detials: {
    flexDirection: 'row',
    color: '#9B9A9A',
  },
  detials_left: {
    fontSize: 10,
    color: '#9B9A9A',
  },
  detials_right: {
    top: 0,
  },
});
export default event;
// {
//   /* <Text style={styles.event_text}>{props.title} </Text>
// <Text style={styles.event_text}>{props.klant} </Text>
// <Text style={styles.event_text}>Box(en){props.boxen} </Text>
// <Text style={styles.event_text}>Boxn{props.boxnmr} </Text> */
// }
