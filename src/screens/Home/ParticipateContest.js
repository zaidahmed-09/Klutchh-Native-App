import React, { useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, Dimensions } from "react-native";

import HeroContestCard from "../../components/HeroContestCard";

import TeamSelect from "../../components/TeamSelect";
import { useSelector } from "react-redux";

import styled from 'styled-components';
import colors from "../../constants/colors";
import { GlobalButton, GlobalButtonInactive, TextWhite } from "../../components/reusables";
import { icons } from "../../utills/Icons";
import { CalcTime } from "../../components/CalcTime";
import StepProgress from "../../components/progressbar/StepProgress";
import {BASE_URL} from '../../extras/constants';
import axios from 'axios';

const DeviceWidth = Dimensions.get("window").width;

const TotalCreditsBtn = styled(TouchableOpacity)`
background:#ffffff10;
border-radius: 18px;
border: 4px solid rgba(235, 235, 245, 0.3);
border-width: 2px;
width: 150px;
height: 36px;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
margin: 10px 4px 0px 0px;
`

const emptyTeam = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
]

const ParticipateContest = ({ navigation, route }) => {
  const [whichTeam, setWhichTeam] = useState(0);
  var [player, setPlayer] = useState(0);
  var [credit_count, setCredits] = useState(0);
  var [selectedPlayers, setSelection] = useState([]);

  const { contest, isGroupType, tour_title, matches, border_color, border_color2 } = route.params;

  const tournaments = useSelector((state) => state.tournaments);


  const roster_1 = tournaments?.rosters?.data?.roster1
  const roster_2 = tournaments?.rosters?.data?.roster2


  const auth = useSelector(state => state.auth);


  function MixPanelCall() {
    let selectedTeam = [];
    selectedPlayers.forEach(item => {
      selectedTeam.push(item.name);
    });

    axios.post(
      `${BASE_URL}/track/mixpanel`,
      {
        eventName: 'Team Created',
        contest: contest,
        selectedTeam: selectedTeam,
        totalCredits: credit_count,
        matchName: matches
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
  // <ImageBackground 
  //   resizeMode="cover"
  //   source={bgNew}
  //   style={{
  //       flex:1,
  //   }}>
  <View style={{flex: 1, width: DeviceWidth, backgroundColor: colors.PRIMARY_COLOR}} >
      <View
        style={{
          flex: 1,
          margin: 0,
          // marginLeft: 10,
          // marginRight: 10,
          
        }}
      >
        <ScrollView contentContainerStyle={{alignItems: 'center'}} >
          <View style={{
            display:"flex",
            marginTop: 60,
            alignItems:"center",
          }}>
            
          {!isGroupType && <View style={{marginBottom: 10, flexDirection: 'row', alignItems: 'center', }} >
              {emptyTeam.map((item, index) => (
                <View style={{height: 35, width: 35, margin: 6, backgroundColor: selectedPlayers[index] ? colors.PRIMARY_COLOR : colors.NEW_THEME_RED, borderColor: colors.NEW_THEME_RED, borderWidth: 1,  borderRadius: 4, alignItems: 'center', justifyContent: 'center'}} >
                   {selectedPlayers[index] 
                   ? <Image source={
                      selectedPlayers[index]?.image_url ? {
                        uri: selectedPlayers[index]?.image_url
                      }
                      :
                      icons.user_dummy_img
                    } 
                      style={{height: 26, width: 26, resizeMode: 'contain'}} 
                    />
                  :
                  <Image 
                    source={icons.question_mark}
                    style={{height: 18, width: 18, resizeMode: 'contain'}} 
                  />
                  }
                </View>
              ))}
              
          </View>}

          <Text style={{ color: "#ffffff",fontSize:13, fontFamily: 'Inter-Medium'}} >Choose {!isGroupType ? <Text>5 players </Text> : <Text>4 squads </Text>}to join your roster</Text>
          </View>
    

          <View style={{alignItems: 'center', padding: 10}} >
            <View>
                <TotalCreditsBtn >
                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'Inter-Medium',
                        fontWeight: 'bold',
                        color: "white",
                    }}>Total Credits : {credit_count}/15</Text>
                </TotalCreditsBtn>
            </View>
          </View>

          <HeroContestCard
             image1={matches?.teams[0]?.opponent?.image_url}
             image2={matches?.teams[1]?.opponent?.image_url}
             name1 = {matches?.teams[0]?.opponent?.name}
             name2 = {matches?.teams[1]?.opponent?.name}
             tour_title={tour_title}
             game_type={matches?.game_type}
             startTime={CalcTime(matches?.starts_at)}
             contest_status='upcoming'
             isGroupType={isGroupType}
             hideImage={true}
             gameType={matches?.game_type}
             match_details={matches}
             match_status={'upcoming'}
             isStepProgress={true}
             border_color={border_color}
             border_color2={border_color2}
             />
             <StepProgress currentIdx={2} />

          {isGroupType && (
              <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: DeviceWidth-40 }} >
                <Text style={{color: 'white', width: '30%', marginRight: 50, textAlign: 'right',}} >Squads</Text>
                <Text style={{color: 'white', marginLeft: 10,}} >K/D</Text>
                <Text style={{color: 'white'}} >Credits</Text>
                <Text style={{color: 'white'}} > </Text>
              </View>
            )}

          <TeamSelect
            data={contest?.match_id?.teams}
            roster1={roster_1}
            roster2={roster_2}
            isLive={false}
            team={isGroupType ? "GroupGame" : whichTeam}
            player={player}
            setPlayer={setPlayer}
            credit_count={credit_count}
            setCredits={setCredits}
            selectedPlayers={selectedPlayers}
            setSelection={setSelection}
          />
        </ScrollView>

        {(isGroupType ? player === 4 : player === 5) ? (
          <View
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 30,
            }}
          >
            <GlobalButton
              onPress={() =>{
                MixPanelCall();
                navigation.navigate("PreviewTeam", {
                  SelectedPlayers: selectedPlayers,
                  contestID: contest,
                  isGroupType: isGroupType,
                  tour_title: tour_title,
                  border_color: border_color,
                  border_color2: border_color2,
                  matches: matches,
                  
                })
              }
              }
               >
                  <TextWhite>PREVIEW TEAM</TextWhite>
                </GlobalButton>
          </View>
        ): (
          <View
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 30,
            }}
          >
          <GlobalButtonInactive
             
               >
                  <TextWhite>PREVIEW TEAM</TextWhite>
                </GlobalButtonInactive>
          </View>
        )}
      </View>
      </View>
    // </ImageBackground>
  );
};

export default ParticipateContest;
