import React, {Component, useState} from 'react';
import {Picker} from '@react-native-community/picker';
import {
  Platform,
  FlatList,
  Animated,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import Events from './event';
import moment from 'moment';
import {ForwardButton, BackButton} from '../components/navButtons';
import styles from './styles/planning_style';
import 'moment/locale/nl';
import {useNavigation} from '@react-navigation/native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const SCREEN_WIDTH = Dimensions.get('window').width;
const START_YEAR = 2010;
const END_YEAR = 2050;
moment.locale('nl');

function getCurrentWeekIndex() {
  return moment().startOf('week').diff(START_MOMENT, 'weeks');
}
// const renderItem = ({item}) => (
//   <TouchableOpacity
//     onPress={() => {
//       this.toEventDetials();
//     }}>
//     <Events
//       start={item.start}
//       end={item.end}
//       title={item.title}
//       klantnaam={item.klantnaam}
//       aantal_8={item.aantal_8}
//       aantal_14={item.aantal_14}
//       boxen={item.boxen}
//       // boxnmr={item.boxnmr}
//     />
//   </TouchableOpacity>
// );

export default class PlanningScreen extends Component {
  // function openModal(item) {
  //   this.props.navigation.navigate('BekijkAfspraak', {event: item});
  // }

  static navigatorStyle = {
    navBarHidden: true,
    statusBarBlur: true,
    statusBarTextColorScheme: 'light',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      resource: 'm',
      currentDate: new Date(),
      markedDate: moment(new Date(), 'YYYY-MM-DD'),
    };
  }

  _flatList: FlatList<*> | null;

  componentDidMount() {
    fetch('https://werknemer.mobox.nl/functions/app/' + this.props.actie, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.props.user_id,
        resource: this.state.resource,
        markedDate: moment(this.state.markedDate, 'YYYY-MM-DD').format(
          'YYYY-MM-DD',
        ),
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        this.setState(
          {
            dataSource: responseJson,
          },
          this.componentDidMount(),
        );
        // console.log(
        //   this.state.resource +
        //     ' date: ' +
        //     moment(this.state.markedDate, 'YYYY-MM-DD').format('YYYY-MM-DD'),
        // );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  _renderButtons = () => (
    <View style={styles.buttonContainer}>
      <BackButton
        onPress={() =>
          this.setState(
            {
              resource: this.state.resource,
              markedDate: moment(this.state.markedDate, 'YYYY-MM-D')
                .subtract(1, 'day')
                .format('YYYY-MM-DD'),
            },
            this.componentDidMount(),
          )
        }
      />
      <Picker
        selectedValue={this.state.resource}
        style={{
          height: 30,
          width: 200,
          color: '#fff',
          fontFamily: 'Poppins-Bold',
        }}
        itemStyle={{height: 44, color: '#fff', fontFamily: 'Poppins-Bold'}}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({resource: itemValue}, () => {
            this.componentDidMount();
          })
        }>
        <Picker.Item label="Mercedes" value="m" />
        <Picker.Item label="Iveco" value="i" />
        <Picker.Item label="Vrachtwagen" value="v" />
      </Picker>
      <ForwardButton
        onPress={() =>
          this.setState(
            {
              resource: this.state.resource,
              markedDate: moment(this.state.markedDate, 'YYYY-MM-D')
                .add(1, 'day')
                .format('YYYY-MM-DD'),
            },
            this.componentDidMount(),
          )
        }
      />
    </View>
  );

  render() {
    const {navigation} = this.props;
    const chosenDay = moment(this.state.markedDate).format('YYYY-MM-DD');
    const day = moment(chosenDay).format('dddd');
    const date = moment(chosenDay).format('D, MMMM YYYY');
    return (
      <View style={styles.container}>
        <View style={styles.statusbar} />
        <TouchableWithoutFeedback onPress={this._scrollToCurrentWeek}>
          <View>
            <View style={styles.navBarTitleContainer}>
              <Animated.Text style={[styles.navBarTitle]}>
                {day + ' ' + date}
              </Animated.Text>
            </View>
            <View style={styles.navBarBackground}>{this._renderButtons()}</View>
          </View>
        </TouchableWithoutFeedback>

        <AnimatedFlatList
          style={{top: 50}}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          scrollEventThrottle={1}
          updateCellsBatchingPeriod={10}
          initialNumToRender={0}
          data={this.state.dataSource}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigate.navigate('eventDetials');
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
          )}
        />
      </View>
    );
  }
}
