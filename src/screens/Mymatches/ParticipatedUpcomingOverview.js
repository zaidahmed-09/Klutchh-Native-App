import { View, Text, SafeAreaView, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../constants/colors";

import { isGroupType } from "../../extras/utils";

import HeroContestCard from "../../components/HeroContestCard";
import { useSelector } from "react-redux";
import YourTeams from "../../components/teams/YourTeams";
import { CalcTime } from "../../components/CalcTime";
import { ProgressBar } from "react-native-paper";
import { GlobalButton, TextWhite } from "../../components/reusables";

const ParticipatedUpcomingOverview = ({ route, navigation }) => {
  const { match, participatedList, isGroupGame, isUpcoming, contest_item, matchStatus } = route.params;
  //const [contestDetails, setContestDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const auth = useSelector((state) => state.auth);


  const LeagueName = match?.league_name ? match?.league_name : "";
  const SeriesName = match?.series_name ? match?.series_name : "";
  const TourName = match?.tour_name ?  match?.tour_name : "";

 const tour_title = isGroupType(match?.game_type) ? (match?.tour_id?.name || '') :  (LeagueName + " " + SeriesName + " " + TourName || "")

  useEffect(() => {

  }, []);

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
             contest_status='upcoming'
             isGroupType={isGroupType(match?.game_type)}
             gameType={match?.game_type}
             match_details={match}
             match_status={'upcoming'}
             border_color={match?.border_color}
             border_color2={match?.border_color2}
             />

          <View
            style={{
            flex: 1,
            width: '100%',
            backgroundColor: '#FFFFFF20',
            borderColor: "#FFFFFF30",
            borderWidth: 1,
            borderRadius: 8,
            marginTop: 20
        }}
      >
        <View style={{backgroundColor: '#FFFFFF30', padding: 15, borderTopLeftRadius: 8, borderTopRightRadius: 8}} >
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
            <Text style={{color: "#fff", fontSize: 14 }} >Entry : ₹ {contest_item?.contest_id?.entry_fee}</Text>
            <Text style={{color: "#fff", fontSize: 14 }}>{contest_item?.contest_id?.name}</Text>
          </View>

          <View style={{paddingTop: 10}} >
            <ProgressBar
              progress={Number(contest_item?.contest_id?.current_entries) / Number(contest_item?.contest_id?.max_entries)}
              width="100%"
              color="#FF326A"
              style={{backgroundColor: '#28282870'}}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 4, justifyContent: 'space-between'}} >
              <View style={{ }}>
                <Text style={{ color: "#FF326A",fontSize: 12 }}>
                  {Number(contest_item?.contest_id?.max_entries) - Number(contest_item?.contest_id?.current_entries)} spots left
                </Text>
              </View>
              <Text style={{color: "#fff", fontSize: 12 }}>{Number(contest_item?.contest_id?.max_entries)} spots</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 15,
          }}
        >
          <View>
            <YourTeams teamPlayers={contest_item?.selected_team} group_type={isGroupType(match.game_type)} />
          </View>
          
          <View style={{flex: 1, width: '100%', marginTop: 30, marginHorizontal: 20}} >
                <GlobalButton onPress={() => {
                  navigation.navigate('EditParticipateContest',{
                    contest: contest_item,
                    tour_title: tour_title,
                    matches: match,
                    isGroupType: isGroupType(match.game_type),
                  })
                  }} >
                    <TextWhite>EDIT TEAM</TextWhite>
                </GlobalButton>
            </View>
        </View>

      </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParticipatedUpcomingOverview;
