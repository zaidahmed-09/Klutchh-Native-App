import React from 'react'
import { Platform } from 'react-native';
import colors from '../constants/colors';

import { createStackNavigator } from '@react-navigation/stack';

import DrawerHeader from '../components/drawer/DrawerHeader';
import LeaderboardScreen from '../screens/Leaderboard/LeaderboardScreen';


const Stack = createStackNavigator();

const LeaderBoardStack = ({route, navigation}) => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="LeaderboardScreen" 
                component={LeaderboardScreen}
                options={{
                    title: '', 
                    headerStyle: {height: Platform.OS === "ios" ? 100 : 70, backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerLeft: () => (
                        <DrawerHeader navigationProps={navigation} />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}

export default LeaderBoardStack