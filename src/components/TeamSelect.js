import React, { useState } from "react";
import { View,Text } from "react-native";
import Team1 from "./Team1";

const TeamSelect = ({
  data,
  roster1,
  roster2,
  isLive,
  team,
  player,
  setPlayer,
  credit_count,
  setCredits,
  selectedPlayers,
  setSelection,
}) => {
  const flexDir = team === "GroupGame"?"column":"row";
  const [players_set_0, set_players_set_0] = useState(0);
  const [players_set_1, set_players_set_1] = useState(0);
  return (
    <>
    <View style={{
      flexDirection: team == "GroupGame" ? 'column' : 'row',
      marginBottom: 20,
    }}>
        <Team1
          data={roster1}
          isLive={isLive}
          player={player}
          setPlayer={setPlayer}
          credit_count={credit_count}
          setCredits={setCredits}
          selectedPlayers={selectedPlayers}
          setSelection={setSelection}
          players_set = {players_set_0}
          set_players_set = {set_players_set_0}
          team={team}
        />
        <Team1
          data={roster2}
          isLive={isLive}
          player={player}
          setPlayer={setPlayer}
          credit_count={credit_count}
          setCredits={setCredits}
          selectedPlayers={selectedPlayers}
          setSelection={setSelection}
          players_set = {players_set_1}
          set_players_set = {set_players_set_1}
          team={team}
        />
    </View>
    </>
  );
};

export default TeamSelect;
