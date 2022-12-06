import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import colors from "../constants/colors";

import styled from 'styled-components'
import { icons } from "../utills/Icons";

const DeviceWidth = Dimensions.get("window").width;

const TextWhite = styled(Text)`
color:#fff;
`

const RankContainer = styled(View)`
align-items: center;
margin: 5px 15px;
`
const TopRanksContainer = styled(View)`
padding:15px 0px;
`

const CommonPizeView = styled(View)`
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 5px 15px;
border-bottom-width:1px;
border-bottom-color: #FFFFFF33;
border-top-width:1px;
border-top-color: #FFFFFF33;
background-color: #ffffff20;
`



const PrizeResultCard = ({ prizePool, details, match_type}) => {

  const getAmount = (i)=>{
    return prizePool[i-1] || 0
  }

  function segregatePrizePool(prize_Pool){
    let poolMap=[];
    let map={};
    for(let i=3;i<prize_Pool.length;i++){
      if(!map[prize_Pool[i]])
        map[prize_Pool[i]]=0;
      map[prize_Pool[i]]+=1;
    }
    let j=3;
    while(j<prize_Pool.length){
      if(prize_Pool[j]){
        let start = "#"+(j+1);
        let currAmount = prize_Pool[j];
        j=j+map[currAmount];
        let end = "#"+j;
        poolMap.push([start+"-"+end,currAmount]);
      }
      console.log('pool map',poolMap);
  }


  return poolMap;
}

  return (
    <View
      style={{
        //flex: 1,
      }}
    >


      <View style={{backgroundColor: '#FFFFFF20', borderWidth: 1, borderColor: '#ffffff20', borderTopLeftRadius: 8, borderTopRightRadius: 8, }} >
            <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center'}} >
              <Text style={{color: "#fff", fontSize: 16,fontFamily:"Inter-SemiBold" }} >Prize Pool</Text>
            </View>

            <View style={{backgroundColor: colors.PRIMARY_COLOR}} >

                <TopRanksContainer>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 10
                    }}
                  >
                    
                    {match_type != 'Practice'
                    ? <RankContainer>
                      <View>
                        <Image source={icons.prize_1} style={{height: 80, width: 80, }} />
                        <Text style={{color: 'white', fontSize: 14, position: 'absolute', top: -17, left: 30, fontFamily:"Inter-SemiBold"}} >1st</Text>
                      </View>
                    
                      <TextWhite style={{
                        fontSize:14,fontFamily:"Inter-SemiBold"
                      }}>₹ {getAmount(1)}</TextWhite>
                    </RankContainer>
                    :
                    <RankContainer>
                    <View>
                      <Image source={icons.prize_1} style={{height: 80, width: 80, }} />
                      <Text style={{color: 'white', fontSize: 14, position: 'absolute', top: -17, left: 30, fontFamily:"Inter-SemiBold"}} >1st</Text>
                    </View>
                  
                    <TextWhite style={{
                      fontSize:14,fontFamily:"Inter-SemiBold"
                    }}>Winner takes the glory!</TextWhite>
                  </RankContainer>
                  }

                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: 'space-evenly',
                      alignItems: "center",
                      marginTop: 12,
                    }}
                  >


                    {getAmount(2) != 0 && <RankContainer>
                      <View>
                        <Image source={icons.prize_2} style={{height: 60, width: 60, }} />
                        <Text style={{color: 'white', fontSize: 12, position: 'absolute', top: -15, left: 19, fontFamily:"Inter-SemiBold"}} >2nd</Text>
                      </View>
                      <TextWhite style={{
                        color: "#fff",fontFamily:"Inter-SemiBold",fontSize:12,
                      }}>₹ {getAmount(2)}</TextWhite>
                    </RankContainer>}
                    
                    {getAmount(3) != 0 && <RankContainer>
                      <View>
                          <Image source={icons.prize_3} style={{height: 60, width: 60, }} />
                          <Text style={{color: 'white', fontSize: 12, position: 'absolute', top: -15, left: 19, fontFamily:"Inter-SemiBold"}} >3rd</Text>
                      </View>
                      <TextWhite style={{
                        color: "#fff",fontFamily:"Inter-SemiBold",fontSize:12,
                      }}>₹ {getAmount(3)}</TextWhite>
                    </RankContainer>}
                  </View>

                </TopRanksContainer>
            </View>


             
        </View>
              
          <View style={{marginBottom: 30}} >
            {segregatePrizePool(prizePool) && segregatePrizePool(prizePool).map((item, index) => (
              <> 
                <CommonPizeView style={[ segregatePrizePool(prizePool).length -1 == index ? {borderBottomLeftRadius: 8, borderBottomRightRadius: 8} : null  ]}  >
                  <View style={{
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: "center"
                  }}>
                    <Image source={icons.prize_5} style={{height: 20, width: 20, marginRight: 8}} />
                    <Text style={{
                      fontSize: 12,
                      color: "#fff",
                      fontFamily:"Inter-SemiBold"
                    }}>
                      {item[0]}
                    </Text>
                  </View>

                  <Text style={{
                    fontSize: 12,
                    color: "#fff",
                    fontFamily:"Inter-SemiBold"
                  }}>
                    ₹ {item[1]}
                  </Text>
                </CommonPizeView>
                <View style={{backgroundColor: colors.PRIMARY_COLOR, height: 10, width: DeviceWidth}} />
              </>
            ))}
          </View>
    </View>
  );
};

export default PrizeResultCard;
