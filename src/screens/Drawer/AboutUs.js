import React, { useState } from "react";
import { Text, View, Image, Dimensions, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ContactIcons from "../../components/ContactIcons";
import { icons } from "../../utills/Icons";
const DeviceWidth = Dimensions.get("window").width;
const DeviceHeight = Dimensions.get("window").height;

const AboutUs = () => {

  return (
    <ImageBackground source={icons.background_img} style={{height: '100%', }} >
        <View style={{flex: 1,}}>
            <View style={{padding: 15, flex: 1, alignItems: 'center', justifyContent: 'space-between'}} >
            <View style={{alignItems: 'center'}} >
                <View>
                    <Image source={icons.klutchh_logo} style={{height: 50, width: 200, resizeMode: 'contain'}} />
                </View>
                <View>
                    <Image source={icons.games_bg} style={{height: 200, borderRadius: 10, margin: 20, width: DeviceWidth-40, }} />
                </View>

                <View>
                    <Text style={{color: 'white', 
                        fontFamily: 'Inter-Medium', 
                    lineHeight: 20, fontSize: 14, marginBottom: 20}} >Klutchh is an esports fantasy platform featuring various titles for gamers to come together and create their team of favorite players and win real-time money!</Text>
                    <Text style={{color: 'white', 
                        fontFamily: 'Inter-Medium', 
                    lineHeight: 20, fontSize: 14, marginBottom: 20}} >We currently feature multiple esports titles including Valorant, PUBGM, and Free Fire Max with more being added soon.</Text>
                    <Text style={{color: 'white', 
                        fontFamily: 'Inter-Medium', 
                    lineHeight: 20, fontSize: 14, marginBottom: 20}} >Become a part of the Klutchh community and stay updated about the biggest gaming events held globally.</Text>
                </View>
            </View>
            <View style={{marginBottom: 30}} >
                <ContactIcons iconStyle={{height: 40, width: 40, marginRight: 10}} />  
            </View>
            </View>
        </View>
    </ImageBackground>
  );
};

export default AboutUs;
