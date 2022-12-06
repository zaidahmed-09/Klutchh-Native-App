import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import NewMvpPlayerCard from "../../components/NewMvpPlayerCard";

import { AutoDragSortableView } from "react-native-drag-sort";

import { connect } from "react-redux";
import {
  getCurrentUser,
  logoutUser,
  setStackMode,
} from "../../redux/actions/auth";
import axios from "axios";
import { BASE_URL, BottomNavigationTabs } from "../../extras/constants";
import colors from "../../constants/colors";
import { GlobalButton, TextWhite } from "../../components/reusables";
import HeroContestCard from "../../components/HeroContestCard";
import { CalcTime } from "../../components/CalcTime";
import StepProgress from "../../components/progressbar/StepProgress";


const DeviceWidth = Dimensions.get("window").width;

const { width } = Dimensions.get("window");

const parentWidth = width;
const childrenWidth = width*0.9;
const childrenHeight = 72;

function PreviewTeam({
  route,
  auth,
  getCurrentUser,
  logoutUser,
  setStackMode,
  navigation
}) {
  const { SelectedPlayers, contestID, isGroupType, tour_title, matches, border_color, border_color2 } = route.params;

  
  const [mvplist, setMvplist] = useState(SelectedPlayers);
 
  const checkAuth = () => {
    if (auth.user) enterContest();
    else {
      Alert.alert("INFO", "Please Login / Signup to Continue!");
      setStackMode("login");
    }
  };

  const enterContest = () => {

  
    let selected_team = [];

    mvplist.map(function (e) {
      return selected_team.push(e);
    });

   

    var mvps = []

    if(isGroupType){
      mvps = [mvplist[0]._id, mvplist[1]._id, mvplist[2]._id];
    }else{
      mvps = [mvplist[0].pandascore_id, mvplist[1].pandascore_id, mvplist[2].pandascore_id];
    }

    // setActiveRoute(null)

    var data = {
        contest_id: contestID._id,
        selected_team: selected_team,
        mvp: mvps,
    }

    axios
      .post(
        `${BASE_URL}/participate`,
        {
          contest_id: contestID._id,
          selected_team: selected_team,
          mvp: mvps,
          game_type: isGroupType
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.access_token}`,
          },
        }
      )
      .then((response) => {

        console.log('====================================');
       // console.log("response =>>>> ", response);
        console.log('====================================');
        Alert.alert(response.data.status, response.data.msg);
        navigation?.popToTop();
        getCurrentUser(auth.access_token);
        if (
          response.data.msg === "Not Enough Balance!" ||
          response.data.msg === "NOT ENOUGH WALLET BALANCE"
        ) {
          navigation.navigate(BottomNavigationTabs.ProfileTab);
        } else {
          navigation.navigate(BottomNavigationTabs.MyGames);
        }
      })

      .catch((err) => {

        try {
          switch (err?.status) {
            case 401:
              //   add a Alert
              Alert.alert("ERROR", "Invalid Token!");
              logoutUser();
              setStackMode("login");

              break;
            case 400:
              //   add a Alert
              Alert.alert("ERROR", "Maximum Participation Reached!");
              break;

            default:
              // server error
              navigation?.popToTop();
              navigation.navigate(BottomNavigationTabs.MyGames);

              Alert.alert("OOPS!", "You've already participated in this contest");
              break;
          }
        } catch (e) {

          Alert.alert("ERROR", "Couldn't reach the server");
        }
      });
  };

  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: colors.PRIMARY_COLOR, color: "white" }}
    >
      <SafeAreaView
        style={{ flex: 1, backgroundColor: colors.PRIMARY_COLOR, alignItems: 'center'}}
      >

       <View style={{marginTop: 5}} >
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
             isStepProgress={true}
             border_color={border_color}
             border_color2={border_color2}
             />

            <StepProgress currentIdx={3} />
       </View>


        <Text
          style={{
            color: "white",
            marginTop: 0,
            fontSize: 18,
            fontFamily: 'Inter-SemiBold'
          }}
        >
          Select your Top 3 players
        </Text>
        <Text
          style={{
            color: "gray",
            fontSize: 10,
            fontFamily: 'Inter-SemiBold'
          }}
        >
          Hold, Drag, and Drop to position your top 3
        </Text>
        <View
          style={{
            flex: 1,
            margin: 10,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 0,
            backgroundColor: "#211134",
            padding: 5,
          }}
        >
          <AutoDragSortableView
            dataSource={mvplist}
            parentWidth={parentWidth}
            childrenWidth={childrenWidth}
            marginChildrenBottom={8}
            marginChildrenRight={5}
            marginChildrenLeft={5}
            marginChildrenTop={8}
            childrenHeight={childrenHeight}
            onDataChange={(data) => {
              setMvplist(data);

              if (data.length != mvplist.length) {
                setMvplist(data);
              }
            }}
            autoThrottle={10}
            keyExtractor={(item, index) => item._id}
            renderItem={(item, index) => {
              return (
                <NewMvpPlayerCard
                  data={item}
                  present={index < 3}
                  id={index}
                  isGroupType={isGroupType}
                />
              );
            }}
            delayLongPress={100}
          />

          <View style={{flexDirection: 'row', flexWrap: 'wrap', width: DeviceWidth-20, marginBottom: 15, marginTop: 10, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' }} >
          
            <Text  style={{fontSize: 13, color: 'white', marginTop: 4, fontFamily: 'Inter-Medium'}} >You’ve selected </Text>
            <Text  style={{fontSize: 13, color: '#FF326A', marginTop: 4, fontFamily: 'Inter-SemiBold'}} >{mvplist[0].name} (2x), </Text>
            <Text  style={{fontSize: 13, color: '#FF326A', marginTop: 4, fontFamily: 'Inter-SemiBold'}} >{mvplist[1].name} (1.75x)</Text>
            <Text  style={{fontSize: 13, color: 'white', marginTop: 4, fontFamily: 'Inter-Medium'}} > and </Text>
            <Text  style={{fontSize: 13, color: '#FF326A', marginTop: 4, fontFamily: 'Inter-SemiBold'}} >{mvplist[2].name} (1.5x) </Text>
            <Text  style={{fontSize: 13, color: 'white', marginTop: 4, fontFamily: 'Inter-Medium'}} >as your MVPs</Text>
          </View>
          <View style={{ textAlign: "center",marginBottom: -10, paddingHorizontal: 10 }}>
            {mvplist && (
              <GlobalButton
              onPress={() => checkAuth()}
               >
                  <TextWhite>ENTER CONTEST</TextWhite>
                </GlobalButton>
            )}
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    getCurrentUser: (token) => dispatch(getCurrentUser(token)),
    setStackMode: (mode) => dispatch(setStackMode(mode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PreviewTeam);
