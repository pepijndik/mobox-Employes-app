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

export function GetPlanning(user_id) {
  fetch('https://werknemer.mobox.nl/functions/app/get_planning.php', {
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
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
}
