// import PushNotification from "react-native-push-notification";


// PushNotification.configure({
//     onNotification: function (notification) {
//         console.log("Local NOtification ", notification);
//     },

//     popInitialNotification: true,
//     requestPermissions: true,
// });




// PushNotification.createChannel(
//     {
//         channelId: 'channel-id',
//         channelName: 'my channel',
//         channelDescription: 'A channel for notification',
//         playSound: true,
//         soundName: 'default',
//         vibrate: true,
//         vibration: 1000,
//     },
//     created => console.log(`channel created ${created}`),
// );


// export const LocalNotification = () => {
//     PushNotification.localNotification({
//         channelId: 'channel-id',
//         channelName: 'my channel',
//         autoCancel: true,
//         title: 'Are You Ready To Klutchh?',
//         message: 'India’s Fastest Growing Esports Fantasy Platform.',
//         playSound: true,
//         soundName: 'default',
//         vibrate: true,
//         vibration: 1000,
//     });
// }