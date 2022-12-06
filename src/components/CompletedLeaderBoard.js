import React from "react";
import { Text, View, Image } from "react-native";
import colors from "../constants/colors";
import { sort_match_points } from "./sort_points_table";


const CompletedLeaderBoard = ({ winners, participants, status, all, id, contest_dtails, leader_table, points_table }) => {

    const points_table_sorted = sort_match_points(points_table);


    return (
        <View style={{flex: 1, width: '100%', borderWidth: 1, borderColor: '#FFFFFF30', backgroundColor: '#FFFFFF10', borderRadius: 8}} >
           

            <View
                style={{
                    //flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 15,
                    flex: 1
                }}
                >
                <Text
                    style={{
                    color: colors?.WHITE,
                    fontSize: 16,
                    }}
                >
                    POINTS TABLE
                </Text>

                <View style={{height: 1, marginTop: 10, width: '100%', backgroundColor: '#FFFFFF40'}} />

                {points_table_sorted.length === 0 ? (
                status && status === "CANCELLED" ? (
                    <View>
                    <Text
                        style={{
                        color: "white",
                        textAlign: "center",
                        padding: 10,
                        }}
                    >
                        The Contest has been cancelled, you would have received the
                        refund in your wallet!
                    </Text>
                    </View>
                ) : (
                    <View>
                    <Text
                        style={{
                        color: "white",
                        textAlign: "center",
                        padding: 10,
                        }}
                    >
                        {" "}
                        Result not calculated
                    </Text>
                    </View>
                )
                ) : (
                    <View style={{padding: 10, width: '100%',}} >
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
                            <View>
                                <Text style={{fontSize: 14, fontFamily: 'Inter-Bold', color: '#EBEBF560'}} >Rank</Text>
                            </View>
                            <View>
                                <Text style={{fontSize: 14, fontFamily: 'Inter-Bold', color: '#EBEBF560'}} >Name</Text>
                            </View>
                            <View>
                                <Text style={{fontSize: 14, fontFamily: 'Inter-Bold', color: '#EBEBF560'}} >Points</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, marginTop: 5 }} >
                            {points_table_sorted.map((item, index) => (
                                <View style={{
                                    flexDirection: 'row', 
                                    marginBottom: 5, 
                                    backgroundColor: colors.PRIMARY_COLOR,
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    marginVertical: 6,
                                    flex: 1, 
                                    padding: 14,
                                    alignItems: 'center', 
                                    justifyContent: 'space-between'
                                }} >
                                    <View style={{width: 30,  }} >
                                        <Text style={{fontSize: 14, fontFamily: 'Inter-Bold', color: '#FFFFFF'}} >{index+1}</Text>
                                    </View>
                                    <View style={{}} >
                                        <Text style={{fontSize: 14, fontFamily: 'Inter-Bold', color: '#FFFFFF'}} >{item.name}</Text>
                                    </View>
                                    <View style={{}} >
                                        <Text style={{fontSize: 14, fontFamily: 'Inter-Bold', color: '#FFFFFF'}} >{Number(item.points).toFixed(2)}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                )
                }
               
            </View>

            <View
                style={{
                    //flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 15,
                    paddingTop: 0,
                    flex: 1
                }}
                >
                <Text
                    style={{
                    color: colors?.WHITE,
                    fontSize: 16,
                    }}
                >
                    LEADERBOARD
                </Text>

                <View style={{height: 1, marginTop: 10, width: '100%', backgroundColor: '#FFFFFF40'}} />

                {leader_table.length === 0 ? (
                status && status === "CANCELLED" ? (
                    <View>
                    <Text
                        style={{
                        color: "white",
                        textAlign: "center",
                        padding: 10,
                        }}
                    >
                        The Contest has been cancelled, you would have received the
                        refund in your wallet!
                    </Text>
                    </View>
                ) : (
                    <View>
                    <Text
                        style={{
                        color: "white",
                        textAlign: "center",
                        padding: 10,
                        marginTop: 10,
                        }}
                    >
                        {" "}
                        The contest has been cancelled, you would've received the refund in your wallet.
                    </Text>
                    </View>
                )
                ) : (
                    <View style={{padding: 10, width: '100%',}} >
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
                            <View>
                                <Text style={{fontSize: 14, fontFamily: 'Inter-Bold', color: '#EBEBF560'}} >Rank</Text>
                            </View>
                            <View>
                                <Text style={{fontSize: 14, fontFamily: 'Inter-Bold', color: '#EBEBF560'}} >Name</Text>
                            </View>
                            <View>
                                <Text style={{fontSize: 14, fontFamily: 'Inter-Bold', color: '#EBEBF560'}} >Points</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, marginTop: 5 }} >
                            {leader_table.map((item, index) => (
                                <View style={{
                                    flexDirection: 'row', 
                                    marginBottom: 5, 
                                    backgroundColor: colors.PRIMARY_COLOR,
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    marginVertical: 6,
                                    flex: 1, 
                                    padding: 14,
                                    alignItems: 'center', 
                                    justifyContent: 'space-between'
                                }} >
                                    <View style={{width: 30,  }} >
                                        <Text style={{fontSize: 14, fontFamily: 'Inter-Bold', color: '#FFFFFF'}} >{index+1}</Text>
                                    </View>
                                    <View style={{}} >
                                        <Text style={{fontSize: 14, fontFamily: 'Inter-Bold', color: '#FFFFFF'}} >{item.user_name}</Text>
                                    </View>
                                    <View style={{}} >
                                        <Text style={{fontSize: 14, fontFamily: 'Inter-Bold', color: '#FFFFFF'}} >{Number(item.score).toFixed(0)}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                )
            }
            </View>

        </View>

    );
};

export default CompletedLeaderBoard;
