import React from 'react'
import { View, Text, Image, TouchableOpacity } from "react-native";
import { CalcTime } from "./CalcTime";
import Live from "./Live";
import klutchhLogo from "../../assets/logo_mark.png";
import moneyBag from "../../assets/money.png";
import valorant from "../../assets/valorant.png";
import pubgMatchCard from "../../assets/pubgMatchCard.png";
import pubgMatchCard2 from "../../assets/pubgMatchCard2.png";
import pubgIconMatchCard from "../../assets/pubgIconMatchCard.png";

import { icons } from "../utills/Icons";
// import bellIcon from "../../assets/bell.png";

const MatchCard = ({ team, isLive, isGroupType, hideBorder }) => {
  const imagesArray = [pubgMatchCard,pubgMatchCard2,pubgMatchCard,pubgMatchCard2]
  //console.log("upcoming MATCH CARD =>>>  ",team)
  const LeagueName = team?.league_name ? team?.league_name : "";
  const SeriesName = team?.series_name ? team?.series_name : "";
  const TourName = team?.tour_name ?  team?.tour_name : "";

   const tour_title =  LeagueName + " " + SeriesName + " " + TourName || "" 

   const random_colors_array = ['#FFEE00', '#CE0037', '#FF326A', '#0090DE', '#FF5900', '#5CE6E6', '#BF5AF2', '#32D792', '#E948C5', '#7000FF']
   const random_color1 = random_colors_array[(Math.random() * random_colors_array.length) | 0]
  const random_color2 = random_colors_array[(Math.random() * random_colors_array.length) | 0]
  

   return (
    <View
      style={{
        backgroundColor: "#FFFFFF20",
        borderWidth:0.5,
        borderColor: "rgba(255, 255, 255, 0.2)",
        marginTop:10,
        marginBottom:10,
        borderRadius:8,
      }}
    >
      <View style={{
        borderBottomWidth:1,
        borderBottomColor:"#FFFFFF30",
        margin:5,
        marginStart:10,
        marginEnd:10,
        flexDirection:"row",
        justifyContent:"space-between",
      }}>
        <Text style={{
          fontSize:11,
          margin:3,
          color:"#EBEBF560",
          fontFamily:"Inter-SemiBold",
        }}>{LeagueName + " " + SeriesName + " " + TourName || "" 
        
        }</Text>
        {/* <Image source={bellIcon} 
        style={{ width: 16, height: 16 }}
        /> */}
      </View>
      {isGroupType ? (
        <View
          style={{
            marginTop: 5,
          }}
        >
          <View style={{
            flexDirection:'row',
            alignItems:"center",
            height:40
          }}>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 15,
                paddingRight: 15,
                borderLeftColor: !isGroupType && `${team?.teams[0]?.opponent?.borderColor}`,
                borderLeftWidth: 2,
                flex: 1,
              }}
            >
              <Image
                style={{ width: 25, height: 25, right: 4,top:0 }}
                resizeMode="contain"
                source={
                  team?.teams[0]?.opponent?.image_url
                    ? { uri: team?.teams[0]?.opponent?.image_url }
                    : klutchhLogo
                }
              />
              <View style={{
                flexDirection:"column",
                marginTop:-8,
                marginLeft:2
              }}>
                  <View
                    style={{
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 14,
                        marginTop: 2,
                        fontFamily:"Inter-Bold",
                      }}
                    >
                      {isGroupType ? team?.name : team?.teams[0]?.name}
                    </Text>

                  </View>

                <View
                style={{
                }}
                >
                  {isGroupType && (
                    <Text
                      style={{
                        color: "rgba(235, 235, 245, 0.6)",
                        fontSize: 10,
                        fontFamily:"Inter-Medium"
                      }}
                    >
                      {(team?.teams[0]?.team_members?.length || 5) +
                        (team?.teams[1]?.team_members?.length || 5) +
                        " Teams Playing"}
                    </Text>
                  )}

                </View>
              </View>
              </View>
              <Image source={imagesArray[(Math.floor(Math.random()*10))%4]} style={{
                width:130,height:130,
                bottom:10,
              }}/>
          </View>


          <View>
            <Text
              style={{
                color: "white",
                fontSize: 11,
                alignSelf: "center",
                marginBottom:3,
              }}>
            {isLive ? <Live />:<Text style={{
              color:"rgba(235, 235, 245, 0.6)",
              fontSize:10,
              fontFamily:"Inter-SemiBold"
            }}>{CalcTime(team?.starts_at)}</Text>}
            </Text>
          </View>
          {!isLive && <View style={{
            backgroundColor:"#FFFFFF30",
            borderBottomEndRadius:8,
            borderBottomStartRadius:8,
            flexDirection:"row",
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 10,
          }}>
            <View style={{flexDirection:"row", alignItems: 'center'}}>
            <Image
                style={{ width: 22, height: 22}}
                resizeMode="contain"
                source={icons.battle_icon}
              />
            <Text style={{
              color:"#ffffff80",
              fontSize:10,
              marginLeft: 4,
              fontFamily:"Inter-SemiBold",
              }}>10 Contests</Text>
            </View>
           
            <Image source={pubgIconMatchCard}
            style={{
              width:34,
              height:34,
              marginTop:2,
            }}
            />
          </View>}
        </View>
      ) : (
        <>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
          <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={{
                backgroundColor:!isGroupType && `${team?.teams[0]?.opponent?.borderColor || team?.border_color}`,
                width:30,
                margin:0,
                height:24,
                marginTop:9,
              }}>
              </View>
              <View style={{
                 width: 44, height: 44,
                 backgroundColor:"#000235",
                 padding:0,
                 borderRadius:22,
                 display:"flex",
                 justifyContent:"center",
                 alignItems:"center",
                 right:6,
              }}>
                <Image
                  style={{ width: 25, height: 25,}}
                  resizeMode="contain"
                  source={
                    team?.teams[0]?.opponent?.image_url
                      ? { uri: team?.teams[0]?.opponent?.image_url }
                      : klutchhLogo
                  }
                />
              </View>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 11,
                    marginTop: 10,
                    fontFamily:"Inter-Medium",
                  }}
                >
                  {team?.teams[0]?.opponent?.name || "Team 1"}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    alignSelf: "center",
                    fontSize: 11,
                    marginTop: 10,
                    fontFamily:"Inter-Medium",
                  }}
                >
                  {team?.teams[1]?.opponent?.name || "Team 2"} 
                </Text>
              </View>
              <View style={{
                 width: 44, height: 44,
                 backgroundColor:"#000235",
                 padding:0,
                 borderRadius:22,
                 display:"flex",
                 justifyContent:"center",
                 alignItems:"center",
                 right:-6,
              }}>
              <Image
                style={{ width: 25, height: 25, }}
                resizeMode="contain"
                source={
                  team?.teams[1]?.opponent?.image_url !== null
                    ? { uri: team?.teams[1]?.opponent?.image_url }
                    : klutchhLogo
                }
              />
              </View>
              <View style={{
                backgroundColor:`${team?.teams[1]?.opponent?.borderColor || team?.border_color}`,
                width:30,
                margin:0,
                height:24,
                marginTop:9,
                zIndex:-1,
              }}>
              </View>
            </View>
          </View>
          <View style={{
            flexDirection:"row",
            justifyContent:"center",
            bottom:5,
          }}>
            {isLive ? <Live />:<Text style={{
              color:"rgba(235, 235, 245, 0.6)",
                    fontFamily:"Inter-SemiBold",
                    fontSize:10,
            }}>{CalcTime(team?.starts_at)}</Text>}
          </View>
          {!isLive && <View style={{
            backgroundColor:"#FFFFFF30",
            borderBottomEndRadius:8,
            borderBottomStartRadius:8,
            flexDirection:"row",
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 15,
            paddingVertical: 0,
          }}>
            <View style={{flexDirection:"row", alignItems: 'center'}}>
            <Image
                 style={{ width: 22, height: 22}}
                resizeMode="contain"
                source={icons.battle_icon}
              />
            <Text style={{
              color:"#ffffff80",
              fontSize:10,
              marginLeft: 4,
              fontFamily:"Inter-SemiBold",

              }}>10 Contests</Text>
            </View>
           
            <Image source={valorant}
            style={{
              width:34,
              height:34,
              marginTop:2
            }}
            />
          </View>}
        </>
      )}
    </View>
  );
};

export default MatchCard;
