import React, { useCallback } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  ImageBackground,
  Dimensions
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import axios from "axios";
import ContestCard from "../../components/ContestCard";
import SkeletonMatchDetails from "../../components/SkeletonMatchDetails";

import { BASE_URL } from "../../extras/constants";
import HeroContestCard from "../../components/HeroContestCard";
import colors from "../../constants/colors";

import { CalcTime } from "../../components/CalcTime";

import StepProgress from "../../components/progressbar/StepProgress";



const DeviceWidth = Dimensions.get("window").width;

const MatchDetails = ({ navigation, route,  }) => {
  const [matches, setMatches] = useState([]);
  const [grpMatches, setGrpMatches] = useState([]);

  const [loading, setLoading] = useState(false);
  const { match, isGroupType, tour_title } = route.params;


  const onRefresh = useCallback(() => {
    getMatchDetails();
  }, []);

  function getMatchDetails() {
    setLoading(true);
    axios
      .get(`${BASE_URL}/match/${match._id}`)
      .then((response) => {
        setMatches(response.data.match);
       console.log("response contest data", response.data.match);

        var arrData = response.data.match.contests

        const groupByCategory = arrData.reduce((group, product) => {
          const { name } = product;
          group[name] = group[name] ?? [];
          group[name].push(product);
          return group;
      }, {});

      setGrpMatches(groupByCategory);

        setLoading(false);
      })
      .catch((response) => {
        // // console.log(response.message, "allMatchesErr");
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

  useEffect(() => {
    getMatchDetails();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.PRIMARY_COLOR}}>

      {!loading && matches.contests && (
        <View style={{marginTop: Platform.OS === "ios" ? -30 : 0,}} >
      
        <HeroContestCard 
              image1={matches?.teams[0]?.opponent?.image_url}
              image2={matches?.teams[1]?.opponent?.image_url}
              name1 = {matches?.teams[0]?.opponent?.name}
              name2 = {matches?.teams[1]?.opponent?.name}
              tour_title={tour_title}
              game_type={match?.game_type}
              startTime={CalcTime(matches?.starts_at)}
              contest_status='upcoming'
              isGroupType={isGroupType}

              gameType={match?.game_type} 
              match_details={matches}
              //team_details={roster_1.length+roster_2.length}
              match_status={'upcoming'}
              isStepProgress={true}
              border_color={match?.border_color}
              border_color2={match?.border_color2}
            />
            
            
            <StepProgress currentIdx={0} />
        </View>

          )}
      

      <ScrollView
        style={{
          flex: 1,
          height: "100%",
          //backgroundColor: "#211134",
        }}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      >
        <SkeletonMatchDetails isLoading={loading}>
          {!loading && matches.contests && (
            <>

           
            
            <View style={{ margin: 16, marginTop: -20 }}>

              <ScrollView>
               
                    <View style={{}} >
                      {Object.keys(grpMatches).map((item, i) => {
                        return(
                          <View>
                            <Text style={{color: 'white', marginLeft: 10, marginTop: 18, fontFamily: 'Inter-Bold', fontSize: 16}} >{item}</Text>
                            {grpMatches[item].map((contest) => (
                              <TouchableOpacity
                                key={i}
                                onPress={() => {
                                  console.log("contest =>>>> ", contest);
                                  navigation?.navigate("ContestDetails", {
                                    contestID: contest._id,
                                    tour_title: tour_title,
                                    matches: matches,
                                    match_type: item,
                                    border_color: match?.border_color,
                                    border_color2: match?.border_color2,
                                    isGroupType,
                                    
                                  });
                                }}
                              >
                                <ContestCard
                                  contest={contest}
                                  navigation={navigation}
                                  isGroupType={isGroupType}
                                  hideTitle={true}
                                  match_type={item}
                                  border_color={match?.border_color}
                                  border_color2={match?.border_color2}
                                  match_name={match.name}
                                />
                              </TouchableOpacity>
                            ))}
                          </View>
                        )
                      })}  
                    </View>

                <View style={{ margin: 20 }}></View>
              </ScrollView>
            </View>
            </>
          )}
        </SkeletonMatchDetails>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MatchDetails;