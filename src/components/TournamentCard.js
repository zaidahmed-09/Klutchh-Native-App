import { StyleSheet, Text, View } from "react-native";
import React,{useState} from "react";
import { TouchableOpacity } from "react-native";
import { CalcTime } from "./CalcTime";
import MatchCard from "./MatchCard";
import ValorantLogo from "./../../assets/valorantType.png";
import BgmiLogo from "./../../assets/bgmiType.png";
import FreeFireLogo from "./../../assets/freeFireType.png";
import klutchhLogo from "./../../assets/logo_mark.png";
import { isGroupType, sortedMatchesByStartingTime } from "../extras/utils";
import { useDispatch } from "react-redux";
import { getRosters } from "../redux/actions/tournaments";


const TournamentCard = ({
  match,
  index,
  navigation,
  status,
  isTournamentLogo,
}) => {

    const dispatch = useDispatch();

    const sortedMatchesArray = sortedMatchesByStartingTime(match?.matches, true);
    const upcomingMatchesArray = [];
    sortedMatchesArray.map(
        (singlematch, singlematch_index) => {
        if(CalcTime(singlematch?.starts_at) !== "ZZZ" && singlematch?.status?.toLowerCase() === "active"){
            upcomingMatchesArray.push(singlematch)
        }
        })


    const getRosterData = (match) => {
    
        var team_id_1 = ''
        var team_id_2 = ''

        if(match.game_type != 'VALORANT'){
            team_id_1 = match?.teams[0]?._id
            team_id_2  = match?.teams[1]?._id
        }else{
            team_id_1 = match?.teams[0]?.opponent?.id ? match?.teams[0]?.opponent?.id : match?.teams[0]?._id
            team_id_2  = match?.teams[1]?.opponent?.id ? match?.teams[1]?.opponent?.id : match?.teams[1]?._id
        }
        
        dispatch(getRosters(team_id_1, team_id_2, isGroupType(match?.game_type)));

    }
    
  return (
  <View>
    <View key={index} style={{marginLeft:16,marginRight:16}}>
    {upcomingMatchesArray.map(
      (team, team_index) =>{
         //console.log("%%%team => > %%%%%%%",team);
          return (
          <TouchableOpacity
            key={team_index}
            onPress={() => {
              getRosterData(team);
              console.log("%%%team => > %%%%%%% =>>>>>>> ",team);

              const LeagueName = team?.league_name ? team?.league_name : "";
              const SeriesName = team?.series_name ? team?.series_name : "";
              const TourName = team?.tour_name ?  team?.tour_name : "";
            
               const tour_title =  LeagueName + " " + SeriesName + " " + TourName || ""; 

              navigation.navigate("MatchDetails", {
                match: team,
                isGroupType: isGroupType(team?.game_type),
                tour_title: tour_title
              });
            }}
          >
            <MatchCard
              team={team}
              k={team_index}
              isLive={false}
              isGroupType={isGroupType(team?.game_type)}
            />
          </TouchableOpacity>)
      })}
  </View>
  </View>
  );
};
// ZZZ means old contests or LIVE
export default TournamentCard;

const styles = StyleSheet.create({});
