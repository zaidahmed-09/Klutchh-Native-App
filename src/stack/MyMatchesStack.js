import React from 'react'
import { Platform } from 'react-native';
import colors from '../constants/colors';

import { createStackNavigator } from '@react-navigation/stack';

import MymatchesScreen from '../screens/Mymatches/MymatchesScreen';
import DrawerHeader from '../components/drawer/DrawerHeader';


import ParticipatedContestOverview from '../screens/Mymatches/ParticipatedContestOverview';
import ParticipatedUpcomingOverview from '../screens/Mymatches/ParticipatedUpcomingOverview';
import ParticipatedLiveOverview from '../screens/Mymatches/ParticipatedLiveOverview';
import EditPreviewTeam from '../screens/Mymatches/EditPreviewTeam';
import EditParticipateContest from '../screens/Mymatches/EditParticipateContest';

const Stack = createStackNavigator();

const MyMatchesStack = ({route, navigation}) => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="MyMatches" 
                component={MymatchesScreen}
                options={{
                    title: '', 
                    headerStyle: {height: Platform.OS === "ios" ? 100 : 70, backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerLeft: () => (
                        <DrawerHeader navigationProps={navigation} />
                    ),
                }}
            />
            
            <Stack.Screen
                name="ParticipatedContestOverview"
                component={ParticipatedContestOverview}
                options={{
                    headerTintColor: '#fff',
                    headerTitle: 'Completed Matches',
                    headerTitleStyle: {fontFamily: 'Inter-Bold', fontSize: 15},
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerBackTitleVisible: false, 
                }}
            />

            <Stack.Screen
                name="ParticipatedUpcomingOverview"
                component={ParticipatedUpcomingOverview}
                options={{
                    headerTintColor: '#fff',
                    headerTitle: 'Upcoming Matches',
                    headerTitleStyle: {fontFamily: 'Inter-Bold', fontSize: 15},
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerBackTitleVisible: false, 
                }}
            />

            <Stack.Screen
                name="ParticipatedLiveOverview"
                component={ParticipatedLiveOverview}
                options={{
                    headerTintColor: '#fff',
                    headerTitle: 'Upcoming Matches',
                    headerTitleStyle: {fontFamily: 'Inter-Bold', fontSize: 15},
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerBackTitleVisible: false, 
                }}
            />

            <Stack.Screen name="EditPreviewTeam" component={EditPreviewTeam} 
                options={{
                    headerTintColor: '#fff',
                    headerTitleStyle: {fontFamily: 'Inter-Bold', fontSize: 15},
                    headerTitle: 'MVP Selection',
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerBackTitleVisible: false, 
                }}
            />

            <Stack.Screen
                name="EditParticipateContest"
                component={EditParticipateContest}
                options={{
                    headerTintColor: '#fff',
                    headerTitleStyle: {fontFamily: 'Inter-Bold', fontSize: 15},
                    headerTitle: 'Update Team',
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerBackTitleVisible: false, 
                }}
            />
        </Stack.Navigator>
    )
}

export default MyMatchesStack