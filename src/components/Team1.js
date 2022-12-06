import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import TeamSelectedPlayerCard from "./TeamSelectedPlayerCard";

const Team1 = ({
  data,
  isLive,
  player,
  setPlayer,
  credit_count,
  setCredits,
  selectedPlayers,
  setSelection,
  players_set,
  set_players_set,
  team
}) => {

  const checkIfInclude = (element) => {
    var isInclude = selectedPlayers.some(item => item.name === element.name)
    return isInclude
  }

  return (
    <>
      <View key={data} >
        
        <View>
          <View
            style={{
              //flex: 1,
              // flexDirection: "column",
              // flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 5.5,
              //width: '100%',
            }}
          >
            {data && data.map((element, index) => {

             // if (element.name !== "")
                return (
                  <>
                  <TouchableOpacity
                    disabled={isLive ? true : false}
                    key={index}
                    onPress={() => {
                      if (checkIfInclude(element)) {
                        setSelection(
                          selectedPlayers.filter((e) => e.name !== element.name)
                        );
                        set_players_set(prev=>prev - 1)
                        setPlayer((prev) => prev - 1);
                        setCredits((prev) => prev - +element.credit);
                      } else {
                        if(team==="GroupGame" && player >= 4){
                          Alert.alert("Not more than 4 Teams");
                        }
                        if(players_set >= 3 && team!=="GroupGame"){
                          Alert.alert("Not more than 3 players in this set");
                        }
                        else
                        if (player >= 5) Alert.alert("Not more than 5 players");
                        else if (credit_count + +element.credit > 15)
                          Alert.alert("Not more than 15 credits");
                        else {
                          setPlayer((prev) => prev + 1);
                          set_players_set((prev) => prev + 1)
                          setCredits((prev) => prev + +element.credit);
                          setSelection([...selectedPlayers, element]);
                        }
                      }
                    }}
                  >
                    {checkIfInclude(element)
                    //selectedPlayers.includes(element) 
                    ? (
                      <TeamSelectedPlayerCard data={element} present={true} team={team} isLive={isLive} />
                    ) : (
                      <TeamSelectedPlayerCard data={element} present={false} team={team} isLive={isLive} />
                    )}
                  </TouchableOpacity>
                 
                  </>
                );
            })}
          </View>
        </View>
      </View>
    </>
  );
};

export default Team1;
