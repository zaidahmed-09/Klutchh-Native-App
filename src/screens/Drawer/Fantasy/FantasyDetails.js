import React,{useState} from 'react'
import {Text, View, SafeAreaView, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity, ScrollView, } from 'react-native'
import { TextWhite } from '../../../components/reusables';
import colors from '../../../constants/colors';
import { icons } from '../../../utills/Icons';
import bgNew from "../../../../assets/bgNew.png"

const FantasyDetails = (props) => {

    const ValorantPoints = () => {
        return(
            <View style={{padding: 15,}} >
                <View style={{alignItems: 'center', marginVertical: 10}} >
                    <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 24}} >POINTS SYSTEM</TextWhite>

                    <View style={[styles.opacityCardContainer, {width: '100%', marginBottom: 10 }]} >
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}} >
                            <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 14, width: 120, textAlign: 'center'}} >EVENTS</TextWhite>
                            <View style={styles.dividerStyle} />
                            <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 14, width: 120, textAlign: 'center'}}  >FANTASY POINTS</TextWhite>
                        </View>

                        <View style={styles.opacityCard} >
                            <View style={{flexDirection: 'row',justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, marginBottom: 8, width: 120, textAlign: 'center', marginTop: 10}} >Average Combat Score (ACS)</TextWhite>
                                <View style={[styles.dividerStyle, {height: 50}]} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, marginBottom: 8, width: 120, textAlign: 'center', marginTop: 10}}  >As per player performance</TextWhite>
                            </View>
                            <View style={{flexDirection: 'row',  borderTopWidth: 1, borderColor: '#ffffff30', justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >Kills</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >+1 pt</TextWhite>
                            </View>
                            <View style={{flexDirection: 'row',  borderTopWidth: 1, borderColor: '#ffffff30', justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >Deaths</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >-1 pt</TextWhite>
                            </View>
                            <View style={{flexDirection: 'row',  borderTopWidth: 1, borderColor: '#ffffff30', justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >Assists</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >+0.5 pt</TextWhite>
                            </View>
                            <View style={{flexDirection: 'row',  borderTopWidth: 1, borderColor: '#ffffff30', justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >First Kills</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >+1.5 pt</TextWhite>
                            </View>
                            <View style={{flexDirection: 'row',  borderTopWidth: 1, borderColor: '#ffffff30', justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >1v5 Clutch</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >+7.5 pt</TextWhite>
                            </View>
                            <View style={{flexDirection: 'row',  borderTopWidth: 1, borderColor: '#ffffff30', justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >1v4 Clutch</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >+6 pt</TextWhite>
                            </View>
                            <View style={{flexDirection: 'row',  borderTopWidth: 1, borderColor: '#ffffff30', justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >1v3 Clutch</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >+4.5 pt</TextWhite>
                            </View>
                            <View style={{flexDirection: 'row',  borderTopWidth: 1, borderColor: '#ffffff30', justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >1v2 Clutch</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >+3 pt</TextWhite>
                            </View>
                            <View style={{flexDirection: 'row',  borderTopWidth: 1, borderColor: '#ffffff30', justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >1v1 Clutch</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >+1.5 pt</TextWhite>
                            </View>
                            <View style={{flexDirection: 'row',  borderTopWidth: 1, borderColor: '#ffffff30', justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >Ace</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >+5 pt</TextWhite>
                            </View>
                            <View style={{flexDirection: 'row',  borderTopWidth: 1, borderColor: '#ffffff30', justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >Spike Plant</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >+1 pt</TextWhite>
                            </View>
                            <View style={{flexDirection: 'row',  borderTopWidth: 1, borderColor: '#ffffff30', justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >Spike Diffuse</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >+1 pt</TextWhite>
                            </View>
                        </View>
                    </View>
                </View>

                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, }} >Notes</TextWhite>

                <TextWhite  style={{fontFamily: 'Inter-Medium',fontSize: 15, lineHeight: 20}}>
                    {'\n'}{'\n'}1. You have 15 credits. Use these credits to select five players and set the multipliers (2x, 1.75x, 1.5x) among your top three picks.
                    {'\n'}{'\n'}2. The score is calculated on the basis of the above mentioned factors.
                </TextWhite>
            </View>
        )
    }

    const PubgPoints = () => {
        return(
            <View style={{padding: 15}} >
                <View style={{alignItems: 'center', marginVertical: 10}} >
                    <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 12, fontSize: 24}} >POINTS SYSTEM</TextWhite>

                    <View style={[styles.opacityCardContainer, {width: '100%', marginBottom: 10 }]} >
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}} >
                            <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center'}} >EVENTS</TextWhite>
                            <View style={styles.dividerStyle} />
                            <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center'}}  >FANTASY POINTS</TextWhite>
                        </View>

                        <View style={styles.opacityCard} >
                            <View style={{flexDirection: 'row',justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >Kills</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >+1pt</TextWhite>
                            </View>
                            <View style={{flexDirection: 'row', marginBottom: 4, borderTopWidth: 1, borderColor: '#ffffff30', justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >Placement Points (PP)</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >+1pt</TextWhite>
                            </View>
                        </View>
                    </View>
                </View>

                <TextWhite style={{fontFamily: 'Inter-Medium',  fontSize: 15,}}>Notes</TextWhite>

                <TextWhite style={{fontFamily: 'Inter-Medium',fontSize: 15, lineHeight: 20}}>
                   {'\n'}{'\n'}1. You have 15 credits. Use these credits to select four teams and set the multipliers (2x, 1.75x, 1.5x) among your top three picks.
                    {'\n'}{'\n'}2. Your points are calculated on the basis of the total Kills and Placement Points (PP) your picks have secured.
                </TextWhite>
            </View>
        )
    }

    const FreefirePoints = () => {
        return(
            <View style={{padding: 15}} >
                <View style={{alignItems: 'center', marginVertical: 10}} >
                    <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 12, fontSize: 24}} >POINTS SYSTEM</TextWhite>

                    <View style={[styles.opacityCardContainer, {width: '100%', marginBottom: 10 }]} >
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}} >
                            <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center'}} >EVENTS</TextWhite>
                            <View style={styles.dividerStyle} />
                            <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center'}}  >FANTASY POINTS</TextWhite>
                        </View>

                        <View style={styles.opacityCard} >
                            <View style={{flexDirection: 'row',justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >Kills</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >+1pt</TextWhite>
                            </View>
                            <View style={{flexDirection: 'row', marginBottom: 4, borderTopWidth: 1, borderColor: '#ffffff30', justifyContent: 'space-around'}} >
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}} >Placement Points (PP)</TextWhite>
                                <View style={styles.dividerStyle} />
                                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, width: 120, textAlign: 'center', marginTop: 10}}  >+1pt</TextWhite>
                            </View>
                        </View>
                    </View>
                </View>

                <TextWhite style={{fontFamily: 'Inter-Medium',  fontSize: 15,}}>Notes</TextWhite>

                <TextWhite style={{fontFamily: 'Inter-Medium', fontSize: 15, lineHeight: 20}}>
                   {'\n'}{'\n'}1. You have 15 credits. Use these credits to select four teams and set the multipliers (2x, 1.75x, 1.5x) among your top three picks.

                    {'\n'}{'\n'}2. Your points are calculated on the basis of the total Kills and Placement Points (PP) your picks have secured.
                </TextWhite>
            </View>
        )
    }

    const [game, setGame] = useState(props.route.params.params);

    return (
    <ImageBackground 
    resizeMode="cover"
    source={bgNew}
    style={{
        flex:1,
    }}>
        <SafeAreaView style={{flex: 1, backgroundColor: colors.PRIMARY_COLOR}} >
            <ScrollView>
            <ImageBackground 
                source={
                    game == 'valorant' ? icons.valorant_fantasy_bg :
                    game == 'pubg' ? icons.pubg_fantasy_bg :
                    game == 'freefire' ? icons.freefire_fantasy_bg : null
                }
                imageStyle={{}}
                style={{height: 140, marginTop: 60, borderRadius: 10,}} >
                <View style={{position: 'absolute', top: -40}} >
                    <Image 
                        source={
                            game == 'valorant' ? icons.valorant_fantasy :
                            game == 'pubg' ? icons.pubg_fantasy :
                            game == 'freefire' ? icons.freefire_fantasy : null
                        }
                        style={{height: 180, width: 180, resizeMode: 'contain'}} />
                </View>

                <View style={{height: 140, justifyContent: 'center', alignItems: 'flex-end', marginRight: 20}} >
                    <Image 
                        source={
                            game == 'valorant' ? icons.valorant_logo :
                            game == 'pubg' ? icons.pubg_fantasy_logo :
                            game == 'freefire' ? icons.freefire_fantasy_logo : null
                        }
                        style={{height: game == 'freefire' ? 130 : 100, width: game == 'freefire' ? 130 : 100, resizeMode: 'contain'}} />
                </View>
            </ImageBackground>


            <View>
                {game == 'valorant' ? <ValorantPoints/>
                :
                    game == 'pubg' ? <PubgPoints/> 
                :
                    game == 'freefire' ? <FreefirePoints/> 
                :   null
                }
            </View>
            </ScrollView>
        </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
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
        paddingHorizontal: 15,
      },
      dividerStyle: {height: 40, backgroundColor: '#FFFFFF30', width: 1}
})
export default FantasyDetails