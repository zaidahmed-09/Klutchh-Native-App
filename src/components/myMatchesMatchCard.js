import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { CalcTime } from "./CalcTime";
import klutchhLogo from "../../assets/logo_mark.png";
import Live from "./Live";
import React, {useState} from 'react';
import valorant from "../../assets/valorant.png";
import pubgMatchCard from "../../assets/pubgMatchCard.png";
import pubgMatchCard2 from "../../assets/pubgMatchCard2.png";
import pubgIconMatchCard from "../../assets/pubgIconMatchCard.png";
import { icons } from "../utills/Icons";
import { ProgressBar } from "react-native-paper";

import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { gameType, isGroupType } from "../extras/utils";

const DeviceWidth = Dimensions.get("window").width;

const MyTeamsBtn = styled(TouchableOpacity)`
background:#FF326A;
border-radius: 4px;
width: 90px;
height: 26px;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
margin: 0px 4px;
`


const MyMatchesMatchCard = ({team, isLive, status, hideBorder, isDisabledTime, teams, entry_list, match, participatedList, isGroupGame, isUpcoming, matchStatus }) => {
  const navigation = useNavigation();

  const imagesArray = [pubgMatchCard,pubgMatchCard2,pubgMatchCard,pubgMatchCard2]

  // console.log(" match =>>> teams ", teams);
  // console.log(" match =>>> match ", match);
  
  
  const [expanded, setExpanded] = useState(false);

  const toggleExpand=()=>{
    setExpanded(!expanded)
  }

  const LeagueName = match?.league_name ? match?.league_name : "";
  const SeriesName = match?.series_name ? match?.series_name : "";
  const TourName = match?.tour_name ?  match?.tour_name : "";

 const tour_title =  LeagueName + " " + SeriesName + " " + TourName || "" 


 const random_colors_array = ['#FFEE00', '#CE0037', '#FF326A', '#0090DE', '#FF5900', '#5CE6E6', '#BF5AF2', '#32D792', '#E948C5', '#7000FF']
 const random_color = random_colors_array[(Math.random() * random_colors_array.length) | 0]


 const navigateAfterClick = (item) => {

  if(matchStatus == 'completed'){
    console.log("completed");
    navigation.navigate("ParticipatedContestOverview", {
      match: match,
      participatedList: participatedList,
      isGroupGame: isGroupGame,
      isUpcoming: isUpcoming,
      contest_item: item,
      matchStatus: matchStatus,
      leader_table: item?.contest_id?.points_table,
      points_table: match?.points_table,
    });
  }else if(matchStatus == 'upcoming'){
    console.log("upcoming");
    console.log("match => " ,match);
    navigation.navigate("ParticipatedUpcomingOverview", {
      match: match,
      participatedList: participatedList,
      isGroupGame: isGroupGame,
      isUpcoming: isUpcoming,
      contest_item: item,
      matchStatus: matchStatus
    });
  }else if(matchStatus == 'live'){
    console.log("live");
    navigation.navigate("ParticipatedLiveOverview", {
      match: match,
      participatedList: participatedList,
      isGroupGame: isGroupGame,
      isUpcoming: isUpcoming,
      contest_item: item,
      matchStatus: matchStatus
    });
  }

 }

  return (
    <View
    style={{
      backgroundColor: "#FFFFFF20",
      borderWidth:0.5,
      borderColor: "rgba(255, 255, 255, 0.2)",
      margin:10,
      borderRadius:8,
      marginHorizontal: 15,
    }}
  >
   
    {gameType(isGroupGame) ? (
         <View style={{ }} >

         <View style={{
           borderBottomWidth:1,
           borderBottomColor:"#FFFFFF30",
           // margin:5,
           // marginStart:10,
           // marginEnd:10,
           padding: 10,
           paddingVertical: 4,
           flexDirection:"row",
           alignItems: 'center',
           justifyContent:"space-between",
         }}>
             <Text style={{
               fontSize:10,
               margin:3,
               color:"#EBEBF560",
               
             }}>{match?.tour_id?.name}</Text>
 
             <Image source={pubgIconMatchCard} 
             style={{ width: 30, height: 30 }}
             />
         </View>
 
         <View style={{height: 80}} >

             <View
               style={{
                 marginTop: 10,
                 flexDirection: "row",
                 justifyContent: "space-between",
                 alignItems: "center",
               }}
             >

                <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }} >
                  <View style={{paddingLeft: 15}} >
                    <Text style={{fontSize: 14, fontFamily: 'Inter-Bold', color: 'white'}} >{match?.name}</Text>
                    <Text  style={{marginTop: 6, fontSize: 12, fontFamily: 'Inter-SemiBold', color: 'white'}}>{teams[0]?.team_members.length + teams[1]?.team_members.length} Teams Playing</Text>
                    <View style={{marginTop: 6, flexDirection: 'row', alignItems: 'center'}} >
                      <Image source={icons.location} style={{height: 16, width: 16, marginRight: 8}} />
                    <Text  style={{fontSize: 12, fontFamily: 'Inter-SemiBold', color: 'white'}}>
                    {match?.map}
                    </Text>
                    </View>
                  </View>
                  <View>
                  <Image 
                    source={imagesArray[(Math.floor(Math.random()*10))%4]} 
                    style={{
                      width:130,
                      height:130,
                      bottom: 45,
                      right: 10,
                    }}
                  />
                  </View>
                </View>
             </View>
 
             <View style={{
               flexDirection:"row",
               justifyContent:"center",
               bottom: 95,
             }}>
               {isLive ? <Live />
               
               :
               <Text style={{
                 color:"rgba(235, 235, 245, 0.6)",
                 fontSize:8,
               }}>
                 {CalcTime(match?.starts_at) != 'ZZZ' ? CalcTime(match?.starts_at) : null}
                 </Text>}
             </View>
           </View>
 
            <View style={{padding: 10,  backgroundColor: 'rgba(33, 17, 52, 0.5)'}} >
             <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',}} >
                 <View style={{flexDirection: 'row', alignItems: 'center'}} >
                   <Image source={icons.battle_icon} style={{height: 22, width: 22, marginRight: 10}} />
                   <Text style={{fontSize: 12, fontFamily: 'Inter-SemiBold', color: '#FF326A'}} >{entry_list && entry_list.length > 1 ? `${entry_list.length} contests` : `${entry_list.length} contest`}</Text>
                 </View>
 
                 <TouchableOpacity onPress={()=>toggleExpand()} style={{flexDirection: 'row', alignItems: 'center'}} >
                   <Text style={{fontSize: 12, fontFamily: 'Inter-SemiBold', color: '#fff'}} >{expanded ? 'Collapse' : 'See All Contests'}</Text>
                   <Image source={expanded ? icons.down_arrow_pink : icons.right_arrow_pink} style={{height: 22, width: 22, marginLeft: 10}} />
                 </TouchableOpacity>
             </View>
 
            
                 
                 {expanded && ( 
                   <View 
                   // horizontal 
                     >
                        <View style={{backgroundColor: '#ffffff30', height: 2, width: '100%', marginTop: 12, }} />
                        
                         {entry_list && entry_list.map((item) => (
                           <View style={{
                             //width: DeviceWidth-40
                            marginTop: 15, borderRadius: 8, borderColor: '#ffffff30', borderWidth: 1
                           }} >
                               <TouchableOpacity 
                                  onPress={() => {
                                      navigateAfterClick(item)
                                  }}
                                  style={{  backgroundColor: '#FFFFFF20', borderTopLeftRadius: 8, borderTopRightRadius: 8, padding: 15, }} >
                           
                                 <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                                   <Text style={{color: "#fff", fontSize: 14 }} >Entry : ₹ {item?.contest_id?.entry_fee}</Text>
                                   <Text style={{color: "#fff", fontSize: 14 }}>{item?.contest_id?.name}</Text>
                                 </View>
 
                                 <View style={{paddingTop: 10}} >
                                   <ProgressBar
                                     progress={Number(item?.contest_id?.current_entries) / Number(item?.contest_id?.max_entries)}
                                     width="100%"
                                     color="#FF326A"
                                     style={{backgroundColor: '#28282870'}}
                                   />
                                 </View>
 
                                 <View style={{flexDirection: 'row', marginTop: 4, justifyContent: 'space-between'}} >
                                     <View style={{ }}>
                                       <Text style={{ color: "#FF326A",fontSize: 12 }}>
                             
                                         {Number(item?.contest_id?.max_entries) - Number(item?.contest_id?.current_entries)} spots left
                                         
                                       </Text>
                                     </View>
                                     <Text style={{color: "#fff", fontSize: 12 }}>{item?.contest_id?.max_entries} spots</Text>
                                 </View>
                               </TouchableOpacity>
 
                               <View style={{backgroundColor: 'rgba(33, 17, 52, 0)', padding: 10, borderBottomRightRadius: 8, borderBottomLeftRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
                                   <View style={{flexDirection: 'row', alignItems: 'center'}} >
                                     <Image source={icons.battle_icon} style={{height: 22, width: 22, marginRight: 4}} />
                                     <Text style={{fontSize: 10, fontFamily: 'Inter-SemiBold', color: '#fff'}} >You have <Text style={{fontSize: 10, fontFamily: 'Inter-SemiBold', color: '#FF326A'}} > 1 Team </Text> in this Contest</Text>
                                   </View>
 
                                   <View>
                                       <MyTeamsBtn 
                                          onPress={() => {
                                            navigateAfterClick(item)
                                        }}
                                        >
                                           <Text style={{
                                               fontSize: 12,
                                               fontWeight: 'bold',
                                               color: "white",
                                           }}>My Teams</Text>
                                       </MyTeamsBtn>
                                   </View>
                               </View>
 
                           </View>
                         ))}
                     </View>
                   )}
             </View>
       </View>
  
    ) : (
      <View style={{ }} >

        <View style={{
          borderBottomWidth:1,
          borderBottomColor:"#FFFFFF30",
          padding: 10,
          paddingVertical: 4,
          flexDirection:"row",
          alignItems: 'center',
          justifyContent:"space-between",
        }}>
            <Text style={{
              fontSize:10,
              margin:3,
              color:"#EBEBF560"
            }}>{tour_title}</Text>

            <Image source={valorant} 
            style={{ width: 30, height: 30 }}
            />
        </View>

        <View style={{height: 80}} >
            <View
              style={{
                marginTop: 15,
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
                 // backgroundColor:gameType(isGroupGame) && `${teams[0]?.borderColor}`,
                  backgroundColor: match?.border_color,
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
                      teams[0]?.opponent?.image_url !== null
                        ? { uri: teams[0]?.opponent?.image_url }
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
                      width: '80%'
                    }}
                  >
                    {teams[0]?.opponent?.name}
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
                    width: 80,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      alignSelf: "center",
                      fontSize: 11,
                      marginTop: 10,
                      marginLeft: 20,
                      //width: '100%',
                    }}
                  >
                    {teams[1]?.opponent?.name}
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
                    teams[1].opponent?.image_url !== null
                      ? { uri: teams[1]?.opponent?.image_url }
                      : klutchhLogo
                  }
                />
                </View>
                <View style={{
                  backgroundColor: match?.border_color2,
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
              bottom: 15,
            }}>
              {isLive ? <Live />:
              
              <>
              {matchStatus == 'completed'
              ?
              null
              :
              <>
              {matchStatus == 'live'
              ?
              <Live />
              :
              <Text style={{
                color:"rgba(235, 235, 245, 0.6)",
                fontSize:8,
              }}>
                {CalcTime(match?.starts_at)}
                </Text>
              }
              </>
              }
              </>
              }
            </View>
          </View>

       <View style={{padding: 10,  backgroundColor: 'rgba(33, 17, 52, 0.5)'}} >
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',}} >
                <View style={{flexDirection: 'row', alignItems: 'center'}} >
                  <Image source={icons.battle_icon} style={{height: 22, width: 22, marginRight: 10}} />
                  <Text style={{fontSize: 12, fontFamily: 'Inter-SemiBold', color: '#FF326A'}} >{entry_list && entry_list.length > 1 ?  `${entry_list.length} contests` : `${entry_list.length} contest`}</Text>
                </View>

                <TouchableOpacity onPress={()=>toggleExpand()} style={{flexDirection: 'row', alignItems: 'center'}} >
                  <Text style={{fontSize: 12, fontFamily: 'Inter-SemiBold', color: '#fff'}} >{expanded ? 'Collapse' : 'See All Contests'}</Text>
                  <Image source={expanded ? icons.down_arrow_pink : icons.right_arrow_pink} style={{height: 22, width: 22, marginLeft: 10}} />
                </TouchableOpacity>
            </View>

           
                
                {expanded && ( 
                  <View 
                  // horizontal 
                    >
                       <View style={{backgroundColor: '#ffffff30', height: 2, width: '100%', marginTop: 12, }} />
                       
                        {entry_list && entry_list.map((item) => (
                          <View style={{
                            //width: DeviceWidth-40
                           marginTop: 15, borderRadius: 8, borderColor: '#ffffff30', borderWidth: 1
                          }} >
                              <TouchableOpacity
                               onPress={() => {
                                  navigateAfterClick(item)
                              }}
                              style={{  backgroundColor: '#FFFFFF20', borderTopLeftRadius: 8, borderTopRightRadius: 8, padding: 15, }} >
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                                  <Text style={{color: "#fff", fontSize: 14 }} >Entry : ₹ {item?.contest_id?.entry_fee}</Text>
                                  <Text style={{color: "#fff", fontSize: 14 }}>{item?.contest_id?.name}</Text>
                                </View>

                                <View style={{paddingTop: 10}} >
                                  <ProgressBar
                                    progress={Number(item?.contest_id?.current_entries) / Number(item?.contest_id?.max_entries)}
                                    width="100%"
                                    color="#FF326A"
                                    style={{backgroundColor: '#28282870'}}
                                  />
                                </View>

                                <View style={{flexDirection: 'row', marginTop: 4, justifyContent: 'space-between'}} >
                                    <View style={{ }}>
                                      <Text style={{ color: "#FF326A",fontSize: 12 }}>
                            
                                        {Number(item?.contest_id?.max_entries) - Number(item?.contest_id?.current_entries)} spots left
                                        
                                      </Text>
                                    </View>
                                    <Text style={{color: "#fff", fontSize: 12 }}>{item?.contest_id?.max_entries} spots</Text>
                                </View>
                              </TouchableOpacity>

                              <View style={{backgroundColor: 'rgba(33, 17, 52, 0)', padding: 10, borderBottomRightRadius: 8, borderBottomLeftRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
                                  <View style={{flexDirection: 'row', alignItems: 'center'}} >
                                    <Image source={icons.battle_icon} style={{height: 22, width: 22, marginRight: 4}} />
                                    <Text style={{fontSize: 10, fontFamily: 'Inter-SemiBold', color: '#fff'}} >You have<Text style={{fontSize: 10, fontFamily: 'Inter-SemiBold', color: '#FF326A'}} > 1 Team </Text> in this Contest</Text>
                                  </View>

                                  <View>
                                      <MyTeamsBtn 
                                        onPress={() => {
                                          navigateAfterClick(item)
                                      }}
                                     >
                                          <Text style={{
                                              fontSize: 12,
                                              fontWeight: 'bold',
                                              color: "white",
                                          }}>My Teams</Text>
                                      </MyTeamsBtn>
                                  </View>
                              </View>

                          </View>
                        ))}
                    </View>
                  )}
            </View>
      </View>
    )}
  </View>
  );
};


export default MyMatchesMatchCard;
