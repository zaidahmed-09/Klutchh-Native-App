import React from "react";
import { View, Text, Image,Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import colors from "../constants/colors";
import klutchhLogo from "../../assets/logo_mark.png";
import vs from "../../assets/vs.png";
import styled from "styled-components";
import { icons } from "../utills/Icons";
import Live from './Live';

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


const HeroContestCard = ({hideImage, image1,image2,name1,name2,isHero=true, game_type, tour_title, contest_status, startTime, 
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
      {isGroupType ? (
        <>
           {!hideImage ? 
   <ImageBackground 
      source={
      game_type == 'BGMI' || isGroupType
        ? icons.pubg_header :
      game_type == 'VALORANT'
        ? icons.valorant_header :
      game_type == 'FREEFIRE'
        ? icons.free :
        null
      }
      style={{height: 150, width: DeviceWidth}}
    >

        <View>
            
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#59595900",
                    padding: 20,
                    paddingTop: 50
                }}
                >
                <View
                    style={{
                    flexDirection: "row",
                    //alignItems: 'center',
                    justifyContent: 'space-between',
                    flex:1,
                    }}
                >
                    <View style={{marginTop: 10}} >
                        
                        {tour_title
                        ?
                          <Text style={{color:"white", textAlign: "left", width: 200, fontSize: 14, marginBottom: 6, fontFamily:"Inter-Medium"}}>{tour_title}</Text>
                        :
                        <Text style={{color:"white", textAlign: "left", width: 200, fontSize: 14, marginBottom: 6, fontFamily:"Inter-Medium"}}>{match_details?.tour_id?.name}</Text>
                        }
                        <Text style={{color:"white", textAlign: "left", fontSize: 12, marginBottom: 10, fontFamily:"Inter-Medium"}}>{match_details?.name}</Text>
                    </View>
                    <View style={{marginTop: 10}} >
                        <Text style={{color:"white",fontSize: 14, marginBottom: 6, fontFamily:"Inter-Medium"}}>{match_details?.teams[0]?.team_members?.length + match_details?.teams[1]?.team_members?.length} Teams Playing</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}} >
                            <Image source={icons.location} style={{height: 16, width: 16, marginRight: 8}} />
                            <Text style={{color:"white",fontSize: 12, fontFamily:"Inter-Medium"}}>
                              {match_details?.map}
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
                <View style={{flexDirection: 'row', marginTop: -42, marginBottom: 20, alignItems: 'center'}} >
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
            : match_status == 'completed' ? (
              <View style={{position: 'absolute', top: -30}} >
                <CompletedBtn disabled={true} >
                    <Text style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: "white",
                    }}>COMPLETED</Text>
                </CompletedBtn>
              </View>
            ) 
            :null
        }
        
            </View>
        </View>

    </ImageBackground>
    :
    <View 
    style={{height: 100, width: DeviceWidth}}
  >

        <View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#59595900",
                    padding: 20
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
                    <View style={{marginTop: 10, width: '60%'}} >
                        <Text style={{color:"white",fontSize: 14, marginBottom: 6, fontFamily:"Inter-Medium"}}>{tour_title}</Text>
                        <Text style={{color:"white", fontSize: 12, marginBottom: 10, fontFamily:"Inter-Medium"}}>{match_details?.name}</Text>
                    </View>
                    <View style={{}} >
                        <Text style={{color:"white",fontSize: 14, marginBottom: 6, fontFamily:"Inter-Medium"}}>{match_details?.teams[0]?.team_members?.length + match_details?.teams[0]?.team_members?.length} Teams Playing</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}} >
                            <Image source={icons.location} style={{height: 16, width: 16, marginRight: 8}} />
                            <Text style={{color:"white",fontSize: 12, fontFamily:"Inter-Medium"}}>
                            {match_details?.map}
                            </Text>
                        </View>
                    </View>
                </View>
            </View> 

        </View>
    </View>
  }
  </>
      ) : (
        <>
           {!hideImage ? 
   <ImageBackground 
      source={
      game_type == 'BGMI'
        ? icons.pubg_header :
      game_type == 'VALORANT'
        ? icons.valorant_header :
      game_type == 'FREEFIRE'
        ? icons.free :
        icons.valorant_header
      }
      style={{height: 200, paddingTop: 25, width: DeviceWidth}}
    >
    {isHero && <View style={{
        padding: 15,
        paddingTop: 30,
    }}>

        {contest_status
        ?
          <View style={{flexDirection: 'row', marginTop: 15,  justifyContent: 'space-between', width: DeviceWidth-32}} >
            <View style={{flex: 1, marginRight: 20}} >
              <Text style={{color:"white", fontSize: 14, lineHeight: 24, marginBottom: 0,fontFamily:"Inter-Medium"}}>{tour_title}</Text>
            </View>
            <View style={{marginRight: 15, alignItems: 'center', justifyContent: 'center', marginBottom: 10}} >
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
          <Text style={{color:"white",fontSize: 14, marginBottom: 0, textAlign: 'center', fontFamily:"Inter-Medium"}}>{tour_title}</Text>
        </View>
        }

        {/* <Text style={{color:"white",fontSize:12,fontFamily:"Inter-Medium",marginBottom:5}}>Semi Finals - Best of 4</Text> */}
    </View>}

    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
      <View style={{flexDirection: 'row', alignItems: 'center',}} >
          <View style={{
              backgroundColor: border_color,
              width:30,
              margin:0,
              height:24,
            }}>
            </View>
          <View>
            <View
                      style={{
                        flexDirection: "row",
                        alignItems: 'center',
                        flex:1,
                      }}
                    >
                       <View style={{
                          width: 52, height: 52,
                          backgroundColor:"#000235",
                          padding:0,
                          marginLeft: -5,
                          borderRadius:26,
                          display:"flex",
                          justifyContent:"center",
                          alignItems:"center",
                        }}>
                      <Image
                        style={{ width: 38, height: 38, }}
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
          </View>
      </View>

      <Image source={vs} style={{width:30,height:37}}/>

      <View style={{flexDirection: 'row', alignItems: 'center',}} >
          <View>
          <View
                      style={{
                        flexDirection: "row",
                        flex:1,
                        marginRight: -5,
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
                        style={{ width: 38, height: 38, }}
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
                      
                    </View>
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
    </ImageBackground>
    :
    <View 
    style={{height: 70, marginTop: 15, width: DeviceWidth}}
  >
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
      <View style={{flexDirection: 'row', alignItems: 'center',}} >
          <View style={{
              backgroundColor: border_color,
              width: 60,
              margin:0,
              height:24,
            }}>
            </View>
          <View>
            <View
                      style={{
                        flexDirection: "row",
                        alignItems: 'center',
                        flex:1,
                      }}
                    >
                       <View style={{
                          width: 52, height: 52,
                          backgroundColor:"#000235",
                          padding:0,
                          marginLeft: -5,
                          borderRadius:26,
                          display:"flex",
                          justifyContent:"center",
                          alignItems:"center",
                        }}>
                      <Image
                        style={{ width: 38, height: 38, }}
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
          </View>
      </View>

      <Image source={vs} style={{width:30,height:37}}/>

      <View style={{flexDirection: 'row', alignItems: 'center',}} >
          <View>
          <View
                      style={{
                        flexDirection: "row",
                        flex:1,
                        marginRight: -5,
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
                        style={{ width: 38, height: 38, }}
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
                      
                    </View>
          </View>
          <View style={{
              backgroundColor: border_color2,
              width:60,
              margin:0,
              height:24,
            }}>
            </View>
      </View>
        </View>
    </View>
  }
  </>
      )}
    </>
  )
}

export default HeroContestCard