import React from "react";
import { Skeleton } from "react-native-skeletons";

function SkeletonMatchDetails({ children, isLoading }) {
  return isLoading ? (
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
  ) : (
    <>{children}</>
  );
}

export default SkeletonMatchDetails;
