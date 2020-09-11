/**
 * Load Planning data
 */
// export const GetPlanning = (user_id) => {
//   fetch('https://werknemer.mobox.nl/functions/app/get_planning', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       user_id: user_id,
//     }),
//   })
//     .then((response) => response.json())
//     .then((responseJson) => {})
//     .catch((error) => {
//       console.error(error);
//     });
// };

export default EventsData = [
  {
    id: 1,
    start: '15:00',
    end: '16:00',
    title: 'Hillegom',
    klant: 'Lissete van deursen',
    boxen: '1x 8kuub, 2x 14kuub',
    boxnmr: 'A180, 24, 25',
  },
  {
    id: 23321,
    start: '12:00',
    end: '15:00',
    title: 'Lisse',
    klant: 'Martijn',
    boxen: '1x 8kuub',
    boxnmr: 'A123',
  },
  {
    id: 12354,
    start: '12:00',
    end: '15:00',
    title: 'Lisse',
    klant: 'Martijn',
    boxen: '1x 8kuub',
    boxnmr: 'A123',
  },
  {
    id: 1024,
    start: '12:00',
    end: '15:00',
    title: 'Lisse',
    klant: 'Martijn',
    boxen: '1x 8kuub',
    boxnmr: 'A123',
  },
];
