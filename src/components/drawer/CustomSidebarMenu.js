import React, {useState} from 'react'
import { Text, View, Modal, StyleSheet, SafeAreaView, TouchableOpacity, Image, Dimensions, Platform, } from 'react-native';

import colors from '../../constants/colors';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { icons } from '../../utills/Icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { GlobalButton, TextWhite } from '../reusables';
import ContactIcons from '../ContactIcons';

import { logoutUser } from "../../redux/actions/auth";

const DeviceWidth = Dimensions.get("window").width;

const AddMoneyBtn = styled(TouchableOpacity)`
background:#FF326A;
border-radius: 4px;
width: 75px;
height: 25px;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
margin: 0px 0px 0px 20px;
`



var auth = {
    "alertModal": null, 
    "loggedIn": true, 
    "matchID": null, 
    "stackMode": "default",
     "tabNavigation": null, 
     "user": null,
}
const CustomSidebarMenu = (props) => {

    const auth = useSelector((state) => state.auth);

    const dispatch = useDispatch();
  
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.PRIMARY_COLOR}}>

            <View style={{ paddingHorizontal: 20, borderBottomWidth: 1, marginBottom: 10, marginTop: 0, borderColor: '#EBEBF560'}} >
                {auth?.loggedIn && (
                    <Pressable
                            onPress={() => props.navigation.navigate("ProfileStack")}
                            style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "none",
                            marginBottom: 20,
                            marginTop: 20,
                            }}
                        >
                        <View
                            style={{
                            flexDirection: "row",
                            alignItems: "center",
                            }}
                        >
                            <Image
                                style={{ width: 44, height: 44, marginRight: 17 }}
                                source={{
                                uri: `data:image/image/png;base64,${auth?.user?.avatar_id?.avatar_data?.toString('base64')}`
                                }}
                                //source={icons.avatar1}
                            />

                            <View>
                                <Text
                                style={{
                                fontSize: 16,
                                color: "#fff",
                                fontWeight: "bold",
                                }}
                            >
                                {auth?.user?.name}
                            </Text>
                            <Text
                                style={{
                                fontSize: 10,
                                color: "#fff",
                                marginTop: 2,

                                opacity: 0.7,
                                }}
                            >
                                {auth?.user?.email}
                            </Text>
                            </View>

                            <Image
                                style={{ width: 20, height: 20, marginLeft: 25 }}
                                source={icons.right_arrow_white}
                            />
                        </View>
                        
                    </Pressable>
                )}
            </View>



            <DrawerContentScrollView {...props}>
                
                                    
                <View style={{ paddingHorizontal: 20, marginTop: Platform.OS == 'ios' ? -40 : 0}} >
                        <Pressable
                            onPress={() => props.navigation.navigate("Home")}
                            style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "none",
                            marginBottom: 16,
                            }}
                        >
                            <Image source={icons.homeInActive } style={[styles.drawerIcon, {height: 22, width: 22}]} />
                            <Text
                            style={{
                                color: "white",
                                fontSize: 14,
                                marginLeft: 10,
                                fontFamily: 'Inter-SemiBold',
                            }}
                            >
                            Home
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={() => props.navigation.navigate("Tutorial", {fromScreen: 'Home'})}
                            style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "none",
                            marginBottom: 16,
                            }}
                        >
                            <Image source={icons.play_button} style={[styles.drawerIcon, {height: 22, width: 22}]} />
                            <Text
                            style={{
                                color: "white",
                                fontSize: 14,
                                marginLeft: 10,
                                fontFamily: 'Inter-SemiBold',
                            }}
                            >
                            Tutorial
                            </Text>
                        </Pressable>

                        <Pressable
                            //onPress={() => navigation.navigate("NewsFeed")}
                            style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "none",
                            marginBottom: 16
                            }}
                        >
                            <Image source={icons.wallet_balance} style={styles.drawerIcon} />
                            <Text
                            style={{
                                color: "white",
                                fontSize: 14,
                                marginLeft: 10,
                                fontFamily: 'Inter-SemiBold',
                            }}
                            >
                            Wallet Balance
                            </Text>

                            <View>
                            <AddMoneyBtn onPress={() => {props.navigation.navigate("AddMoneyForm")}}>
                                <Text style={{
                                fontSize: 10,
                                fontWeight: 'bold',
                                color: "white",
                                fontFamily: 'Inter-SemiBold',
                                }}>ADD CASH</Text>
                            </AddMoneyBtn>
                            </View>

                        </Pressable>
                        
                        <Pressable
                            //onPress={() => navigation.navigate("NewsFeed")}
                            style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "none",
                            marginBottom: 8
                            }}
                        >
                            <Image source={icons.refer_and_earn} style={styles.drawerIcon} />
                            <Text
                            style={{
                                color: "white",
                                fontSize: 14,
                                marginLeft: 10,
                                fontFamily: 'Inter-SemiBold',
                            }}
                            >
                            Refer and Earn
                            </Text>
                            <View>
                            <AddMoneyBtn onPress={() => {props.navigation.navigate("ProfileStack")}}>
                                <Text style={{
                                fontSize: 10,
                                fontWeight: 'bold',
                                color: "white",
                                fontFamily: 'Inter-SemiBold',
                                }}>REFER NOW</Text>
                            </AddMoneyBtn>
                            </View>
                        </Pressable>
                        
                    

                        {/* <Pressable
                            onPress={() => props.navigation.navigate("NewsFeed")}
                            style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "none",
                            }}
                        >
                            <Image source={icons.news_feed} style={styles.drawerIcon} />
                            <Text
                            style={{
                                color: "white",
                                fontSize: 14,
                                marginLeft: 10,
                                fontFamily: 'Inter-SemiBold',
                            }}
                            >
                            News Feed
                            </Text>
                        </Pressable> */}
                    </View>


                    <View style={styles.drawerDivider} />

                    <View style={{ paddingHorizontal: 20}} >
                    <Pressable
                        onPress={() => props.navigation.navigate("FantasyPointsSystem")}
                        style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 16,
                        backgroundColor: "none",
                        }}
                    >
                        <Image source={icons.fantasy_points} style={styles.drawerIcon} />
                        <Text
                        style={{
                            color: "white",
                            fontSize: 14,
                            marginLeft: 10,
                            fontFamily: 'Inter-SemiBold',
                        }}
                        >
                        Fantasy Point System
                        </Text>
                    </Pressable>
                    <Pressable
                    onPress={() => {
                        props.navigation.navigate("Terms")
                    }}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 16,
                        backgroundColor: "none",
                    }}
                    >
                    <Image source={icons.terms_of_use} style={[styles.drawerIcon, {height: 22, width: 22}]} />
                    <Text
                        style={{
                        color: "white",
                        fontSize: 14,
                        marginLeft: 10,
                        fontFamily: 'Inter-SemiBold',
                        }}
                    >
                        Terms of Use
                    </Text>
                    </Pressable>
                    <Pressable
                    onPress={() => {
                        props.navigation.navigate("Policy")
                    }}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "none",
                        marginBottom: 16,
                    }}
                    >
                    <Image source={icons.privacy_policy} style={styles.drawerIcon} />
                    <Text
                        style={{
                        color: "white",
                        fontSize: 14,
                        marginLeft: 10,
                        fontFamily: 'Inter-SemiBold',
                        }}
                    >
                        Privacy Policy
                    </Text>
                    </Pressable>
                    <Pressable
                    onPress={() => {
                        props.navigation.navigate("FAQ")
                    }}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "none",
                    }}
                    >
                    <Image source={icons.faq_icon} style={styles.drawerIcon} />
                    <Text
                        style={{
                        color: "white",
                        fontSize: 14,
                        marginLeft: 10,
                        fontFamily: 'Inter-SemiBold',
                        }}
                    >
                        FAQ
                    </Text>
                    </Pressable>
                    </View>


                    <View style={styles.drawerDivider} />

                    <View style={{ paddingHorizontal: 20}} >

                        <Pressable
                        onPress={() => props.navigation.navigate("AboutUs")}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 16,
                            backgroundColor: "none",
                        }}
                        >
                        <Image source={icons.about_us} style={[styles.drawerIcon, {height: 18, width: 18}]} />
                        <Text
                            style={{
                            color: "white",
                            fontSize: 14,
                            marginLeft: 10,
                            fontFamily: 'Inter-SemiBold',
                            }}
                        >
                            About Us
                        </Text>
                        </Pressable>

                        <Pressable
                        onPress={() => props.navigation.navigate("ContactUs")}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 16,
                            backgroundColor: "none",
                        }}
                        >
                        <Image source={icons.contact_us} style={[styles.drawerIcon, {marginRight: 0, height: 22, width: 22}]} />
                        <Text
                            style={{
                            color: "white",
                            fontSize: 14,
                            marginLeft: 10,
                            fontFamily: 'Inter-SemiBold',
                            }}
                        >
                            Contact Us
                        </Text>
                        </Pressable>

                     
                        <Pressable
                            onPress={() => {
                                props.navigation.toggleDrawer();
                                setShowLogoutModal(true)
                            }}
                            style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "none",
                            }}
                        >
                            <Image source={icons.logout} style={[styles.drawerIcon, {height: 20, width: 20}]} />
                            <Text
                            style={{
                                color: "white",
                                fontSize: 14,
                                marginLeft: 10,
                                fontFamily: 'Inter-SemiBold',
                            }}
                            >
                            Log Out
                            </Text>
                        </Pressable>
                    </View>

                    <View style={styles.drawerDivider} />

                    <View style={{marginTop: -25}} >
                        <ContactIcons iconStyle={{height: 32, width: 32, marginRight: 10}}  />
                    </View>

                    <View>
                        <Image source={icons.k_icon} style={{opacity: 0.5, marginTop: -10, marginLeft: -40, height: 220, width: DeviceWidth, resizeMode: 'contain'}} />
                    </View>


            </DrawerContentScrollView>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={showLogoutModal}
                    onRequestClose={() => {
                    setShowLogoutModal(false);
                    }}
                    onBackdropPress={() => {
                    setShowLogoutModal(false);
                    }}
                >
                    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)',  alignItems: 'center', justifyContent: 'center'}} >
                        <View style={{alignItems: 'center',  backgroundColor: colors.PRIMARY_COLOR, borderRadius: 10, borderWidth: 0.5, borderColor: 'white', height: 150, width: '90%'}} >
                            <TextWhite style={{marginTop: 30}} >Are you sure you want to Log Out?</TextWhite>
                            
                            <View style={{width: '100%', paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center'}} >
                                <View style={{flex: 1, marginTop: 30, marginRight: 10}} >
                                    <GlobalButton onPress={() => dispatch(logoutUser())} >
                                    <TextWhite>LOG OUT</TextWhite>
                                    </GlobalButton>
                                </View>
                                <View style={{flex: 1, marginTop: 30, marginLeft: 10}} >
                                    <GlobalButton onPress={() => setShowLogoutModal(false)}>
                                    <TextWhite>CANCEL</TextWhite>
                                    </GlobalButton>
                                </View>
                            </View>

                        </View>
                    </View>
                </Modal>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
      resizeMode: 'center',
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      alignSelf: 'center',
    },
    iconStyle: {
      width: 15,
      height: 15,
      marginHorizontal: 5,
    },
    customItem: {
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: colors.PRIMARY_COLOR,
      width: 250,
      padding: 10,
  
      position: "relative",
    },
    menuItem: {
      color: "#FFF",
      fontSize: 16,
  
      marginTop: 20,
    },
    menuText: {
      color: "#FFF",
      fontSize: 16,
    },
    header: {
      marginTop: 20,
      marginBottom: 20,
      color: "#FFF",
    },
    drawerDivider: {
      backgroundColor: '#EBEBF560',
      height: 1,
      margin: 20,
      marginVertical: 15
    },
    drawerIcon: {
      height: 24,
      width: 24,
      marginRight: 6,
      resizeMode: 'contain'
    },
    opacityCardContainer: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderWidth: 0.5,
      borderColor: "rgba(255, 255, 255, 0.3)",
      borderRadius: 8,
      marginTop: 28,
    },
    opacityCard: {
        backgroundColor:"rgba(0, 1, 27, 0.2)",
        borderBottomEndRadius:8,
        borderBottomStartRadius:8,
        padding: 15,
    },
  });

export default CustomSidebarMenu