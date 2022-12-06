import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import { useSelector } from "react-redux";
import { getToken, sortedMatchesByStartingTime } from "../extras/utils";
import MyMatchesHelper from "./MyMatchesHelper";

const CompletedMatches = ({matchData, matchStatus}) => {

  const auth = useSelector((state) => state.auth);


  return (
    <View>
      {matchData?.data?.length == 0 || !sortedMatchesByStartingTime(matchData?.data)?.find((e) => e?.status?.toLowerCase() === "completed") ? (
        <View
          style={{
            height: "80%",
            justifyContent: "center",
            alignItems: "center",
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
            No Completed Matches Found
          </Text>
        </View>
      ) : (
        matchData?.data &&
        <ScrollView>
          {
            sortedMatchesByStartingTime(matchData?.data).map((e) => {

              if (e?.status?.toLowerCase() === "completed") {

                return (

                  <MyMatchesHelper
                    key={e._id}
                    match={e}
                    participatedList={matchData}
                    isDisabledTime={true}
                    isUpcoming={false}
                    matchStatus={matchStatus}
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

export default CompletedMatches;
