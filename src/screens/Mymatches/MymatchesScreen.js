import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Platform,
    ImageBackground,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";

  import { useDispatch, useSelector } from "react-redux";
  import Button from "../../components/Button";
  import { setStackMode } from "../../redux/actions/auth";

  
  import CompletedMatches from "../../components/CompletedMatches";
  import UpcomingMatches from "../../components/UpcomingMatches";
  import LiveMatches from "../../components/LiveMatches";

  import styled from 'styled-components';
  import { icons } from "../../utills/Icons";

  import axios from "axios";
  import { BASE_URL } from "../../extras/constants";

  
  
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
  
  const ActiveBtn = styled(TouchableOpacity)`
  background:#FF326A;
  border-radius: 18px;
  width: 100px;
  height: 36px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 8px;
  `
  
  const InActiveBtn = styled(TouchableOpacity)`
  background: rgba(235, 235, 245, 0.3);
  border-color: rgba(255, 255, 255, 0.6);
  border-width: 1px;
  border-radius: 18px;
  width: 100px;
  height: 36px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 8px;
  `
  
  
  const MyMatchesScreen = ({navigation}) => {
    const [upcoming, setUpcoming] = useState(1);
    const [live, setLive] = useState(0);
    const [completed, setCompleted] = useState(0);
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
  
    const [game, setGame] = useState(0);
  
    const [activeTab, setActiveTab] = useState('upcoming');
  
    const [gamesArray, setGamesArray] = useState(gamesArr);
    const [activeGameTab, setActiveGameTab] = useState('ALL TITLES');
  
    const [loading, setLoading] = useState(true);
  
    const [apiResponseParticipated, setApiResponseParticipated] = useState([]);
  
    const random_colors_array = ['#FFEE00', '#CE0037', '#FF326A', '#0090DE', '#FF5900', '#5CE6E6', '#BF5AF2', '#32D792', '#E948C5', '#7000FF', '#FF326A']
  
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
            console.log('====================================');
            console.log("MY MATCHES SCREEN  ");
            console.log('====================================');
  
            fetchParticipated()
      });
  
      
      return unsubscribe;
    }, [navigation]);
  
    const fetchParticipated = async () => {
      const res = await axios.get(`${BASE_URL}/my/participated`, {
        headers: {
          Authorization: `Bearer ${auth.access_token}`,
        },
      });

      if(res.data){
      
  
        const new_match = res.data
        new_match?.data?.forEach((match, index) => {
          match['border_color'] = random_colors_array[random_colors_array.length % (index+1)];
          match['border_color2'] = random_colors_array[random_colors_array.length % (index+2)];
        });
  
        console.log("new_match ", new_match);
    
        setApiResponseParticipated(new_match)
  
  
        setLoading(false)
      }
      return res.data;
    };
  
    const MyMatchesTab = ({}) => {
      return(
        <View style={{ alignItems: 'center'}} >
            <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'space-evenly'}}  >
                <View>
                    {activeTab == 'upcoming'
                    ?
                    <ActiveBtn onPress={() => {setActiveTab('upcoming'); setLive(0); setUpcoming(1)}}>
                      <Text style={{
                        fontSize: 12,
                        color: "white",
                        fontFamily:"Inter-SemiBold",
                      }}>UPCOMING</Text>
                    </ActiveBtn>
                    :
                    <InActiveBtn onPress={() => {setActiveTab('upcoming'); setLive(0); setUpcoming(1)}}>
                      <Text style={{
                        fontSize: 12,
                        fontFamily:"Inter-SemiBold",
                        color: "white",
                      }}>UPCOMING</Text>
                    </InActiveBtn>
                    }
                </View>
  
  
                <View>
                    {activeTab == 'live'
                    ?
                    <ActiveBtn onPress={() => {setActiveTab('live'); setLive(1)}}>
                      <Text style={{
                        fontSize: 12,
                        fontFamily:"Inter-SemiBold",
                        color: "white",
                      }}>LIVE</Text>
                    </ActiveBtn>
                    :
                    <InActiveBtn onPress={() => {setActiveTab('live'); setLive(1)}}>
                      <Text style={{
                        fontSize: 12,
                        fontFamily:"Inter-SemiBold",
                        color: "white",
                      }}>LIVE</Text>
                    </InActiveBtn>
                    }
                </View>
  
  
                <View>
                    {activeTab == 'completed'
                    ?
                    <ActiveBtn onPress={() => {setActiveTab('completed'); setLive(0); setUpcoming(0)}}>
                      <Text style={{
                        fontSize: 12,
                        color: "white",
                        fontFamily:"Inter-SemiBold",
                      }}>COMPLETED</Text>
                    </ActiveBtn>
                    :
                    <InActiveBtn onPress={() => {setActiveTab('completed'); setLive(0); setUpcoming(0)}}>
                      <Text style={{
                        fontSize: 12,
                        color: "white",
                        fontFamily:"Inter-SemiBold",
                      }}>COMPLETED</Text>
                    </InActiveBtn>
                    }
                </View>
  
          </View>
        </View>
      )
    }

    return (
      <ImageBackground source={icons.background_img} style={{height: '100%', }} >
      <SafeAreaView style={{ flex: 1, marginTop: Platform.OS === "ios" ? -30 : 0, paddingBottom: 80 }}>
  
         
          {!loading
            ?
          <View>
           
              <View >
                    <MyMatchesTab />
              </View>
  
              <View style={{marginTop: 10, marginBottom: 100}} >
                {auth.loggedIn ? (
                  live ? (
                    <LiveMatches matchStatus='live' matchData={apiResponseParticipated} />
                  )
                  : upcoming ? (
                    <UpcomingMatches matchStatus='upcoming' matchData={apiResponseParticipated} />
                  ) : (
                    <CompletedMatches matchStatus='completed' matchData={apiResponseParticipated} />
                  )
                ) : (
                  <View
                    style={{
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require("../../../assets/logout-profile.png")}
                      ></Image>
                    </View>
                    <Button
                      title={"Log In"}
                      onPress={() => dispatch(setStackMode("auth"))}
                    />
                  </View>
                )}
              </View>
          </View>
  
          :
          null
          }
  
        
      </SafeAreaView>
      </ImageBackground>
    );
  };
  
  const DeviceWidth = Dimensions.get("window").width;
  const DeviceHeight = Dimensions.get("window").height;
  
  export default MyMatchesScreen;
  