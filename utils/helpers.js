import { AsyncStorage } from 'react-native';

const NOTIFICATION_KEY = 'mobileFlashcards:notifications';

export function stringIsEmpty(text) {
  return text.trim().length===0;
}

export function setLocalNotification(){
  // AsyncStorage.getItem(NOTIFICATION_KEY)
  //   .then(JSON.parse)
  //   .then((data) => {
  //     if (data === null) {
  //       Permissions.askAsync(Permissions.NOTIFICATIONS)
  //         .then(({ status}) => {
  //           if (status === 'granted') {
  //             Notifications.cancelAllScheduledNotificationsAsync();
  //
  //             let tomorrow = new Date();
  //             tomorrow.setDate(tomorrow.getDate() + 1);
  //             tomorrow.setHours(20);
  //             tomorrow.setMinutes(0);
  //
  //             Notifications.scheduleLocalNotificationAsync(
  //               createNotification(),
  //               {
  //                 time: tomorrow,
  //                 repeat: 'day'
  //               }
  //             )
  //
  //             AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
  //
  //
  //           }
  //         })
  //       }
  //   })
}
