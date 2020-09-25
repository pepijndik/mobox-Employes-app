import React, {Component} from 'react';
import {
  Platform,
  FlatList,
  Animated,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Events from './event';
import moment from 'moment';
import {View} from 'react-native-animatable';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const renderItem = ({item}) => (
  <TouchableOpacity
    onPress={() => {
      console.log('Open modal for detials');
    }}>
    <Events
      start={item.start}
      end={item.end}
      title={item.title}
      klantnaam={item.klantnaam}
      aantal_8={item.aantal_8}
      aantal_14={item.aantal_14}
      boxen={item.boxen}
      // boxnmr={item.boxnmr}
    />
  </TouchableOpacity>
);

export default class Planning_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    fetch('https://werknemer.mobox.nl/functions/app/' + this.props.actie, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.props.user_id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <AnimatedFlatList
          keyExtractor={(item) => item.id.toString()}
          data={this.state.dataSource}
          renderItem={renderItem}
        />
      </View>
    );
  }
}
