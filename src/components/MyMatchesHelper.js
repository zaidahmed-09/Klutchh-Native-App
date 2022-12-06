import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MyMatchesMatchCard from "./myMatchesMatchCard";
export default function MyMatchesHelper({
  match,
  participatedList,
  isDisabledTime,
  isUpcoming,
  matchStatus,
  isLive,
}) {
  const [isGroupGame, setIsGroupGame] = useState(null);

  const participatedContest = participatedList.data.find(
    (item) => item?.contest_id?._id === match?._id
  );

  const navigation = useNavigation();

  useEffect(() => {
    setIsGroupGame(match?.game_type)
  }, []);
  return (
    <>
      {
        <TouchableOpacity
        //activeOpacity={1}
        disabled={true}
          onPress={() => {
          }}
        >
          <MyMatchesMatchCard
            key={match?._id}
            match={match}
            teams={match?.teams}
            entry_list={match?.entry_list}
            participatedList={participatedList}
            isGroupGame={isGroupGame}
            isUpcoming={isUpcoming}
            matchStatus={matchStatus}
            //isLive={isLive}
          />
        </TouchableOpacity>
      }
    </>
  );
}
