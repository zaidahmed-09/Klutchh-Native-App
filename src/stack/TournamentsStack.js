import React from 'react'
import { Platform } from 'react-native';
import colors from '../constants/colors';

import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/Home/HomeScreen';
import TournamentsScreen from '../screens/Home/TournamentsScreen';
import DrawerHeader from '../components/drawer/DrawerHeader';

import MatchDetails from '../screens/Home/MatchDetails';
import PreviewTeam from '../screens/Home/PreviewTeam';
import ContestPreview from '../screens/Home/ContestPreview';
import ContestDetails from '../screens/Home/ContestDetails';
import ParticipateContest from '../screens/Home/ParticipateContest';
import CompletedTournaments from '../screens/Home/CompletedTournaments';
import LiveParticipateContest from '../screens/Home/LiveParticipateContest';


const Stack = createStackNavigator();

const TournamentsStack = ({route, navigation}) => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={TournamentsScreen}
                options={{
                    title: '', 
                    headerStyle: {height: Platform.OS === "ios" ? 100 : 70, backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerLeft: () => (
                        <DrawerHeader navigationProps={navigation} />
                    ),
                }}
            />
            <Stack.Screen name="MatchDetails" component={MatchDetails} 
                options={{
                headerTintColor: '#fff',
                headerTitleStyle: {fontFamily: 'Inter-Bold', fontSize: 15},
                headerTitle: 'Contests',
                headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                headerBackTitleVisible: false, 
                }}
            />
            <Stack.Screen name="ContestDetails" component={ContestDetails} 
                options={{
                headerTintColor: '#fff',
                headerTitleStyle: {fontFamily: 'Inter-Bold', fontSize: 15},
                headerTitle: 'Contest Details',
                headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                headerBackTitleVisible: false, 
                }}
            />
            <Stack.Screen name="ParticipateContest" component={ParticipateContest} 
                options={{
                headerTintColor: '#fff',
                headerTitleStyle: {fontFamily: 'Inter-Bold', fontSize: 15},
                headerTitle: 'Create Team',
                headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                headerBackTitleVisible: false, 
                }}
            />
            <Stack.Screen name="PreviewTeam" component={PreviewTeam} 
                options={{
                headerTintColor: '#fff',
                headerTitleStyle: {fontFamily: 'Inter-Bold', fontSize: 15},
                headerTitle: 'MVP Selection',
                headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                headerBackTitleVisible: false, 
                }}
            />
            <Stack.Screen name="CompletedTournaments" component={CompletedTournaments} 
                options={{
                headerTintColor: '#fff',
                headerTitleStyle: {fontFamily: 'Inter-Bold', fontSize: 15},
                //headerTitle: 'Live Match',
                headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                headerBackTitleVisible: false, 
                }}
            />
             <Stack.Screen name="ContestPreview" component={ContestPreview} 
                options={{
                headerTintColor: '#fff',
                //headerTitleStyle: {fontFamily: 'Inter-Bold', fontSize: 15},
                headerTitle: 'Live Match',
                headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                headerBackTitleVisible: false, 
                }}
            />
             <Stack.Screen
                name="LiveParticipateContest"
                component={LiveParticipateContest}
                options={{
                    headerTintColor: '#fff',
                    headerTitle: 'Live Match',
                    headerTitleStyle: {fontFamily: 'Inter-Bold', fontSize: 15},
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerBackTitleVisible: false, 
                }}
            />
        </Stack.Navigator>
    )
}

export default TournamentsStack