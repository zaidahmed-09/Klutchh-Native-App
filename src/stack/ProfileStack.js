import React from 'react'
import { Platform } from 'react-native';
import colors from '../constants/colors';

import { createStackNavigator } from '@react-navigation/stack';
import DrawerHeader from '../components/drawer/DrawerHeader';

import ProfileScreen from '../screens/Profile/ProfileScreen';
import AddMoneyForm from '../screens/Profile/AddMoneyForm';
import Wallet from '../screens/Profile/Wallet';
import WithdrawForm from '../screens/Profile/WithdrawForm';


const Stack = createStackNavigator();

const ProfileStack = ({route, navigation}) => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="ProfileScreen" 
                component={ProfileScreen}
                options={{
                    title: '', 
                    headerStyle: {height: Platform.OS === "ios" ? 100 : 70, backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerLeft: () => (
                        <DrawerHeader navigationProps={navigation} />
                    ),
                }}
            />
            <Stack.Screen 
                name="Wallet" 
                component={Wallet}
                options={{
                    headerTintColor: '#fff',
                    headerTitle: 'Transaction History',
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerBackTitleVisible: false, 
                }}
            />
            <Stack.Screen 
                name="AddMoneyForm" 
                component={AddMoneyForm}
                options={{
                    headerTintColor: '#fff',
                    headerTitle: 'Add Money',
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerBackTitleVisible: false, 
                }}
            />
            <Stack.Screen 
                name="WithdrawForm" 
                component={WithdrawForm}
                options={{
                    headerTintColor: '#fff',
                    headerTitle: 'Withdraw Money',
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerBackTitleVisible: false, 
                }}
            />


        </Stack.Navigator>
    )
}

export default ProfileStack