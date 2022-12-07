import 'react-native-gesture-handler';
import React, {useEffect, useRef} from 'react'
import { StyleSheet, Text, View, Platform, LogBox, } from "react-native";

import AppNavigation from './AppNavigation';
import { Provider } from "react-redux";
import store from "./src/redux/store";

import { QueryClient, QueryClientProvider } from "react-query";

import messaging from '@react-native-firebase/messaging';

import codePush from "react-native-code-push";

LogBox.ignoreAllLogs(true)

LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
    ])
    
const App = () => {



    const queryClient = new QueryClient();

    useEffect(() => {

        if (requestUserPermission()) {
            getToken()
        } else console.log('Not Authorization status:', authStatus);
        
        return () => {
    
        };
    }, []);

    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        console.log('Authorization status(authStatus):', authStatus);
        return (
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL
        );
    };

    const getToken = async () => {
        let fcmToken = ''
        //await AsyncStorage.getItem('fcmToken');
        if (!fcmToken) {
            messaging()
                .getToken()
                .then((fcmToken) => {
                //console.log('FCM Token -> ', fcmToken);
                //AsyncStorage.setItem('fcmToken', fcmToken);
            });
        }else{
            //console.log("fcm already : " + fcmToken);
        }
    }
    
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        </QueryClientProvider>
    )
}

export default codePush(App)


// import React from 'react'
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity, } from 'react-native'
// import codePush from "react-native-code-push";
// import HomeScreen from './HomeScreen';



// const App = () => {
//     return (
//         <HomeScreen />
//     )
// }

// export default codePush(App)


     