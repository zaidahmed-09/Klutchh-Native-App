import React from "react";
import { View,Text } from "react-native";

const Live= ()=> {
  return (
    <View  style={{
        backgroundColor:'#EF4444',
            alignItems:'center',
            borderRadius:3,
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 3,
            paddingBottom: 3,
    }} >
        <Text style={{
             color: '#FFFFFF',
             fontSize:10,
             fontWeight:'700',
        }}>
      LIVE
        </Text>
    </View>
  );
}

export default Live;
