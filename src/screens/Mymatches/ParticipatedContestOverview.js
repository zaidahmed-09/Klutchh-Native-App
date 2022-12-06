import { View, Text, SafeAreaView, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";

import colors from "../../constants/colors";

import { isGroupType } from "../../extras/utils";

import axios from "axios";
import { Skeleton } from "react-native-skeletons";
import { BASE_URL } from "../../extras/constants";
import HeroContestCard from "../../components/HeroContestCard";
import { useSelector } from "react-redux";
import UpcomingMatchDetails from "../../components/UpcomingMatchDetails";
import YourTeams from "../../components/teams/YourTeams";
import CompletedLeaderBoard from "../../components/CompletedLeaderBoard";
import { CalcTime } from "../../components/CalcTime";

const ParticipatedContestOverview = ({ route, navigation }) => {
  const { match, participatedList, isGroupGame, isUpcoming, contest_item, matchStatus, leader_table, points_table } = route.params;
  const [contestDetails, setContestDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const auth = useSelector((state) => state.auth);


  const LeagueName = match?.league_name ? match?.league_name : "";
  const SeriesName = match?.series_name ? match?.series_name : "";
  const TourName = match?.tour_name ?  match?.tour_name : "";

  const tour_title = isGroupType(match?.game_type) ? (match?.tour_id?.name || '') :  (LeagueName + " " + SeriesName + " " + TourName || "")

  useEffect(() => {

    if(match?.contest_results_declared){
      fetchContestDetails()
    }else{
      calculateResults()
    }
  }, []);


  function fetchContestDetails() {

    console.log('====================================');
    console.log("fetchContestDetails =!!!!111");
    console.log('====================================');

    var base_url = ''
    if(match?.game_type){
      base_url = `${BASE_URL}/contest/${contest_item?.contest_id?._id}?game_type=${false}`
    }else{
      base_url = `${BASE_URL}/contest/${contest_item?.contest_id?._id}?game_type=${true}`
    }

    //setLoading(true);
    axios
      .get(base_url)
      .then((response) => {
        // console.log("contest response => ", response.data);
        setContestDetails(response.data);
        setLoading(false);
      })
      .catch((response) => {
        console.log('====================================');
        console.log("err response ", response);
        console.log('====================================');
     
        setLoading(false);
        try {
          switch (response.status) {
            case 401:
              //   add a toast
              Alert.alert("Session Expired", "Please login again");
              break;
            default:
              // getcontestDetails();
              break;
          }
        } catch (e) {
          Alert.alert("Error", "Something went wrong");
        }
      });
  }

  const calculateResults = () => {
    console.log('====================================');
    console.log("calculateResults =!!!!111");
    console.log('====================================');
    axios
    .post(
      `${BASE_URL}/results/calculate`,
      {
        matchId: match?._id,
        //game_type: isGroupGame,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.access_token}`,
        },
      }
    )
    .then((response) => {

      console.log('==========results/calculate res==========================');
     // console.log("results/calculate response =>>>> ", response.data);
      fetchContestDetails()
      console.log('====================================');
    })
    .catch((err) => {
      console.log("results/calculate error => ", err);
    })
  }

  const selectedTeam = participatedList?.selected_team;
  const mvps = participatedList?.mvp;
  const teams = match.match_id?.teams;
    const team = match.match_id;

  return (
    <SafeAreaView style={{
      flex: 1, backgroundColor: colors.PRIMARY_COLOR,
    }}>
      <ScrollView>

        <View style={{padding: 20, alignItems: 'center'}} >

        <HeroContestCard
             image1={match?.teams[0]?.opponent?.image_url}
             image2={match?.teams[1]?.opponent?.image_url}
             name1 = {match?.teams[0]?.opponent?.name}
             name2 = {match?.teams[1]?.opponent?.name}
             tour_title={tour_title}
             game_type={match?.game_type}
             startTime={CalcTime(match?.starts_at)}
             contest_status='completed'
             isGroupType={isGroupType(match?.game_type)}
             gameType={match?.game_type}
             match_details={match}
             match_status={'completed'}
             border_color={match?.border_color}
             border_color2={match?.border_color2}
            />

          <View>
            <YourTeams teamPlayers={contest_item?.selected_team} group_type={isGroupType(match.game_type)}  />
          </View>
       

          {loading ? (
            <Skeleton
              count={1}
              width={"100%"}
              color={"#ffffff10"}
              borderRadius={10}
              containerStyle={{
                flex: 1,
                width: "100%",
                backgroundColor: "#211134",
                alignItems: "center",
                padding: 15,
              }}
              style={{
                width: "100%",
                height: 100,
              }}
            />
          ) : (
            <View style={{width: '100%', marginTop: 30}} >
              {isUpcoming ?
                  <UpcomingMatchDetails contestDetails={contestDetails} />
                :
                <CompletedLeaderBoard
                  leader_table={leader_table}
                  points_table={points_table}
                  contest_dtails={contestDetails?.contest}
                  winners={contestDetails?.contest?.points_table}
                  participants={contestDetails?.contest?.participants}
                  status={contestDetails?.contest?.status}
                  all={true}
                  id={contestDetails?.contest?._id}
                  style={{ marginBottom: 10, marginTop: 10 }}
              />
            
              }
              
            </View>
          )}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParticipatedContestOverview;
