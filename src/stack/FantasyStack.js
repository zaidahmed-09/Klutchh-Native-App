import React from 'react'
import { Platform } from 'react-native';
import colors from '../constants/colors';

import { createStackNavigator } from '@react-navigation/stack';

import DrawerHeader from '../components/drawer/DrawerHeader';
import FantasyPointsSystem from '../screens/Drawer/Fantasy/FantasyPointsSystem';
import FantasyDetails from '../screens/Drawer/Fantasy/FantasyDetails';

const Stack = createStackNavigator();

const FantasyStack = ({route, navigation}) => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="FantasyPointsSystem" 
                component={FantasyPointsSystem}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="FantasyDetails" component={FantasyDetails}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default FantasyStack