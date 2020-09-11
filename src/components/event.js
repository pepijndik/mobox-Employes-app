import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const event = (props) => {
  console.log(props);
  return (
    <View style={styles.event_container}>
      <Text style={styles.event_text}>{props.start} </Text>
      <Text style={styles.event_text}>{props.end} </Text>
    </View>
  );
};
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  event_container: {
    width: height,
    backgroundColor: '#FFFFFF',
    height: 52,
    marginRight: 5,
  },
  event_text: {
    padding: 20,
    marginVertical: 50,
    textAlign: 'center',
  },
});
export default event;
// {
//   /* <Text style={styles.event_text}>{props.title} </Text>
// <Text style={styles.event_text}>{props.klant} </Text>
// <Text style={styles.event_text}>Box(en){props.boxen} </Text>
// <Text style={styles.event_text}>Boxn{props.boxnmr} </Text> */
// }
