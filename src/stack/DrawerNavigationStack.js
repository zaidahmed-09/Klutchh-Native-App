import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutUs from '../screens/Drawer/AboutUs';
import TabNavigationStack from './TabNavigationStack';
import CustomSidebarMenu from '../components/drawer/CustomSidebarMenu';
import { Image, TouchableOpacity } from 'react-native';
import { icons } from '../utills/Icons';
import ContactUs from '../screens/Drawer/ContactUs';
import colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import TermsDetails from '../screens/Drawer/TermsDetails';
import PolicyDetails from '../screens/Drawer/PolicyDetails';
import FaqDetails from '../screens/Drawer/FaqDetails';
import FantasyStack from './FantasyStack';
import TutorialScreen from '../screens/Drawer/Tutorial/TutorialScreen';
import AddMoneyForm from '../screens/Profile/AddMoneyForm';
import RssFeed from '../screens/Drawer/RssFeed';
import WithdrawForm from '../screens/Profile/WithdrawForm';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigationStack = () => {

    const nav =  useNavigation()

    return (
        <Drawer.Navigator
            screenOptions={{
                activeTintColor: '#e91e63',
            }}
            drawerContent={(props) => <CustomSidebarMenu {...props} />}
        >
                <Drawer.Screen 
                    name="TabNavigationStack" 
                    component={TabNavigationStack} 
                    options={{
                        headerShown: false
                    }}
                />

                <Drawer.Screen name="Tutorial" component={TutorialScreen}
                    options={{ 
                    headerShown: false,
                    headerTintColor: '#fff',
                    headerTitle: '',
                    headerTitleStyle: {
                        fontFamily: 'Inter-Bold', 
                        fontSize: 15},
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    }}
                />

                <Drawer.Screen name="AddMoneyForm" component={AddMoneyForm} 
                    options={{ 
                        headerShown: true,
                        headerTintColor: '#fff',
                        headerTitle: 'Add Money',
                        headerTitleStyle: {
                            fontFamily: 'Inter-Bold', 
                            fontSize: 15},
                        headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                        headerLeft: () => (
                        <TouchableOpacity onPress={() => nav.navigate('HomeStack')}>
                            <Image source={icons.left_arrow_white_tutorial} style={{height: 30, width: 30, marginLeft: 10}} />
                        </TouchableOpacity>
                        ),
                    }}
                />

                <Drawer.Screen name="WithdrawForm" component={WithdrawForm} 
                    options={{ 
                        headerShown: true,
                        headerTintColor: '#fff',
                        headerTitle: 'Withdraw Money',
                        headerTitleStyle: {
                            fontFamily: 'Inter-Bold', 
                            fontSize: 15},
                        headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                        headerLeft: () => (
                        <TouchableOpacity onPress={() => nav.navigate('HomeStack')}>
                            <Image source={icons.left_arrow_white_tutorial} style={{height: 30, width: 30, marginLeft: 10}} />
                        </TouchableOpacity>
                        ),
                    }}
                />

                

                <Drawer.Screen name="NewsFeed" component={RssFeed} 
                    options={{ 
                        headerShown: true,
                        headerTintColor: '#fff',
                        headerTitle: 'News Feed',
                        headerTitleStyle: {
                            fontFamily: 'Inter-Bold', 
                            fontSize: 15},
                        headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                        headerLeft: () => (
                        <TouchableOpacity onPress={() => nav.navigate('HomeStack')}>
                            <Image source={icons.left_arrow_white_tutorial} style={{height: 30, width: 30, marginLeft: 10}} />
                        </TouchableOpacity>
                        ),
                    }}
                />

                <Drawer.Screen name="FantasyPointsSystem" component={FantasyStack}
                    options={{ 
                        headerShown: true,
                        headerTintColor: '#fff',
                        headerTitle: 'Fantasy Points System',
                        headerTitleStyle: {
                            fontFamily: 'Inter-Bold',
                        fontSize: 15},
                        headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                        headerLeft: () => (
                        <TouchableOpacity onPress={() => nav.goBack()}>
                            <Image source={icons.left_arrow_white_tutorial} style={{height: 30, width: 30, marginLeft: 10}} />
                        </TouchableOpacity>
                        ),
                    }}
                    />

                <Drawer.Screen name="Terms" component={TermsDetails}
                    options={{ 
                        headerShown: true,
                        headerTintColor: '#fff',
                        headerTitle: 'Terms of Use',
                        headerTitleStyle: {
                            fontFamily: 'Inter-Bold',
                        fontSize: 15},
                        headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                        headerLeft: () => (
                        <TouchableOpacity onPress={() => nav.navigate('TabNavigationStack')}>
                            <Image source={icons.left_arrow_white_tutorial} style={{height: 30, width: 30, marginLeft: 10}} />
                        </TouchableOpacity>
                        ),
                    }}
                />

                <Drawer.Screen name="Policy" component={PolicyDetails} 
                    options={{ 
                    headerShown: true,
                    headerTintColor: '#fff',
                    headerTitle: 'Privacy Policy',
                    headerTitleStyle: {
                        fontFamily: 'Inter-Bold',
                    fontSize: 15},
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => nav.navigate('TabNavigationStack')}>
                            <Image source={icons.left_arrow_white_tutorial} style={{height: 30, width: 30, marginLeft: 10}} />
                        </TouchableOpacity>
                    ),
                    }}
                />

                <Drawer.Screen name="FAQ" component={FaqDetails} 
                options={{ 
                    headerShown: true,
                    headerTintColor: '#fff',
                    headerTitle: 'FAQ',
                    headerTitleStyle: {
                        fontFamily: 'Inter-Bold',
                    fontSize: 15},
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerLeft: () => (
                    <TouchableOpacity onPress={() => nav.navigate('TabNavigationStack')}>
                        <Image source={icons.left_arrow_white_tutorial} style={{height: 30, width: 30, marginLeft: 10}} />
                    </TouchableOpacity>
                    ),
                }}
                />

                <Drawer.Screen name="AboutUs" component={AboutUs} 
                    options={{ 
                    headerShown: true,
                    headerTintColor: '#fff',
                    headerTitle: 'About Us',
                    headerTitleStyle: {
                        fontFamily: 'Inter-Bold', 
                        fontSize: 15},
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => nav.navigate('TabNavigationStack')}>
                            <Image source={icons.left_arrow_white_tutorial} style={{height: 30, width: 30, marginLeft: 10}} />
                        </TouchableOpacity>
                    ),
                    }}
                />

                <Drawer.Screen name="ContactUs" component={ContactUs}
                    options={{ 
                    headerShown: true,
                    headerTintColor: '#fff',
                    headerTitle: 'Contact Us',
                    headerTitleStyle: {
                        fontFamily: 'Inter-Bold',
                         fontSize: 15},
                    headerStyle: {backgroundColor: colors.PRIMARY_COLOR,borderWidth: 0, elevation: 0, shadowOpacity: 0,},
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => nav.navigate('TabNavigationStack')}>
                            <Image source={icons.left_arrow_white_tutorial} style={{height: 30, width: 30, marginLeft: 10}} />
                        </TouchableOpacity>
                    ),
                    }}
                />

        </Drawer.Navigator>
    )
}

export default DrawerNavigationStack