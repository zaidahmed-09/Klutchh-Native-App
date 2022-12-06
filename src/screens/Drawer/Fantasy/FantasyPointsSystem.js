import React from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import colors from '../../../constants/colors';
import { icons } from '../../../utills/Icons';

export default function FantasyPointsSystem({ navigation }) {
   
    
    return (
        <SafeAreaView style={{flex: 1,  backgroundColor: colors.PRIMARY_COLOR}} >
            
            <View style={{padding: 20, marginTop: 40}} >
                
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {navigation.navigate('FantasyDetails', {params: 'valorant'})}}
                >
                <ImageBackground 
                    
                    source={icons.valorant_fantasy_bg}
                    imageStyle={{borderRadius: 10,}}
                    style={{height: 140,  borderRadius: 10,}} >
                    <View style={{position: 'absolute', top: -40}} >
                        <Image source={icons.valorant_fantasy} style={{height: 180, width: 180, resizeMode: 'contain'}} />
                    </View>

                    <View style={{height: 140, justifyContent: 'center', alignItems: 'flex-end', marginRight: 20}} >
                        <Image source={icons.valorant_logo} style={{height: 100, width: 100, resizeMode: 'contain'}} />
                    </View>
                </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {navigation.navigate('FantasyDetails', {params: 'pubg'})}}
                >
                <ImageBackground 
                    source={icons.pubg_fantasy_bg}
                    imageStyle={{borderRadius: 10,}}
                    style={{height: 140, marginTop: 60, borderRadius: 10,}} >
                    <View style={{position: 'absolute', top: -40}} >
                        <Image source={icons.pubg_fantasy} style={{height: 180, width: 180, resizeMode: 'contain'}} />
                    </View>

                    <View style={{height: 140, justifyContent: 'center', alignItems: 'flex-end', marginRight: 20}} >
                        <Image source={icons.pubg_fantasy_logo} style={{height: 100, width: 100, resizeMode: 'contain'}} />
                    </View>
                </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {navigation.navigate('FantasyDetails', {params: 'freefire'})}}
                >
                <ImageBackground 
                    source={icons.freefire_fantasy_bg}
                    imageStyle={{borderRadius: 10,}}
                    style={{height: 140, marginTop: 60, borderRadius: 10,}} >
                    <View style={{position: 'absolute', top: -40}} >
                        <Image source={icons.freefire_fantasy} style={{height: 180, width: 180, resizeMode: 'contain'}} />
                    </View>

                    <View style={{height: 140, justifyContent: 'center', alignItems: 'flex-end', marginRight: 10}} >
                        <Image source={icons.freefire_fantasy_logo} style={{height: 130, width: 130, resizeMode: 'contain'}} />
                    </View>
                </ImageBackground>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}