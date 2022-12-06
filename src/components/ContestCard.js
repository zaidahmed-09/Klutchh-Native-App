import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";
import check from "../../assets/Checkmark.png"
import trophy from "../../assets/Trophy.png"
import {BASE_URL} from '../extras/constants';
import axios from 'axios';
import {connect, useDispatch, useSelector} from 'react-redux';
import { icons } from "../utills/Icons";

const ContestCard = ({ navigation, contest, isGroupType, hideTitle, match_type ,match_name}) => {

  console.log('====================================');
  console.log("contest match_type => ", contest?.min_win_percentage);
  console.log('====================================');


  const auth = useSelector(state => state.auth);

  function MixPanelCall() {
    axios.post(
      `${BASE_URL}/track/mixpanel`,
      {
        eventName: 'Contest Selected',
        contest: contest,
        matchName: match_name,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth?.access_token}`,
        },
      },
    );
  }

  return (

    Number(contest?.max_entries) - Number(contest?.current_entries) ? 
    <View>
        {!hideTitle ? <Text style={{color: 'white', marginLeft: 10, fontSize: 17}} >{contest?.name}</Text> : null}

      <View
        style={{
          backgroundColor: "#ffffff20",
          marginBottom: 15,
          borderRadius: 10,
          overflow: "hidden",
          borderColor:"#FFFFFF30",
          borderWidth:0.5,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <>
        
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "rgba(255, 255, 255, 0.6)", fontSize:12, fontFamily:"Inter-SemiBold" ,left:12, paddingTop:10,}}>Prize Pool</Text>
            <Text style={{ color: "rgba(255, 255, 255, 0.6)", fontSize:12, fontFamily:"Inter-SemiBold" ,right:12, paddingTop:10,}}>Entry</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingTop: 1,
                paddingBottom: 5,
                paddingLeft: 11,
                paddingRight: 20,
              }}
            >
              <Text style={{ color: "white", alignSelf: "center", fontSize:20,fontFamily:"Inter-Bold"}}>
                ₹ {contest?.prize_pool}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#FF326A",
                borderRadius: 3,
                justifyContent: "center",
                alignItems: 'center',
                flexDirection:"row",
                width:85,
                height: 21,
                marginRight: 10,
                marginTop:6,
              }}
              onPress={() => {
                MixPanelCall();
                navigation?.navigate("ContestDetails", {
                  contestID: contest._id,
                  match_type: match_type,
                  isGroupType,
                });
              }}
            >
              <Text
                style={{
                  color: "white",
                  paddingRight: 15,
                  paddingLeft: 15,
                  fontSize:12,
                  fontFamily:"Inter-SemiBold",
                }}
              >
                ₹ {contest?.entry_fee}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 4, marginBottom: 2, paddingLeft: 10, paddingRight:10 }}>


            <ProgressBar
              progress={
                Number(contest?.current_entries) / Number(contest?.max_entries)
              }
              width="100%"
              color="#FF326A"
              style={{backgroundColor: '#28282870'}}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, marginBottom: 6, marginTop:2 }}>
            <Text style={{ color: "#FF326A",fontSize:10,fontFamily:"Inter-Medium" }}>
              {Number(contest?.max_entries) - Number(contest?.current_entries)} spots
              left
            </Text>
            <Text style={{color: "#fff", fontSize: 10, fontFamily:"Inter-Medium"}}>{contest?.max_entries} spots</Text>
          </View>
        </>
        <View style={{
          backgroundColor: "#ffffff3a",
          flexDirection:"row",
          justifyContent:"space-between",
          padding:5,
          paddingLeft:7,
          paddingRight:7,
        }}>
           {match_type !='Practice'
            ? <View style={{flexDirection:"row",padding:2,}}>
              <Image source={icons.medal} style={{
                width:14,height:14,marginEnd:2
              }} />
              <Text style={{color:"#ffffff",fontSize:10,marginEnd:8,fontFamily:"Inter-SemiBold"}} >₹ {contest?.prize_pool_list[0]}</Text>
              <Image source={trophy} style={{
                width:14,height:14,marginEnd:2
              }} />
              <Text style={{color:"#ffffff", fontSize:10,fontFamily:"Inter-SemiBold"}} >{contest?.min_win_percentage}%</Text>
            </View>
            :
            <View style={{flexDirection:"row",padding:2,}}>
              <Image source={icons.medal} style={{
                width:14,height:14,marginEnd:2
              }} />
              <Text style={{color:"#ffffff",fontSize:10,marginEnd:8,fontFamily:"Inter-SemiBold"}} >Glory Awaits!</Text>
              
            </View>
            }
        <View
        style={{flexDirection:"row",padding:2}}>
              <Image source={check} style={{
                      width:14,height:14,marginEnd:2
                    }} />
              <Text style={{color:"#ffffff", fontSize:10,fontFamily:"Inter-SemiBold"}} >Guaranteed</Text>
        </View>
        </View>
      </View> 
    </View>
    
    : <></>


  );
};

export default ContestCard;
