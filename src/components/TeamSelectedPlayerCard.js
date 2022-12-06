import { View, Text, Image,ImageBackground, Dimensions } from "react-native";
import colors from "../constants/colors";
import { correctName } from "../extras/utils";
import { icons } from "../utills/Icons";

const DeviceWidth = Dimensions.get("window").width;

const TeamSelectedPlayerCard = ({ data, present, mvp, id,team, isLive }) => {


  const cardBgColor = 
    present === true ? '#FFFFFF10' :  '#ffffff30' ;
  
  const creditBgColor =
    present === true ? colors.NEW_THEME_RED : '#ffffff10';
    const creditTextColor =
    present === true ? '#ffffff' : colors.NEW_THEME_RED;
  const bordercolor =
    present === true ? colors.NEW_THEME_RED : colors.matchlight;
  const borderWid =
    present === true ? 2 : 0.5;

  return (
    <View>
      {team == 'GroupGame'
      ? 
        <View key={data} style={{
          width: DeviceWidth-40,
          height:72,
          borderColor: bordercolor,
          borderWidth:borderWid,
          display:"flex",
          flexDirection: "row",
          alignItems: 'center',
          margin:5,
         borderRadius: 4,
        }}>
           <View style={{
            borderWidth:0.5,
            borderRightWidth: 2,
            borderColor: creditBgColor,
            backgroundColor:"#211134",
            borderRadius:4,
            width: 70,
            height: 69,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            
            <Image
              style={data.image != null ? { width: 67, height: 67,  } : { width: 60, height: 60, }}
              resizeMode="contain"
              source={(data.image != null && data.image != '')  ?  { uri: data.image }  : icons.logo_mark}
            />

          {present && id < 3 && (
              <Text
                style={{
                  // BackgroundColor: colors.PURPLE_LIGHT,
                  backgroundColor: colors.NEW_THEME_RED,
                  // width: 100,
                  color: "white",
                  textAlign: "center",
                  bottom: 16,
                  color: colors?.WHITE,
                }}
              >
                {id === 0 ? "2x" : id === 1 ? "1.75x" : "1.5x"}
              </Text>
            )}
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, marginHorizontal: 10,}} >
              <Text 
                  numberOfLines={2}
                  style={{
                  fontSize:12,
                  marginTop: 4,
                  color:"#ffffff",
                  width: '40%',
                  fontFamily: 'Inter-SemiBold'
                }}>{correctName(data?.name)}</Text>
  
                {team=='GroupGame' && 
                  <Text style={{
                    fontSize: 11,
                    color:"#ffffff",
                  }}>1.30</Text>
                }
  
                {team=='GroupGame' && 
                <Text style={{
                    fontSize: 11,
                    color:"#ffffff",
                  }}>{data?.credit}</Text>
                }
  
             {present === true
              ?
              <View style={{width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.NEW_THEME_RED}} >
                  <Image
                    source={icons.check_mark}
                    style={{width: 16, height: 16, resizeMode: 'contain'}}
                  />
              </View>
              :
                <>
                {!isLive  &&  (<Image source={icons.add_icon_dark}  style={{width: 30, height: 30}} /> )}
                </>
              }
            </View>
         
        </View>
      :
      <View key={data} style={{
        width: team=='GroupGame'? 330: 160,
        height:72,
        borderColor: bordercolor,
        borderWidth:borderWid,
        display:"flex",
        flexDirection: "row",
        alignItems: 'center',
        margin:5,
       borderRadius: 4,
      }}>
          <View style={{
            borderWidth:0.5,
            borderRightWidth: 2,
            borderColor: creditBgColor,
            backgroundColor:"#211134",
            borderRadius:4,
            width: 70,
            height: 69,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            
          {team=='GroupGame'
          ?
          <Image
          style={data.image != null ? {
            width: 67,
            height: 67,
          } : {
            width: 60,
            height: 60,
          }}
          resizeMode="contain"
          // source={data.image != null ?
          //   { uri: data.image }
          //   : icons.user_dummy_img
          // }
          source={(data.image != null && data.image != '')  ? 
          { uri: data.image }
            :
            icons.logo_mark
          }
          
        />
          :
          <Image
                style={data.image_url != null ? {
                  width: 67,
                  height: 67,
                } : {
                  width: 60,
                  height: 60,
                }}
                resizeMode="contain"
                source={data.image_url != null ?
                  { uri: data.image_url }
                  : icons.user_dummy_img
                }
              />
          }
         
         
              {present && id < 3 && (
              <Text
                style={{
                  // BackgroundColor: colors.PURPLE_LIGHT,
                  backgroundColor: colors.NEW_THEME_RED,
                  // width: 100,
                  color: "white",
                  textAlign: "center",
                  bottom: 16,
                  color: colors?.WHITE,
                }}
              >
                {id === 0 ? "2x" : id === 1 ? "1.75x" : "1.5x"}
              </Text>
            )}
          </View>
          <View style={{
            flexDirection:"column",
            borderRadius:4,
            
          }}>
              <View style={{
                height:team=='GroupGame'? 72:50,
                width:team=='GroupGame'? 260:88,
                backgroundColor: cardBgColor,
                borderTopEndRadius:4,
                paddingLeft:10,
                paddingTop: team === "GroupGame"? 0 : 6,
                paddingRight:10,
                alignItems: `${team === "GroupGame"?"center": "flex-start"}`,
                flexDirection:`${team === "GroupGame"?"row":"column"}`,
                justifyContent:`${team === "GroupGame"?"space-between":"flex-start"}`
              }}>
                <Text 
                  numberOfLines={2}
                  style={{
                  fontSize:12,
                  marginTop: 4,
                  color:"#ffffff",
                  width: '40%',
                  fontFamily: 'Inter-SemiBold'
                }}>{correctName(data?.name)}</Text>
  
                {team=='GroupGame' && 
                  <Text style={{
                    fontSize: 11,
                    color:"#ffffff",
                  }}>1.30</Text>
                }
  
                {team=='GroupGame' && 
                <Text style={{
                    fontSize: 12,
                    color:"#ffffff",
                  }}>{data?.credit}</Text>
                }
  
              {team=='GroupGame' ?
  
              <>
              {present === true
              ?
              <View style={{width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.NEW_THEME_RED}} >
                <Image
                source={icons.check_mark}
                style={{width: 16, height: 16, resizeMode: 'contain'}}
              />
              </View>
              :
              
              <>
              {!isLive  && 
              (
                <Image
                source={icons.add_icon_dark}
                style={{width: 30, height: 30}}
              />
              )
              }
              </>
              }
             
                </>
              :
              null 
                
                }
  
  
  
  
              </View>
              {team !== "GroupGame" && <View style={{
                backgroundColor: creditBgColor,
                height:20,
                borderRadius:4,
              }}>
                  <Text
                    style={{
                      color: "white",
                      marginLeft: 10,
                      marginTop: 3,
                      fontSize:12,
                      color: creditTextColor,
                    }}
                  >
                    {data?.credit} Credits
                  </Text>
              </View>}
          </View>
  
      </View>
      }
    </View>
  );


};

export default TeamSelectedPlayerCard;
