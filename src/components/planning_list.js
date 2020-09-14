import React, {Component} from 'react';
import {Platform, FlatList} from 'react-native';
import Events from './event';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const renderItem = ({item}) => (
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
);

export default class Planning_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    console.log(this.props.user_id);
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
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={this.state.dataSource}
        renderItem={renderItem}
      />
    );
  }
}
