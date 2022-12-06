import React from "react";
import { View, Text, Image,Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import colors from "../../constants/colors";
import klutchhLogo from "../../../assets/logo_mark.png";
import vs from "../../../assets/vs.png";
import styled from "styled-components";
import { icons } from "../../utills/Icons";
import Live from "../../components/Live";


const DeviceWidth = Dimensions.get("window").width;

const LiveBtn = styled(TouchableOpacity)`
background: #FF453A;
border-radius: 4px;
width: 60px;
height: 26px;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
margin: 0px 4px;
`

const CompletedBtn = styled(TouchableOpacity)`
background: rgba(52, 199, 89, 0.75);
border-radius: 4px;
width: 90px;
height: 26px;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
margin: 0px 4px;
`

const UpcomingBtn = styled(TouchableOpacity)`
width: 90px;
height: 26px;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
margin: 0px 4px;
`


const ContestCardDetails = ({
    image1,
    image2,
    name1,
    name2,
    isHero=true, 
    tour_title, 
    contest_status, 
    startTime,
    isGroupType,
    gameType,
    isLiveMatch,
    match_status,
    match_details,
    team_details,
    border_color,
    border_color2,
}) => {
    
    const random_colors_array = ['#FFEE00', '#CE0037', '#FF326A', '#0090DE', '#FF5900', '#5CE6E6', '#BF5AF2', '#32D792', '#E948C5', '#7000FF']
    const random_color1 = random_colors_array[(Math.random() * random_colors_array.length) | 0]
    const random_color2 = random_colors_array[(Math.random() * random_colors_array.length) | 0]
  
   
  return (
    <>
    <View style={{marginTop: 10}} >
        {isGroupType
        ?
        <>
        <ImageBackground
            source={icons.pubg_header}
            style={{height: 120, alignItems: 'center', justifyContent: 'center'}}
        >
    
            {/* {contest_status
            ?
              <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', width: DeviceWidth-32}} >
                <View style={{flex: 1, marginRight: 20}} >
                  <Text style={{color:"white", fontSize: 14, marginBottom: 10,fontFamily:"Inter-Medium"}}>{tour_title}</Text>
                </View>
                <View >
                  {contest_status == 'completed'
                    ?
                    <CompletedBtn disabled={true} >
                        <Text style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            color: "white",
                        }}>COMPLETED</Text>
                    </CompletedBtn>
                    :
                    contest_status == 'upcoming'
                    ?
                    <UpcomingBtn disabled={true} >
                        <View style={{flexDirection: 'row', alignItems: 'center'}} >
                            <Image source={icons.timer} style={{height: 30, width: 30, marginRight: 4}} />
                            <View>
                              <Text style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: "#EBEBF560",
                            }}>Starts In: </Text> 
                            <Text style={{
                              fontSize: 12,
                              fontWeight: 'bold',
                              color: "white",
                          }}> {startTime}</Text> 
                            </View>
                        </View>
                    </UpcomingBtn>
                    :
                    <LiveBtn disabled={true} >
                        <Text style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            color: "white",
                        }}>LIVE</Text>
                    </LiveBtn>
                  }
                    
                </View>
            </View>
            :  
            // <View style={{ alignItems: 'center'}} >
            //   <Text style={{color:"white",fontSize: 18, marginBottom: 10, textAlign: 'center', fontFamily:"Inter-Medium"}}></Text>
            // </View>
            null
            } */}
    
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#59595900",
                    padding: 20,
                    paddingTop: 0,
                    marginTop: 40
                }}
                >
                <View
                    style={{
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flex:1
                    }}
                >
                    <View style={{}} >
                        <Text style={{color:"white", width: 200, textAlign: 'left', fontSize: 14, marginBottom: 6, fontFamily:"Inter-Medium"}}>{(tour_title).trim()}</Text>
                        <Text style={{color:"white", fontSize: 12, marginBottom: 10, fontFamily:"Inter-Medium"}}>{match_details?.name}</Text>
                    </View>
                    <View style={{}} >
                        <Text style={{color:"white",fontSize: 14, marginBottom: 6, fontFamily:"Inter-Medium"}}>{team_details} Teams Playing</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}} >
                            <Image source={icons.location} style={{height: 16, width: 16, marginRight: 8}} />
                            <Text style={{color:"white",fontSize: 12, fontFamily:"Inter-Medium"}}>
                                {(match_details?.map).charAt(0).toUpperCase() + (match_details?.map).slice(1)}
                                {/* {(match_details?.name).includes("Sanhok") ? "Sanhok"
                                : (match_details?.name).includes("Erangel") ? "Erangel"
                                : (match_details?.name).includes("Vikendi") ? "Vikendi"
                                : (match_details?.name).includes("Miramar") ? "Miramar"
                                : null
                                } */}
                            </Text>
                        </View>
                    </View>
                </View>
            </View> 

            <View style={{alignItems: 'center'}} >
            {match_status == 'live' ? (
                <View style={{marginBottom: 20}} >
                    <Text
                    style={{
                        color: "white",
                        fontSize: 11,
                        alignSelf: "center",
                        marginBottom:3,
                    }}>
                    <Live />
                    </Text>
                </View>
            ) :
               match_status == 'upcoming' ?
              (
                <View style={{flexDirection: 'row', marginTop: -12, marginBottom: 20, alignItems: 'center'}} >
                    <Image source={icons.timer} style={{height: 30, width: 30, marginRight: 4}} />
                    <View>
                        <Text style={{
                        fontSize: 12,
                        marginBottom: 2,
                        fontFamily: 'Inter-SemiBold',
                        color: "#EBEBF560",
                    }}>Starts In: </Text> 
                    <Text style={{
                        fontSize: 11,
                        fontFamily: 'Inter-Medium',
                        color: "white",
                    }}> {startTime}</Text> 
                    </View>
                </View>
            )
            : null
        }
        
        </View>

        </ImageBackground>

       
         
        </>
        :
        <ImageBackground
            source={icons.valorant_header}
            style={{height: 160, alignItems: 'center', justifyContent: 'center'}}
        >
    
            {contest_status
            ?
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: DeviceWidth-32}} >
                <View style={{flex: 1, marginRight: 20}} >
                  <Text style={{color:"white", fontSize: 16, marginBottom: 10,fontFamily:"Inter-Medium"}}>{tour_title}</Text>
                </View>
                <View >
                  {contest_status == 'completed'
                    ?
                    <CompletedBtn disabled={true} >
                        <Text style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            color: "white",
                        }}>COMPLETED</Text>
                    </CompletedBtn>
                    :
                    contest_status == 'upcoming'
                    ?
                    <UpcomingBtn disabled={true} >
                        <View style={{flexDirection: 'row', alignItems: 'center'}} >
                            <Image source={icons.timer} style={{height: 30, width: 30, marginRight: 4}} />
                            <View>
                              <Text style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: "#EBEBF560",
                            }}>Starts In: </Text> 
                            <Text style={{
                              fontSize: 12,
                              fontWeight: 'bold',
                              color: "white",
                          }}> {startTime}</Text> 
                            </View>
                        </View>
                    </UpcomingBtn>
                    :
                    <LiveBtn disabled={true} >
                        <Text style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            color: "white",
                        }}>LIVE</Text>
                    </LiveBtn>
                  }
                    
                </View>
            </View>
            :  
            <View style={{ alignItems: 'center'}} >
              <Text style={{color:"white",fontSize: 14, marginBottom: 10, textAlign: 'center', fontFamily:"Inter-Medium"}}>{tour_title}</Text>
            </View>
            }
    
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#59595900",
                    paddingTop: 15,
                    paddingBottom: 5,
                    // paddingLeft: 10,
                    // paddingRight: 10,
                    marginBottom:10,
                }}
                >
                <View
                    style={{
                    flexDirection: "row",
                    alignItems: 'center',
                    flex:1
                    }}
                >
                     <View style={{
                        backgroundColor: border_color2,
                        width:30,
                        margin:0,
                        height:24,
                    }}>
                 </View>
                    <View style={{
                        width: 52, height: 52,
                        marginLeft: -5,
                        backgroundColor:"#000235",
                        padding:0,
                        borderRadius:26,
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                    }}>
                    <Image
                    style={{ width: 38, height: 38 }}
                    resizeMode="contain"
                    source={
                        image1 !== null
                        ? {
                            uri: image1,
                            }
                        : klutchhLogo
                    }
                    />
                    </View>
                    <Text
                    style={{
                        color: colors.WHITE,
                        paddingLeft: 5,
                        fontSize:12,fontFamily:"Inter-SemiBold",
                        maxWidth:70
                    }}
                    >
                    {name1}
                    </Text>
                </View>

                <Image source={vs} 
                style={{width:30,height:37}}/>

                <View
                    style={{
                    flexDirection: "row",
                    flex:1,
                    justifyContent:"flex-end",
                    alignItems: 'center',
                    }}
                >
                    
                    <Text
                    style={{
                        color: colors.WHITE,
                        paddingLeft: 5,
                        fontSize:12,fontFamily:"Inter-SemiBold",
                        maxWidth:70,
                    }}
                    >
                    {name2}
                    </Text>
                    <View style={{
                        width: 52, height: 52,
                        backgroundColor:"#000235",
                        padding:0,
                        borderRadius:26,
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                    }}>
                    <Image
                    style={{ width: 38, height: 38 }}
                    resizeMode="contain"
                    source={
                        image2 !== null
                        ? {
                            uri: image2,
                            }
                        : klutchhLogo
                    }
                    />
                    </View>

                    <View style={{
                        backgroundColor: border_color2,
                        width:30,
                        margin:0,
                        height:24,
                    }}>
                    </View>
                    
                </View>
            </View> 

            {isLiveMatch && (
                <View>
                    <Text
                    style={{
                        color: "white",
                        fontSize: 11,
                        alignSelf: "center",
                        marginBottom:3,
                    }}>
                    <Live />
                    </Text>
                </View>
            )}
         
        </ImageBackground>
        
        }
    
    </View>
    </>
  )
}

export default ContestCardDetails