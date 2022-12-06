import React, { useRef, useState, useEffect } from "react";
import { View, Button, Text, Image, Dimensions, TextInput, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, Platform, ImageBackground } from "react-native";

import axios from "axios";
import { icons } from "../../utills/Icons";

import { connect, useSelector } from "react-redux";
import { BASE_URL } from "../../extras/constants";
import { Skeleton } from "react-native-skeletons";

const DeviceWidth = Dimensions.get("window").width;
const DeviceHeight = Dimensions.get("window").height;

const LeaderboardScreen = (props) => {

    const auth = useSelector((state) => state.auth);

    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState({});

    const [leaderBoardDetails, setLeaderBoardDetails] = useState([]);

    useEffect(() => {
        fetchLeaderBoardDetails()
    }, [])
    

    const fetchLeaderBoardDetails = () => {
        axios
        .get(`${BASE_URL}/user/auth/leaderboard`, {
            headers: {
                Authorization: `Bearer ${auth.access_token}`,
            },
        })
        .then((response) => {
            console.log("response.data?.data?.users => ",response?.data?.data?.user);
            setLeaderBoardDetails(response?.data?.data?.users)
            setCurrentUser(response?.data?.data?.user)
            setLoading(false)
            
        })
        .catch((response) => {
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

    const WinnersCard = ({data}) => {
        return(
                      
            <View style={{marginBottom: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', fontFamily:"Inter-SemiBold",}}>
                <View style={[styles.opacityCardContainer, styles.sideWinner, {marginRight: 10}]} >
                    <View style={{position: 'absolute', top: -15}} >
                        <Image source={icons.avatar3} style={{height: 30, width: 30,}} />
                    </View>
                    <Image source={icons.prize_2} style={{height: 34, width: 34, marginTop: 15, marginBottom: 4, resizeMode: 'contain'}} /> 
                    <Text numberOfLines={1} style={{fontFamily:"Inter-SemiBold",fontSize: 11, width: 75, textAlign: 'center', marginBottom: 0, color: 'white'}} >{data[1].name}</Text>
                    <Text style={{fontFamily:"Inter-SemiBold",fontSize: 15, lineHeight: 17, color: 'white'}} >₹ {parseInt(data[1].totalAmountWon)}</Text>
                </View>
                <View style={[styles.opacityCardContainer, styles.centerWinner]} >
                    <View style={{position: 'absolute', top: -25}} >
                        <Image source={icons.avatar2} style={{height: 50, width: 50,}} />
                    </View>
                    <Image source={icons.prize_1} style={{height: 50, width: 50, marginTop: 20, marginBottom: 4, resizeMode: 'contain'}} /> 
                    <Text numberOfLines={1} style={{fontFamily:"Inter-SemiBold",fontSize: 11, width: 100, textAlign: 'center', marginBottom: 0, color: 'white'}} >{data[0].name}</Text>
                    <Text style={{fontFamily:"Inter-SemiBold",fontSize: 20, lineHeight: 22, color: 'white'}} >₹ {parseInt(data[0].totalAmountWon)}</Text>
                </View>
                <View style={[styles.opacityCardContainer, styles.sideWinner, {marginLeft: 10}]} >
                    <View style={{position: 'absolute', top: -15}} >
                        <Image source={icons.avatar1} style={{height: 30, width: 30,}} />
                    </View>
                    <Image source={icons.prize_3} style={{height: 34, width: 34, marginTop: 15, marginBottom: 4, resizeMode: 'contain'}} /> 
                    <Text numberOfLines={1} style={{fontFamily:"Inter-SemiBold",fontSize: 11, width: 75, textAlign: 'center', marginBottom: 0, color: 'white'}} >{data[2].name}</Text>
                    <Text style={{fontFamily:"Inter-SemiBold",fontSize: 15, lineHeight: 17, color: 'white'}} >₹ {parseInt(data[2].totalAmountWon)}</Text>
                </View>
            </View>
        )
    }

    const ItemCard = ({item, index, isCurrentUser}) => {

        const dummyUserImg = ['dummyImg1', 'dummyImg2', 'dummyImg3' ]

        const dummyImg = dummyUserImg[(Math.random() * dummyUserImg.length) | 0]
        
        return(
            <View style={[isCurrentUser ? styles.opacityCardContainer : {marginTop: 10}]}  >
                <View style={styles.opacityCard}>
                    <View style={{ backgroundColor: '#00011B00', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
                        <View style={{marginRight: 10, width: 35}} >
                            <Text style={{fontSize: 12, color: 'white'}} >{isCurrentUser ? currentUser.rank : (index+1)}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginHorizontal: 50, alignItems: 'flex-start'}} >
                            <Image 
                                source={
                                    dummyImg == 'dummyImg1' ? icons.avatar1
                                    : dummyImg == 'dummyImg2' ? icons.avatar2
                                    : icons.avatar3
                                } 
                                style={{height: 28, width: 28, marginRight: 10}} />
                            <Text numberOfLines={1} style={{marginTop: 4, width: 120, fontSize: 12, color: 'white'}} >{item.name}</Text>
                        </View>
                        <View style={{}} >
                            <Text style={{fontSize: 12, color: 'white'}} >₹ {parseInt(item.totalAmountWon) ? parseInt(item.totalAmountWon).toLocaleString('en-IN') : 0}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }


    return (
        <ImageBackground source={icons.background_img} style={{height: '100%', }} >
        <SafeAreaView style={{ flex: 1, fontFamily:"Inter-SemiBold", paddingBottom: Platform.OS === 'ios' ? 0 : 40}}>
            {loading
            ?
            <Skeleton
                count={7}
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
            :
            <View>
                <ScrollView>
                    <View style={{padding: 20, marginTop: 20, marginBottom: 80 }} >
                        <WinnersCard data={leaderBoardDetails.slice(0, 3)} />

                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
                            <Text style={{fontFamily:"Inter-SemiBold",fontSize: 13, color: 'white',}} >Rank</Text>
                            <Text style={{fontFamily:"Inter-SemiBold",fontSize: 13, color: 'white'}} >Name</Text>
                            <Text style={{fontSize: 13, color: 'white',fontFamily:"Inter-SemiBold",}} >Amount Won</Text>
                        </View>

                        <ItemCard item={currentUser} index={0} isCurrentUser={true} />

                        <FlatList
                            data={leaderBoardDetails.slice(0, 50)}
                            keyExtractor={(item) => item._id}
                            renderItem={({item, index}) => (
                                <View>
                                    <ItemCard item={item} index={index} isCurrentUser={false} />
                                </View>
                            )}
                        />
                                
                    </View>
                </ScrollView>
            </View>
            }
            
        </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    opacityCardContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 0.5,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 8,
        marginTop: 15,
        fontFamily:"Inter-SemiBold",
      },
    opacityCard: {
        backgroundColor:"rgba(0, 1, 27, 0.2)",
        borderWidth: 0.5,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 8,
        padding: 10,
        paddingHorizontal: 15,
        fontFamily:"Inter-SemiBold",
    },
    centerWinner: {
        flex: 0.9,
        height: 140,
        padding: 6,
        //marginHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:"Inter-SemiBold",
    },
    sideWinner: {
        height: 100,
        width: 85,
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:"Inter-SemiBold",
    },
})
export default LeaderboardScreen
