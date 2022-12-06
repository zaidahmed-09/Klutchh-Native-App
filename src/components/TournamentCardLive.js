import { StyleSheet, Text, View, ScrollView } from "react-native";
import React,{useState, useEffect} from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import { CalcTime } from "./CalcTime";
import MatchCard from "./MatchCard";
import { isGroupType, sortedMatchesByStartingTime } from "../extras/utils";

import Carousel, {Pagination} from "react-native-snap-carousel";
import { useDispatch, useSelector } from "react-redux";


const DeviceWidth = Dimensions.get("window").width;


const TournamentCard = ({
  tournamentMatches,
  index,
  navigation,
  status,
  isTournamentLogo,
}) => {


  const [carIndex, setCarIndex] = React.useState(0)
  const [carIndexId, setCarIndexId] = React.useState(0)

  const [liveMatches, setLiveMatches] = useState([]);

  const isCarousel = React.useRef(null)

  const dispatch = useDispatch();


  useEffect(() => {

  }, [])
  
  const liveMatchesArray = [];

  tournamentMatches.forEach((element, index) => {
    element.matches.forEach((matches) => {
      //// // console.log("matches , " , matches.status)
      if (matches?.status?.toLowerCase() === "active" && CalcTime(matches?.starts_at) === "ZZZ" ){
        liveMatchesArray.push(matches)
      }
    });
  });

  return (
    <View>
      {liveMatchesArray && liveMatchesArray?.length !=0 && <Text style={{
        color:"#fff",
        fontSize: 18,
        padding:10,
        fontFamily:"Inter-SemiBold",
        paddingLeft: 20
      }}>Live Matches</Text>}

    {liveMatchesArray && <View style={{ alignItems: 'center', marginBottom: 40}} >
        <Carousel
            layout="default"
            layoutCardOffset={9}
            ref={isCarousel}
            data={liveMatchesArray}
            renderItem={(team, team_index) => {
              return(
                  <TouchableOpacity
                    key={team_index}
                    onPress={() => {
                      console.log("live team =>>> ", team);
                      navigation.navigate("LiveParticipateContest", {
                        match: team.item,
                        isGroupType: isGroupType(team?.item?.game_type),
                      });
                    }}
                  >
                    <MatchCard
                      team={team.item}
                      k={team_index}
                      isGroupType={isGroupType(team?.item?.game_type)}
                      isLive={true}
                    />
                  </TouchableOpacity>
              )
            }}
            sliderWidth={DeviceWidth-32}
            itemWidth={DeviceWidth-32}
            onSnapToItem={(index) => {setCarIndex(index);}}
            useScrollView={true}
        />
       
        <Pagination
            dotsLength={liveMatchesArray.length}
            activeDotIndex={carIndex}
            carouselRef={isCarousel}
            containerStyle={{ position: 'absolute', top: 100}}
            dotStyle={{
                width: 12,
                height: 12,
                borderRadius: 6,
                marginHorizontal: 0,
                borderWidth: 1,
                borderColor: '#fff',
                padding: 1,
                backgroundColor: '#FF326A'
            }}
            inactiveDotStyle={{
              width: 20,
              height: 20,
              borderRadius: 10,
              marginHorizontal: 0,
              backgroundColor: 'rgba(235, 235, 245, 0.6)'
            }}
            tappableDots={true}
        />
    </View>}
      </View>
  );
};

export default TournamentCard;

const styles = StyleSheet.create({});
