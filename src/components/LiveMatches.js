import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import MyMatchesHelper from "./MyMatchesHelper";
import { sortedMatchesByStartingTime } from "../extras/utils";
import { CalcTime } from "./CalcTime";

const LiveMatches = ({matchData, matchStatus}) => {


  return (
    <View>
      {matchData?.data?.length === 0 || !(matchData?.data?.find((e) => (e?.status?.toLowerCase() === "active" && CalcTime(e?.starts_at) === "ZZZ"))) ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "80%",
          }}
        >
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
            source={require("../../assets/empty.png")}
          />
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              padding: 10,
              fontSize: 17,
            }}
          >
            No Live Matches Found
          </Text>
        </View>
      ) 
      : (
        matchData?.data &&
        <ScrollView>
          {
            sortedMatchesByStartingTime(matchData?.data)?.map((e) => {

                if ( (e?.status?.toLowerCase() === "active" && CalcTime(e?.starts_at) === "ZZZ")) {
                return (
                  <MyMatchesHelper
                    key={e._id}
                    match={e}
                    participatedList={matchData}
                    isUpcoming={true}
                    matchStatus={matchStatus}
                    //isLive={true}
                  />
                );
             }
            })
          }
        </ScrollView>

      )}
    </View>
  );
};

export default LiveMatches;

