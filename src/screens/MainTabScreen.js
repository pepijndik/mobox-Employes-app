import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import Planning from './Planning';
import event from '../components/event';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const EventStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    barStyle={{backgroundColor: '#F53D3D'}}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Planning"
      component={PlanningStackSreen}
      options={{
        tabBarLabel: 'Planning',
        tabBarIcon: ({color}) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Event"
      component={EventStackSreen}
      options={{
        tabBarLabel: 'Klanten',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#F53D3D',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Poppins-ExtraBold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Dashboard',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#F53D3D"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const PlanningStackSreen = ({navigation}) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#F53D3D',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Poppins-ExtraBold',
      },
    }}>
    <DetailsStack.Screen
      name="Planning"
      component={Planning}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#F53D3D"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
const EventStackSreen = ({navigation}) => (
  <EventStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#F53D3D',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'Poppins-ExtraBold',
      },
    }}>
    <EventStack.Screen
      name="Event"
      component={event}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#F53D3D"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </EventStack.Navigator>
);
