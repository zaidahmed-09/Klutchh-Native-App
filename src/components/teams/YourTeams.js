import React from 'react';
import { View, Text, Image,Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { icons } from '../../utills/Icons';
  
const YourTeams = (props) => {

    const {teamPlayers, group_type } = props;

    console.log("teamPlayers => ", teamPlayers);

    return (
        <View style={{alignItems: 'center'}} >
            <Text style={{fontSize: 16, fontFamily: 'Inter-Bold', color: 'white', marginBottom: 20,}} >YOUR TEAM</Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}} >
                {teamPlayers && teamPlayers.map((item, index) => (
                    <View style={{width: 65, alignItems: 'center',}} >
                        <View style={{margin: 6, marginBottom: 0, borderWidth: 1.5, borderColor: '#FF326A', borderBottomRightRadius: 0, borderRadius: 4,padding: 6, alignItems: 'center', justifyContent: 'center'}} >
                            {group_type
                            ?
                            <Image 
                                source={item.image !== null
                                  ? {
                                    uri: item.image
                                  }
                                  : icons.user_dummy_img
                                }
                                style={{height: 40, width: 40, resizeMode: 'contain' }} />
                            :
                            <Image 
                                source={item.image_url !== null
                                  ? {
                                    uri: item.image_url 
                                  }
                                  : icons.user_dummy_img
                                }
                                style={{height: 40, width: 40, resizeMode: 'contain' }} />
                            }
                            
                        </View>
                        <View style={{height: 30, width: 65, marginRight: 10 }} >
                        {index < 3 
                        ?
                        <View style={{ alignItems: 'flex-end', width: '100%', }} >
                            <View style={{height: 20, width: 55, marginTop: 6, borderRadius: 4, backgroundColor: '#FF326A', alignItems: 'center', justifyContent: 'center',}} >
                                <Text style={{color: 'white', fontSize: 10,  fontFamily: 'Inter-SemiBold'}} >
                                  {index == 0 ? '2x'
                                  : index == 1 ? '1.75x'
                                  : index == 2 ? '1.5x'
                                  : null}
                                </Text>
                            </View>
                        </View>
                        : null
                        }
                        </View>
                        <Text numberOfLines={1} style={{color: 'white', fontSize: 12, fontFamily: 'Inter-SemiBold'}} >{item.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default YourTeams