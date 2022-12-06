import { View, Text, Image,ImageBackground,Dimensions  } from "react-native";
import colors from "../constants/colors";
import { correctName } from "../extras/utils";
import { icons } from "../utills/Icons";

const { width } = Dimensions.get("window");


const NewMvpPlayerCard = ({ data, present, mvp, id , isGroupType}) => {
  
  const cardBgColor =
      present === true ? '#FFFFFF10' :  '#ffffff30';
  
  const borderWid =
      present === true ? 2 : 0.5;

  const cardBorderColor =
      present === true ? colors.NEW_THEME_RED : '#ffffff10';
      
  const bordercolor =
    present === true ? colors.NEW_THEME_RED : colors.matchlight;


    const backColor15X =
    present === true && id===0 ? colors.NEW_THEME_RED : '#211134';
    const backColor175X =
    present === true && id===1 ? colors.NEW_THEME_RED : '#211134';
    const backColor2X =
    present === true  && id===2? colors.NEW_THEME_RED : '#211134';

  return (
      <View key={data} style={{
      width: width-40,
      height:72,
      borderColor: bordercolor,
      borderWidth: borderWid,
      display:"flex",
      flexDirection:"row",
      justifyContent: 'space-between',
      margin:5,
      borderRadius:4,
      backgroundColor: cardBgColor,
    }}>
        <View style={{
          borderWidth:0.5,
          borderRightWidth: 2,
          borderColor:cardBorderColor,
          borderRadius:4,
          width: 70,
          height: 70,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {isGroupType
          ?
          <Image
          style={data.image != null ? {
           width: 68,
           height: 68,
         } : {
           width: 60,
           height: 60,
         }}
         resizeMode="contain"
         //source={{ uri: data.image }}
         source={(data.image != null && data.image != '') ?
           { uri: data.image }
           : icons.logo_mark
         }
       />
          :
          <Image
          style={data.image_url != null ? {
           width: 68,
           height: 68,
         } : {
           width: 60,
           height: 60,
         }}
         resizeMode="contain"
         //source={{ uri: data.image }}
         source={data.image_url != null ?
           { uri: data.image_url }
           : icons.user_dummy_img
         }
       />
          }
       
        </View>
       <View style={{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        marginRight: 20,
        width: '70%',
        justifyContent:"space-between",
       }}>
       <Text style={{
            fontSize:12,
            color:"#ffffff",
            width:50,
            marginLeft:5,
        }}>{correctName(data?.name)}</Text>
            <View style={{
                flexDirection:"row",
                marginLeft:35,
            }}>
                <View style={{
                    width:40,height:40,
                    borderRadius:20,
                    backgroundColor:backColor15X,
                    justifyContent:"center",
                    alignItems:"center",
                    borderWidth:1,
                    borderColor: colors.NEW_THEME_RED,
                }}><Text style={{color:"#FFFFFF",fontSize:10,}}>2x</Text></View>
                
                <View style={{
                    width:40,height:40,
                    borderRadius:20,
                    backgroundColor:backColor175X,
                    justifyContent:"center",
                    alignItems:"center",
                    borderWidth:1,
                    borderColor: colors.NEW_THEME_RED,
                    marginLeft:5,
                }}><Text style={{color:"#FFFFFF",fontSize:10,}}>1.75x</Text></View>                
                <View style={{
                    width:40,height:40,
                    borderRadius:20,
                    backgroundColor:backColor2X,
                    justifyContent:"center",
                    alignItems:"center",
                    borderWidth:1,
                    borderColor: colors.NEW_THEME_RED,
                    marginLeft:5,
                }}><Text style={{color:"#FFFFFF",fontSize:10,}}>1.5x</Text></View>
            </View>
       </View>

    </View>
    
  );


};

export default NewMvpPlayerCard;
