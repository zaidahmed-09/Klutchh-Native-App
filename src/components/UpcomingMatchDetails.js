import React from "react";
import { Text, View, Image } from "react-native";
import colors from "../constants/colors";

import { ProgressBar } from "react-native-paper";
import NewMvpPlayerCard from "./NewMvpPlayerCard";

const teamData = [
    {id: 1}
]

const UpcomingMatchDetails = ({ contestDetails}) => {

    console.log('====================================');
    console.log("leader contestDetails ", contestDetails);
    console.log('====================================');

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF30',
          borderRadius: 8,
          fontFamily:"Inter-SemiBold",
        }}
      >
        <View style={{backgroundColor: '#FFFFFF20', padding: 15, borderTopLeftRadius: 8, borderTopRightRadius: 8}} >
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
            <Text style={{color: "#fff", fontSize: 14 }} >Entry : ₹ 5</Text>
            <Text style={{color: "#fff", fontSize: 14 }}>Practice Contest</Text>
          </View>

          <View style={{paddingTop: 10}} >
            <ProgressBar
              progress={
                0.4
                //Number(contest?.current_entries) / Number(contest?.max_entries)
              }
              width="100%"
              color="#FF326A"
              style={{backgroundColor: '#28282870'}}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 4, justifyContent: 'space-between'}} >
              <View style={{ }}>
                <Text style={{ color: "#FF326A",fontSize: 12 }}>
                48 spots left
                  {/* {Number(contest?.max_entries) - Number(contest?.current_entries)} spots */}
                  
                </Text>
              </View>
              <Text style={{color: "#fff", fontSize: 12 }}>50 spots</Text>
          </View>
        </View>
        <View
          style={{
            //flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            //backgroundColor: colors?.matchlight,
            padding: 15,
          }}
        >
          <Text
            style={{
              color: colors?.WHITE,
              fontSize: 16,
              marginBottom: 10
            }}
          >
            YOUR TEAM
          </Text>
        
          {teamData.map((item, index) => {
                return(
                    <View style={{}} >
                        <NewMvpPlayerCard
                        data={item}
                        present={index < 3}
                        id={index}
                        />
                    </View>
                )
            })}

            
        </View>

      </View>
    );
};



export default UpcomingMatchDetails