import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from '../screens/Authentication/LandingScreen';
import colors from '../constants/colors';
import LoginScren from '../screens/Authentication/LoginScren';
import SignupScreen from '../screens/Authentication/SignupScreen';
import OtpScreen from '../screens/Authentication/OtpScreen';
import SignupVerificationScreen from '../screens/Authentication/SignupVerificationScreen';


const Stack = createStackNavigator();


const AuthenticationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Landing" 
                component={LandingScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Login" 
                component={LoginScren} 
                options={{
                    headerTintColor: '#fff',
                    headerTitle: 'Log In',
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerBackTitleVisible: false, 
                }}
            />
            <Stack.Screen 
                name="Otp"
                component={OtpScreen}
                options={{
                    headerTintColor: '#fff',
                    headerTitle: 'Register & Play',
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerBackTitleVisible: false, 
                }}
            />
            <Stack.Screen 
                name="Signup" 
                component={SignupScreen} 
                options={{
                    headerTintColor: '#fff',
                    headerTitle: 'Register & Play',
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerBackTitleVisible: false, 
                }}
            />
             <Stack.Screen 
                name="SignupVerificationScreen" 
                component={SignupVerificationScreen} 
                options={{
                headerTintColor: '#fff',
                headerTitle: 'Register & Play',
                headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                headerBackTitleVisible: false, 
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthenticationStack