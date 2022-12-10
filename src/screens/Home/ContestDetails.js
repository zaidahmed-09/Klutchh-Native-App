import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrizeResultCard from "../../components/PrizeResultCard";

import { BASE_URL } from "../../extras/constants";
import axios from "axios";
import { CalcTime } from "../../extras/utils";
import { Skeleton } from "react-native-skeletons";
import HeroContestCard from "../../components/HeroContestCard";
import { ProgressBar } from "react-native-paper";
import { GlobalButton, TextWhite } from "../../components/reusables";
import StepProgress from "../../components/progressbar/StepProgress";

function ContestDetails({ navigation, route,  }) {
  const { contestID, isGroupType, isHistory, tour_title, matches, match_type, border_color, border_color2, image1,image2,name1,name2,startTime } = route.params;
  // // console.log("PARAMSSS",route.params);
  const [contestDetails, setContestDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  
  const fetchContest = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/contest/${contestID}?game_type=${!isGroupType}`);
      
      setContestDetails(res.data.contest);
      console.log("DATAAAA =>>> ",res.data.contest)
      setIsLoading(false);
    } catch (error) {
     
      setContestDetails(null);
    }
  };
  
  useEffect(() => {
    fetchContest();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#211134" }}>

      {isLoading || !contestDetails ? (
        <Skeleton
          count={3}
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
            width: "95%",
            height: 100,
            
          }}
        />
      ) : (
        contestDetails && (
          <>
            <View style={{marginTop: Platform.OS === "ios" ? -30 : 0,}} > 
            <HeroContestCard
             image1={image1}
             image2={image2}
             name1 = {name1}
             name2 = {name2}
             tour_title={tour_title}
             game_type={matches?.game_type}
             startTime={startTime}
             contest_status='upcoming'
             isGroupType={isGroupType}
             gameType={matches?.game_type}
             match_details={matches}
             match_status={'upcoming'}
             isStepProgress={true}
             border_color={border_color}
             border_color2={border_color2}
             />

          <StepProgress currentIdx={1} />

            </View>
            <ScrollView>
              <View
                style={{
                  flex: 1,
                  marginTop: 15,
                  marginLeft: 16,
                  marginRight: 16,
                  backgroundColor: "#211134",
                }}
              >
            

                <View style={{backgroundColor: '#FFFFFF20', borderWidth: 1, borderColor: '#ffffff20', padding: 15, borderRadius: 8, height: 80, marginBottom: 20}} >
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                    <Text style={{color: "#fff", fontSize: 14 }} >Entry : ₹ {contestDetails?.entry_fee}</Text>
                    <Text style={{color: "#fff", fontSize: 14 }}>Practice Contest</Text>
                  </View>

                  <View style={{paddingTop: 10}} >
                    <ProgressBar
                      progress={Number(contestDetails?.current_entries) / Number(contestDetails?.max_entries)}
                      width="100%"
                      color="#FF326A"
                      style={{backgroundColor: '#28282870'}}
                    />
                  </View>

                  <View style={{flexDirection: 'row', marginTop: 4, justifyContent: 'space-between'}} >
                      <View style={{ }}>
                        <Text style={{ color: "#FF326A",fontSize: 12 }}>
                        
                          {Number(contestDetails?.max_entries) - Number(contestDetails?.current_entries)} spots
                          
                        </Text>
                      </View>
                      <Text style={{color: "#fff", fontSize: 12 }}>{contestDetails?.max_entries} spots</Text>
                  </View>
                </View>

                <PrizeResultCard prizePool={contestDetails?.prize_pool_list} details={contestDetails} match_type={match_type} />

            
              </View>
            </ScrollView>
              <View style={{marginBottom: 0, marginHorizontal: 15}}>
               <GlobalButton
               onPress={() =>
                navigation.navigate("ParticipateContest", {
                  // teams: team,
                  contest: contestDetails,
                  matches: matches,
                  tour_title: tour_title,
                  border_color: border_color,
                  border_color2: border_color2,
                  isGroupType,
                  image1:image1,
                  image2:image2,
                  name1:name1,
                  name2:name2,
                  startTime:startTime
                })
              }
               >
                      <TextWhite>CREATE TEAM</TextWhite>
                    </GlobalButton>
              </View>
          </>
        )
      )}
    </SafeAreaView>
  );
}

export default ContestDetails;
