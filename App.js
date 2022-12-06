import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, } from 'react-native'
import codePush from "react-native-code-push";
import HomeScreen from './HomeScreen';



const App = () => {
    return (
        <HomeScreen />
    )
}

export default codePush(App)


     