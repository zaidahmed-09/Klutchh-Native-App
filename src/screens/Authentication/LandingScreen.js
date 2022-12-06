import { View, Text, Image, Button, Dimensions, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Platform } from 'react-native'
import React, {useState} from 'react'
import styled from 'styled-components';
import colors from '../../constants/colors';
import { GlobalButton } from '../../components/reusables';

import {icons} from '../../utills/Icons'
import { LocalNotification } from '../../utills/LocalPushController';


const DeviceWidth = Dimensions.get("window").width;
const DeviceHeight = Dimensions.get("window").height;


const TextWhite = styled(Text)`
    color: white;
    margin-bottom: 4px;
`

export default function LandingScreen({navigation}) {
    const handleButton = () => {
        LocalNotification();
    }


  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', backgroundColor: colors.PRIMARY_COLOR,}} >
            <View style={{marginTop: 15, justifyContent: 'space-between', alignItems: 'center', flex: 1}} >
                <View style={{}} >
                <Image style={{
                    height: 20,
                    resizeMode: 'contain',
                }}  source={require("../../../assets/name.png")} />
                </View>
                <View style={{}} >
                <Image  source={icons.app_hero} style={{
                height: Platform.OS == 'ios' ? DeviceHeight*0.5 : DeviceHeight*0.5, 
                width: Platform.OS == 'ios' ? DeviceWidth : DeviceWidth, 
                //resizeMode: 'contain'
            }} />
                </View>
                <View style={{ width: DeviceWidth, paddingHorizontal: 16, alignItems: 'center'}} >
                    <View style={{alignItems: 'center', marginBottom: 15}} >
                        <TextWhite style={{fontSize: 24, fontFamily:"Inter-Bold"}}>Are you ready to Klutchh?</TextWhite>
                        <TextWhite style={{fontSize:12, fontFamily:"Inter-Medium"}}>
                        India’s Fastest Growing Esports Fantasy Platform.
                        
                        </TextWhite>
                        <TextWhite style={{fontSize:12, fontFamily:"Inter-Medium", marginTop:-4}}>
                        For the gamers by the gamers.
                        </TextWhite>
                    </View>

                    <GlobalButton 
                        //onPress={handleButton}
                        onPress={()=>navigation.navigate("Signup",{isRefernal: false,})}
                        >
                            <TextWhite style={{fontFamily:"Inter-Bold", fontSize:16 }} >
                            REGISTER
                            </TextWhite>
                    </GlobalButton>


                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: DeviceWidth, paddingHorizontal: 16, marginBottom: 10}} >
                        <View  >
                            <TextWhite style={{fontSize:11, fontFamily:"Inter-Medium" }}>
                                Invited by a friend?
                                </TextWhite>
                                <TextWhite  onPress={()=>navigation.navigate("Signup",{isRefernal: true,})} 
                                style={{color: '#FF326A', fontFamily:"Inter-SemiBold",  marginTop:-4}} >
                                Enter Referral Code
                            </TextWhite>
                        </View>
                        <View style={{alignItems: 'flex-end'}} >
                        <TextWhite     style={{fontSize:11, fontFamily:"Inter-Medium" }}
                                >
                            Already a User?
                            </TextWhite>
                            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                            <TextWhite style={{color: '#FF326A', fontFamily:"Inter-SemiBold", marginTop:-4}} >
                            Log In
                            </TextWhite>
                            </TouchableOpacity>
                        </View>
                    </View>
                  
                </View>
                
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        height: 400,
    },  
    slide: {
      //flex: 1,
      height: 400,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 24,
      lineHeight: 22,
      marginBottom: 8,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    subTitle: {
        color: '#fff',
        fontSize: 11,
        lineHeight: 15,
        fontWeight: 'bold',
        textAlign: 'center'
      }
  })
   