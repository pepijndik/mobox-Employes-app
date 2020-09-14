import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
export function GetUserData() {
  try {
    let user = {
      user_id: AsyncStorage.getItem('user_id'),
      username: AsyncStorage.getItem('username'),
      user_img: AsyncStorage.getItem('user_img'),
      user_rank: AsyncStorage.getItem('user_rank'),
    };
    return user;
  } catch (error) {
    console.log(error);
  }
}
