import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
const PlanningEvents = () => {
  const events = [
    {title: 'Friend #1', age: 20},
    {title: 'Friend #2', age: 45},
    {title: 'Friend #3', age: 32},
    {title: 'Friend #4', age: 27},
    {title: 'Friend #5', age: 53},
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(events) => events.title}
        data={events}
        renderItem={({item}) => {
          // element == { item: {name: 'Friend #1'}, Index: 0 }
          // item === { name: 'friend #1'}

          /** Gives Warning message */
          return (
            <Text style={styles.textStyle}>
              {item.title} - age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default PlanningEvents;
