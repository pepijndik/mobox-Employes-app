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
import BekijkAfpsraak from '../components/BekijkAfspraak';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const SCREEN_WIDTH = Dimensions.get('window').width;
const START_YEAR = 2010;
const END_YEAR = 2050;
moment.locale('nl');

function getCurrentWeekIndex() {
  return moment().startOf('week').diff(START_MOMENT, 'weeks');
}

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

export default class PlanningScreen extends Component {
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
      markedDate: moment(new Date()).format('YYYY-MM-D'),
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
        markedDate: this.state.markedDate,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            dataSource: responseJson,
          },
          this.componentDidMount,
        );
        //console.log(this.state.resource + ' date: ' + this.state.markedDate);
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
              markedDate: moment(this.state.markedDate)
                .subtract(1, 'day')
                .format('YYYY-MM-D'),
            },
            this.componentDidMount(),
          )
        }
      />
      <Picker
        selectedValue={this.state.resource}
        style={{
          height: 50,
          width: 200,
          color: '#fff',
          fontFamily: 'Poppins-Bold',
        }}
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
              markedDate: moment(this.state.markedDate)
                .add(1, 'day')
                .format('YYYY-MM-D'),
            },
            this.componentDidMount(),
          )
        }
      />
    </View>
  );

  render() {
    const today = this.state.markedDate;
    const day = moment(today).format('dddd');
    const date = moment(today).format('D, MMMM YYYY');
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
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: this.state.scrollAnimX}}}],
            {useNativeDriver: true},
          )}
          updateCellsBatchingPeriod={10}
          initialNumToRender={0}
          data={this.state.dataSource}
          renderItem={renderItem}
        />
      </View>
    );
  }
}
