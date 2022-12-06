import React, { useCallback } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  ImageBackground,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import axios from "axios";
import TournamentCard from "../../components/TournamentCard";
import TournamentCardLive from "../../components/TournamentCardLive";
import { BASE_URL, GAMES } from "../../extras/constants";

import { Skeleton } from "react-native-skeletons";
import { icons } from "../../utills/Icons";
import { useDispatch, useSelector } from "react-redux";
import AlertModal from "../../components/modal/AlertModal";
import { sortTournaments } from "../../extras/utils";


const DeviceWidth = Dimensions.get("window").width;
const DeviceHeight = Dimensions.get("window").height

const gamesArr = [
    {
      id: 1,
      title: 'ALL TITLES',
      gameIndex: 0,
      icon: icons.allItems_icon,
      iconA: icons.allItems_iconA,
    },
    {
      id: 2,
      title: 'VALORANT',
      gameIndex: 1,
      icon: icons.valorant_icon,
      iconA: icons.valorant_iconA,
    },
    {
      id: 3,
      title: 'PUBGM',
      gameIndex: 2,
      icon: icons.pubg_icon,
      iconA: icons.pubg_iconA,
    },
    {
      id: 4,
      title: 'FREE FIRE MAX',
      gameIndex: 3,
      icon: icons.freefire_icon,
      iconA: icons.freefire_iconA,
    },
]


const TournamentsScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  const liveMatchesArray = [];

  const [tournamentsMatches, setTournamentsMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [game, setGame] = useState(0);

  const [gamesArray, setGamesArray] = useState(gamesArr);
  const [activeTab, setActiveTab] = useState('ALL TITLES');

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    getTournaments();
  }, []);

  const tournaments = useSelector((state) => state.tournaments);

      
  const random_colors_array = ['#FFEE00', '#CE0037', '#FF326A', '#0090DE', '#FF5900', '#5CE6E6', '#BF5AF2', '#32D792', '#E948C5', '#7000FF', '#FF326A']

  const auth = useSelector((state) => state.auth);

  const getTournaments = async () => {
    // // console.log("getTournaments=>> ");
    const res = await axios.get(`${BASE_URL}/tournaments/new`);
    //// // console.log('res new tournaments', res);

    var tourMatch = aggregateMatchesByTournaments(res.data.data)

    const all_tournaments = tourMatch.data
    all_tournaments.forEach(element => {
      //console.log("element => ", element.matches)
      element.matches.forEach((match, index) => {

        match['border_color'] = random_colors_array[random_colors_array.length % (index+1)];
        match['border_color2'] = random_colors_array[random_colors_array.length % (index+2)];

      });
    });

    console.log("all_tournaments ", all_tournaments);

    setTournamentsMatches(all_tournaments);

  };
  const aggregateMatchesByTournaments = (matches) =>{
      const aggTour = {};
      const finalObject={data:[]};
      matches.forEach((match)=>{
        let id = match.tournament?match.tournament.id:match.tour_id
        if(!aggTour[id]){
          aggTour[id]=[];
        }
        aggTour[id].push(match);
      });
      // // // console.log('aggreagate tourn',aggTour);
      for(let tour in aggTour){
        finalObject.data.push({matches:aggTour[tour],type:aggTour[tour][0].game_type});
      }
      // // console.log('final object',finalObject);
      return finalObject;
  }
  useEffect(() => {
    getTournaments();
  }, []);

  function allCompleted(tour) {
    let is = true;
    tour.matches.forEach((e) => {
      if (e.status?.toLowerCase() === "active") is = false;
    });
    return is;
  }
  let flag = true;
  return (
    <ImageBackground source={icons.background_img} style={{height: '100%', }} >
    <View style={{ flex: 1,  marginTop: Platform.OS === "ios" ? -60 : -20}} >
    <SafeAreaView style={{ flex: 1,  }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        style={{
          flex:1
        }}
      >

        <View style={{ width: '100%', marginTop: 30, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
          {gamesArray.map((item) => (
              <View>
                  <View style={{flex: 1, alignItems: 'center'}} >
                    <TouchableOpacity 
                      onPress={() => {setActiveTab(item.title); setGame(item.gameIndex)}}
                      style={[ { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingBottom: 5, }]} >
                      <View style={{width:  activeTab != item.title ? 40 : null, alignItems: 'center', justifyContent: 'center'}} > 
                        <Image source={activeTab == item.title ? item.iconA : item.icon} style={{height: 28, width: 28, }} />
                      </View>
                      {activeTab == item.title ? <Text style={{color: '#FF326A', fontSize: 12, marginLeft: 6}} >{item.title} </Text> : null}
                    </TouchableOpacity>
                    {activeTab == item.title ? <View style={{height: 4, width: '100%', marginHorizontal: 12, marginTop: 6, borderTopRightRadius: 20, borderTopLeftRadius: 20, backgroundColor: '#FF326A'}} /> : null }
                  </View>
              </View>
            ))}
        </View>


        <View>
          <Image 
            source={
              game === 0 ? icons.all_titles_banner 
              : game === 1 ? icons.valorant_banner 
              : game === 2 ? icons.pubg_banner 
              : game === 3 ? icons.freeFire_banner 
              : icons.all_titles_banner 
            }
            style={{height: 170, position: 'absolute', top: 0, width: DeviceWidth, opacity: 0.5 }}
        />
        </View>

        <ScrollView style={{
          flex:1,
        }}>
          {loading ? (
            <Skeleton
              count={7}
              width={"100%"}
              color={"#211134"}
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
          ) : 
          tournamentsMatches?.filter((match, index) => {
            if (!allCompleted(match)) {
              if (game === 0) {
                return true
              }
              if (
                game === 1 &&
                (!match.type || match.type == GAMES.VALORANT)
              ) {
                return true
              } else if (game === 2 && match.type == GAMES.BGMI) {
                return match
              } else if (game === 3 && match.type == GAMES.FREEFIRE) {
                return true
              }
            } else return false;
          }).length ? (
            <View style={{marginBottom: Platform.OS === 'ios' ? 40 : 60, marginTop: 20}} >

              <View>
                  {tournamentsMatches && <View style={{}} >
                    <View style={{}} >
                      <TournamentCardLive
                          navigation={navigation}
                          tournamentMatches={tournamentsMatches}
                        />
                    </View>
                  </View>}
              </View>
         
            {<Text style={{
              color:"#fff",
              fontSize:18,
              padding:10,
              paddingLeft: 20,
          fontFamily:"Inter-SemiBold",
            }}>Upcoming Matches</Text>}


              {activeTab === 'FREE FIRE MAX' && <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20
                  //height: "80%",
                }}
              >
                <Image
                  style={{ width: 100, height: 100 }}
                  resizeMode="contain"
                  source={require("../../../assets/empty.png")}
                />
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    padding: 10,
                    fontSize: 17,
                  }}
                >
                  No Upcoming Matches Today
                </Text>
              </View>}

            {sortTournaments(tournamentsMatches).map((match, index) => {

              //console.log("match  matches =>>>>> ", match.matches);
              if (!allCompleted(match)) {
                if (game === 0) {
                  return (
                    <View key={index}>
                      <TournamentCard
                        navigation={navigation}
                        index={index}
                        match={match}
                      />
                    </View>
                  );
                }
                if (
                  game === 1 &&
                  (!match.type || match.type == GAMES.VALORANT)
                ) {
                  return (
                    <View key={index}>
                      <TournamentCard
                        navigation={navigation}
                        index={index}
                        match={match}
                      />
                    </View>
                  );
                } else if (game === 2 && match.type == GAMES.BGMI) {
                  return (
                    <View key={index}>
                      <TournamentCard
                        navigation={navigation}
                        index={index}
                        match={match}
                      />
                    </View>
                  );
                } else if (game === 3 && match.type == GAMES.FREEFIRE) {
                  return (
                    <View key={index}>
                      {/* <TournamentCard
                        navigation={navigation}
                        index={index}
                        match={match}
                      /> */}
                    </View>
                  );
                }
              } else return null;
            })}</View>
          ) : (
            <View style={{
              flex: 1,
              alignItems:"center",
              justifyContent:"center",
              marginTop: -50,
              height: 200
            }}>
              <Text style={{ color: "white", alignSelf: "center", fontSize: 20 }}>
                No Games for Today. Stay Tuned!
              </Text>
            </View>
          )}
        </ScrollView>
      </ScrollView>

      
         {auth?.alertModal != null
          ? 
          <AlertModal />
          :
          null
          }

      
      <View style={{padding:10,marginBottom:40,}}></View>
    </SafeAreaView>
    </View>
    </ImageBackground>
  );
};

export default TournamentsScreen;
