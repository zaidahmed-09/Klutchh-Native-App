import React, {useEffect, useState} from 'react'
import {SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import TeamSelect from '../../components/TeamSelect';
import colors from '../../constants/colors';
import { gameType, isGroupType } from '../../extras/utils';
import { getRosters } from '../../redux/actions/tournaments';

import styled from 'styled-components';
import { GlobalButton, TextWhite } from '../../components/reusables';

import ContestCardDetails from './ContestCardDetails';
import LiveStream from '../../components/modal/LiveStream';

const DeviceWidth = Dimensions.get("window").width;

const WatchLiveBtn = styled(TouchableOpacity)`
background: rgba(235, 235, 245, 0.1);
border-color: rgba(235, 235, 245, 0.3);
border-width: 1px;
border-radius: 50px;
width: 100px;
height: 30px;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
margin: 0px 0px 20px 0px;
`


const LiveParticipateContest = (props) => {

    const [showLiveStream, setShowLiveStream] = useState(false);

    const [loading, setLoading] = useState(true);
    var [player, setPlayer] = useState(0);
    var [credit_count, setCredits] = useState(0);
    var [selectedPlayers, setSelection] = useState([]);

    const tournaments = useSelector((state) => state.tournaments);

    const match = props.route.params.match

    const roster_1 = tournaments?.rosters?.data?.roster1
    const roster_2 = tournaments?.rosters?.data?.roster2


    const LeagueName = match?.league_name ? match?.league_name : "";
    const SeriesName = match?.series_name ? match?.series_name : "";
    const TourName = match?.tour_name ?  match?.tour_name : "";
  
    const tour_title =  LeagueName + " " + SeriesName + " " + TourName || "" 
    

    const dispatch = useDispatch();

    useEffect(() => {
      
        var match = props.route.params.match


        var team_id_1 = ''
        var team_id_2 = ''

        if(match.game_type != 'VALORANT'){
            // team_id_1 = match?.teams[0]
            // team_id_2  = match?.teams[1]
            team_id_1 = match?.teams[0]?._id
            team_id_2  = match?.teams[1]?._id
        }else{
            // team_id_1 = match?.teams[0]?.opponent?.id
            // team_id_2  = match?.teams[1]?.opponent?.id
            team_id_1 = match?.teams[0]?.opponent?.id ? match?.teams[0]?.opponent?.id : match?.teams[0]?._id
            team_id_2  = match?.teams[1]?.opponent?.id ? match?.teams[1]?.opponent?.id : match?.teams[1]?._id
        }

        dispatch(getRosters(team_id_1, team_id_2, isGroupType(match.game_type)));

        setLoading(false)
    }, [])
    




    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.PRIMARY_COLOR}} >

            
            {/* <HeroContestHeader gameType={match?.game_type} isGroupType={isGroupType(match.game_type)} /> */}

            <ContestCardDetails 
                image1={match?.teams[0]?.opponent?.image_url}
                image2={match?.teams[1]?.opponent?.image_url}
                name1 = {match?.teams[0]?.opponent?.name}
                name2 = {match?.teams[1]?.opponent?.name}
                isGroupType={isGroupType(match.game_type)} 
                gameType={match?.game_type} 
                tour_title={tour_title}
                match_details={match}
                team_details={roster_1?.length+roster_2?.length}
                match_status={'live'}
                contest_status={'live'}
                border_color={match?.border_color}
                border_color2={match?.border_color2}
            />

            {loading
                ?
                <Text> </Text>
                :
                <>
             <ScrollView>
                <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20 }} >

                {gameType(match?.game_type) && (
                <View style={{flexDirection: 'row', justifyContent: 'space-between',  width: DeviceWidth-50 }} >
                        <Text style={{color: 'white', width:'40%',  textAlign: 'right'}} >Squads</Text>
                        <View style={{flexDirection: 'row', }}>
                        <Text style={{color: 'white', marginRight: 30}} >K/D</Text>
                        <Text style={{color: 'white'}} >Credits</Text>
                        </View>
                    </View>
                    )}

                    <TeamSelect
                        data={match?.teams}
                        roster1={roster_1}
                        roster2={roster_2}
                        isLive={true}
                        team={gameType(match?.game_type) ? "GroupGame" : "GroupGame1"}
                        player={player}
                        setPlayer={setPlayer}
                        credit_count={credit_count}
                        setCredits={setCredits}
                        selectedPlayers={selectedPlayers}
                        setSelection={setSelection}
                    />

                    <View>
                        <Text
                        style={{
                            color: "white",
                            fontSize: 11,
                            alignSelf: "center",
                            marginBottom:3,
                        }}>
                        Oops! Too late to enter this match.
                        </Text>
                    </View>

                    <View style={{flex: 1, width: '100%', paddingHorizontal: 20, marginTop: 20, marginLeft: 10}} >
                        <GlobalButton onPress={() => {props.navigation.navigate('Home')}}>
                        <TextWhite>CHECK UPCOMING MATCHES</TextWhite>
                        </GlobalButton>
                    </View>

                </View>

               
            </ScrollView>
             {showLiveStream && <LiveStream showLiveStream={showLiveStream} streamUrl={match?.streams} onCloseModal={() => setShowLiveStream(false)} />}
             </>}
        </SafeAreaView>
    )
}

export default LiveParticipateContest