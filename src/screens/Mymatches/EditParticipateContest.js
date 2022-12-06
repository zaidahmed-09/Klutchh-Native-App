import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";

import HeroContestCard from "../../components/HeroContestCard";

import TeamSelect from "../../components/TeamSelect";

import { useSelector } from "react-redux";

import styled from 'styled-components';
import colors from "../../constants/colors";
import { GlobalButton, GlobalButtonInactive, TextWhite } from "../../components/reusables";
import axios from "axios";
import { BASE_URL } from "../../extras/constants";
import { CalcTime } from "../../components/CalcTime";

import { icons } from "../../utills/Icons";
import StepProgress from "../../components/progressbar/StepProgress";

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

const EditParticipateContest = ({ navigation, route }) => {
  
  const { contest, isGroupType, tour_title, matches } = route.params;

  const [whichTeam, setWhichTeam] = useState(0);
  var [player, setPlayer] = useState(0);
  var [credit_count, setCredits] = useState(0);
  var [selectedPlayers, setSelection] = useState([]);



  const tournaments = useSelector((state) => state.tournaments);

  const [roster_1, setRoster_1] = useState([]);
  const [roster_2, setRoster_2] = useState([]);


  useEffect(() => {
    const credit = contest?.selected_team.reduce((item, o) => item + parseInt(o.credit), 0)

    setSelection(contest?.selected_team)
    setPlayer(contest?.selected_team?.length)
    setCredits(credit)

    
    getRosterData()
  }, [])


  const getRosterData = () => {

    var team_id_1 = ''
    var team_id_2 = ''

    if(isGroupType){
        // team_id_1 = matches?.teams[0]._id
        // team_id_2  = matches?.teams[1]._id
        team_id_1 = matches?.teams[0]?._id
        team_id_2  = matches?.teams[1]?._id
    }else{
        // team_id_1 = matches?.teams[0]?.opponent?.id
        // team_id_2  = matches?.teams[1]?.opponent?.id
        team_id_1 = matches?.teams[0]?.opponent?.id ? matches?.teams[0]?.opponent?.id : matches?.teams[0]?._id
        team_id_2  = matches?.teams[1]?.opponent?.id ? matches?.teams[1]?.opponent?.id : matches?.teams[1]?._id
    }

    axios.get(`${BASE_URL}/rosters/${team_id_1}/${team_id_2}?game_type=${isGroupType}`)
    .then((response) => {

        setRoster_1(response?.data?.data?.roster1)
        setRoster_2(response?.data?.data?.roster2)
    })
    .catch((err) => {
        console.log("roster error => " , err);
    });
  }
  
  
  return (
  <View style={{flex: 1, backgroundColor: colors.PRIMARY_COLOR}} >

      <View
        style={{
          flex: 1,
          margin: 10,
          marginLeft: 10,
          marginRight: 10,
          
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
                <View style={{height: 50, width: 50, margin: 6, backgroundColor: selectedPlayers[index] ? colors.PRIMARY_COLOR : colors.NEW_THEME_RED, borderColor: colors.NEW_THEME_RED, borderWidth: 1,  borderRadius: 4, alignItems: 'center', justifyContent: 'center'}} >
                   {selectedPlayers[index] 
                   ? <Image source={
                      selectedPlayers[index]?.image_url ? {
                        uri: selectedPlayers[index]?.image_url
                      }
                      :
                      icons.user_dummy_img
                    } 
                      style={{height: 36, width: 36, resizeMode: 'contain'}} 
                    />
                  :
                  <Image 
                    source={icons.question_mark}
                    style={{height: 24, width: 24, resizeMode: 'contain'}} 
                  />
                  }
                </View>
              ))}
              
          </View>}
          
          <Text style={{ color: "#ffffff", fontWeight: 'bold', marginBottom: 10, fontSize:14}} >{tour_title}</Text>
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
             gameType={matches?.game_type}
             match_details={matches}
             match_status={'upcoming'}
             hideImage={true}
             border_color={matches?.border_color}
             border_color2={matches?.border_color2}
             />
             <StepProgress currentIdx={2} />

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
              marginBottom: 40,
            }}
          >
            <GlobalButton
              onPress={() => {
                // console.log(" selectedPlayers ", selectedPlayers);
                // console.log(" contestID ", contest);
                navigation.navigate("EditPreviewTeam", {
                  SelectedPlayers: selectedPlayers,
                  contestID: contest,
                  contest: contest,
                  isGroupType: isGroupType,
                  tour_title: tour_title,
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
              marginBottom: 40,
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
  );
};

export default EditParticipateContest;
