import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import TournamentsStack from './TournamentsStack';
import MyMatchesStack from './MyMatchesStack';
import LeaderBoardStack from './LeaderBoardStack';
import ProfileStack from './ProfileStack';

import { icons } from '../utills/Icons';


const Tab = createBottomTabNavigator();


const TabNavigationStack = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName, label;
  
            if (route.name === 'HomeStack') {
              iconName = focused ? icons.homeActive : icons.homeInActive 
              label = 'Home'
            } else if (route.name === 'MyMatchesStack') {
              iconName = focused ? icons.matchesActive : icons.matchesInActive 
              label = 'My Matches'
            } else if (route.name === 'LeaderBoardStack') {
              iconName = focused ? icons.leaderboardActive : icons.leaderboardInActive 
              label = 'Leaderboard'
            } else if (route.name === 'ProfileStack') {
              iconName = focused ? icons.profileActive : icons.profileInActive 
              label = 'Profile'
            }
  
            var style= {height: 22, width: 22, marginBottom: 4}
  
            var leaderStyle= {height: 28, width: 28, marginBottom: 4}
  
            return (
              <View style={[{alignItems: 'center', height: 44, width: 70}, focused ? {shadowColor: color, shadowOpacity: 10, shadowRadius: 10, borderRadius: 5, } : null]} >
                {label == 'Leaderboard'?
                  <Image source={iconName} style={{height: 28, width: 28, marginBottom: -2}} />
                   : 
                   <Image source={iconName} style={{height: 22, width: 22, marginBottom: 4}} />
                   }
              
                <Text style={{fontSize: 11,  color: color}} >{label}</Text>
              </View>
            )
          },
          tabBarActiveTintColor: '#FF326A',
          tabBarInactiveTintColor: 'white',
        })}
        >
          <Tab.Screen
              name="HomeStack"
              component={TournamentsStack}  
              options={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                 tabBarStyle: ((route) => {
                  
                  const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                  if (routeName === 'ContestPreview' || routeName === 'LiveParticipateContest' || routeName === 'PreviewTeam' || routeName === 'ContestDetails' || routeName === 'ParticipateContest' ||  routeName === 'MatchDetails') {
                    return { display: "none",  }
                  }
                  return  styles.tabbarStyle
                })(route)
              })}
          />
          <Tab.Screen
              name="MyMatchesStack"
              component={MyMatchesStack}  
              options={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                 tabBarStyle: ((route) => {
                  
                  const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                  if (routeName === 'ContestPreview' || routeName == 'ParticipatedContestOverview' || routeName === 'ParticipatedUpcomingOverview' || routeName === 'EditParticipateContest' || routeName === 'EditPreviewTeam' || routeName === 'LiveParticipateContest' || routeName === 'PreviewTeam' || routeName === 'ContestDetails' || routeName === 'ParticipateContest' ||  routeName === 'MatchDetails') {
                    return { display: "none",  }
                  }
                  return  styles.tabbarStyle
                })(route)
              })}
          />
          <Tab.Screen
              name="LeaderBoardStack"
              component={LeaderBoardStack}  
              options={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                 tabBarStyle: ((route) => {
                  
                  const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                  if (routeName === 'ContestPreview' || routeName === 'LiveParticipateContest' || routeName === 'PreviewTeam' || routeName === 'ContestDetails' || routeName === 'ParticipateContest' ||  routeName === 'MatchDetails') {
                    return { display: "none",  }
                  }
                  return  styles.tabbarStyle
                })(route)
              })}
          />
          <Tab.Screen
              name="ProfileStack"
              component={ProfileStack}  
              options={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                 tabBarStyle: ((route) => {
                  
                  const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                  if (routeName === 'AddMoneyForm' || routeName === 'WithdrawForm' || routeName === 'TransactionDetails') {
                    return { display: "none",  }
                  }
                  return  styles.tabbarStyle
                })(route)
              })}
          />
      </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabbarStyle: {
        position: 'absolute', 
        height: Platform.OS == 'ios' ? 100 : 90,  
        paddingTop:  Platform.OS == 'ios' ? 20 : 0, 
        backgroundColor: '#101010', 
        borderRadius: 50,
        // borderWidth: 1,
        // borderColor: 'red',
        paddingBottom: Platform.OS == 'ios' ? 40 : 10,
        borderTopWidth: 0,
        elevation: 0
    }
})

export default TabNavigationStack