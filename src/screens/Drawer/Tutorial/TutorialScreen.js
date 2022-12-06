import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, SafeAreaView, ScrollView, Platform, } from 'react-native'

import Swiper from 'react-native-swiper'
import colors from '../../../constants/colors'
import { icons } from '../../../utills/Icons'

import { completeLogin, setStackMode } from '../../../redux/actions/auth'
import { useDispatch } from 'react-redux'

const DeviceWidth = Dimensions.get("window").width;
const DeviceHeight = Dimensions.get("window").height;

const swiperData = [
    {
        id: 1,
        gif_video: icons.gif_1,
        gif: 'https://media.giphy.com/media/3o85xAuO9kQ9c4mBFK/giphy.gif',
        //video: icons.Video_1,
        title: 'Pick a Game',
        subTitle: "Select your favorite esports title and enter one of their upcoming matches."
    },
    {
        id: 2,
        gif_video: icons.gif_2,
        gif: 'https://media.giphy.com/media/l3q2P6iVtcvzuUfGo/giphy.gif',
        //video: icons.Video_1,
        title: 'Enter a contest',
        subTitle: "Every match has multiple contests. Select a contest starting from INR 1!"
    },
    {
        id: 3,
        gif_video: icons.gif_3,
        gif: 'https://media.giphy.com/media/XgSCVdHUgGygoUHFGv/giphy.gif',
        //video: icons.Video_1,
        title: 'Create a Team',
        subTitle: "It's time to put your knowledge to the test. Create your team and choose your MVPs."
    },
    {
        id: 4,
        gif_video: icons.gif_4,
        gif: 'https://media.giphy.com/media/o3Vt7LBQZa8pi/giphy.gif',
        //video: icons.Video_1,
        title: 'Results',
        subTitle: "Check the leaderboard in the completed matches section and see how your teams performed",
    },
    {
        id: 5,
        gif_video: icons.gif_5,
        gif: 'https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif',
        //video: icons.Video_1,
        title: 'Quick Withdrawals',
        subTitle: "Withdraw your winnings without any hassle. It's simple and secure."
    },
]
const TutorialScreen = (props) => {



    const dispatch = useDispatch();

    
   var stackMode = ''
   var token = ''
    // const { stackMode, token } = props.route.params;
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const [currentIdx, setCurrentIdx] = useState(0);


    const leftButton = (currentIdx) => {
        if(currentIdx != 0){
            setCurrentIdx(prev => prev-1)
        }
    }

    const rightButton = (currentIdx) => {
        if(currentIdx <= 4){
            setCurrentIdx(prev => prev+1)
        }
        
    }

    const navigateToHome = () => {
        console.log("navigateToHome =>> ");
      
        if(props?.route?.params?.fromScreen){
            console.log("====navigateToHome =>> ");
            props?.navigation.navigate('Home')
        }else{
            dispatch(completeLogin(token));
            dispatch(setStackMode(stackMode));
        }
    }

    useEffect(() => {


        if(props?.route?.params?.fromScreen){
            stackMode = props?.route?.params
            token = props?.route?.params?.token
        }
    }, [])
    
  

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', backgroundColor: colors.PRIMARY_COLOR}} >
            
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}} >
                <Text style={{fontSize: 18, color: '#FFFFFF', marginLeft: 15}} >Tutorial</Text>
                <TouchableOpacity
                    onPress={() => {navigateToHome()}}
                    style={{height: 50, width: 50, alignItems: 'center', justifyContent: 'center', marginRight: 10}} >
                    <Text style={{fontSize: 16, color: '#FF326A'}} >Skip</Text>
                </TouchableOpacity>
        
            </View>
            
            <Image
                source={icons.klutchh_logo}
                style={{height: 80, width: 160, marginTop: -20, resizeMode: 'contain'}}
            />
                    <Swiper 
                    
                    //index={currentIdx}
                    height={DeviceHeight/2 - 50}
                    style={styles.wrapper} 
                    activeDot={
                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', width: 12, height: 12, borderRadius: 6, margin: 3}} >
                            <View style={{backgroundColor: '#FF326A', width: 10, height: 10, borderRadius: 5}} />
                        </View>
                    }
                    dot={
                        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', width: 10, height: 10, borderRadius: 5, margin: 3}} >
                            <View style={{backgroundColor:'#211134', width: 8, height: 8,borderRadius: 4,}} />
                        </View>
                        }
                        paginationStyle={{ position: 'absolute', bottom: 20, height: 30}}
                        showsButtons={false}>
                        {swiperData.map((item) => (
                            <View style={styles.slide}>
                                <Image
                                     source={item.gif_video}  
                                    //source={icons.app_hero}
                                    style={{height: DeviceHeight/2 - 50, width: DeviceWidth, resizeMode: 'contain', marginBottom: 10}}
                                />
                                {/* <View style={{ height: Platform.OS == 'ios' ? '114%' : '100%', width: Platform.OS == 'ios' ? '100%' : '100%',  alignItems: 'center', justifyContent: 'center', marginVertical: 40}} >
                                <Video
                                    shouldPlay={true}
                                    ref={video}
                                    style={{ height: Platform.OS == 'ios' ? '114%' : '100%', marginTop: 120, width: Platform.OS == 'ios' ? '100%' : '100%',}}
                                    source={
                                        item.id == 1 
                                        ? icons.Video_1 
                                        : item.id == 2
                                        ? icons.Video_2
                                        : item.id == 3
                                        ? icons.Video_3 
                                        : item.id == 4
                                        ? icons.Video_4
                                        : item.id == 5
                                        ? icons.Video_5 
                                        : icons.Video_1 
                                    }
                                    //useNativeControls
                                    //resizeMode="contain"
                                    isLooping
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />

                                </View> */}
                                <View style={[{height: 130, paddingBottom: 20, paddingTop:  0, paddingHorizontal: 20, marginTop: Platform.OS == 'ios' ? -20 : 20, alignItems: 'center', paddingHorizontal: 40}, Platform.OS == 'ios' ? {position: 'absolute', bottom: -200, } : null]} >
                            
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.subTitle}>{item.subTitle}</Text>
                                </View>
                            </View>
                        ))}
                </Swiper> 

                <View style={{}} >
                    <Text style={{fontSize: 18, 
                        fontFamily: 'Inter-SemiBold', 
                        marginBottom: 20, color: colors.NEW_THEME_RED}} >Swipe</Text>
                </View>

{/* 
                <View style={{padding: 30, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', height: 80, width: '100%',}} >
                    <TouchableOpacity 
                        onPress={() => {leftButton(currentIdx)}}
                        style={{height: 40 ,width: 40, backgroundColor: '#FF326A', borderRadius: 20, alignItems: 'center', justifyContent: 'center'}} >
                        <Image source={icons.left_arrow_white_tutorial} style={{height: 28, width: 28, marginRight: 4}} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {rightButton(currentIdx)}}
                        style={{height: 40 ,width: 40, backgroundColor: '#FF326A', borderRadius: 20, alignItems: 'center', justifyContent: 'center'}} >
                        <Image source={icons.right_arrow_white_tutorial} style={{height: 28, width: 28, marginLeft: 4}} />
                    </TouchableOpacity>
                </View> */}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 600,
    },  
    slide: {
      //flex: 1,
      //height: 450,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 24,
      lineHeight: 26,
      marginBottom: 8,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Inter-Bold',
    },
    subTitle: {
        color: '#fff',
        fontSize: 11,
        lineHeight: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Inter-Medium',
      }
  })
   

export default TutorialScreen