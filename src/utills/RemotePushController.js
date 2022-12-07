import React, {useEffect} from 'react'
import { Text, View } from 'react-native';

import PushNotification from "react-native-push-notification";


const RemotePushController  = () => {

    useEffect(() => {
        PushNotification.configure({
            onRegister: function(token) {
                console.log("Token ", token);
            },

            onNotification: function(notification){
                console.log("Remote controller ", notification);
            },

            senderID: '600947209366',
            popInitialNotification: true,
            requestPermissions: true,
        });
    }, [])
    
    return null;
}

export default RemotePushController

