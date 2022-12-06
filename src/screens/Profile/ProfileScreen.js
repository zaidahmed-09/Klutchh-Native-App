import React, {useState, useEffect} from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Linking,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, logoutUser, setStackMode } from "../../redux/actions/auth";
import colors from "../../constants/colors";
import Clipboard from '@react-native-clipboard/clipboard';
import axios from 'axios';
import {BASE_URL} from '../../extras/constants';
import styled from 'styled-components';
import color from "../../constants/colors";
import { icons } from "../../utills/Icons";

const Balance = styled(Text)`
color: white;
text-align: center;
font-size: 28px;
font-weight: 700;
display: flex;
flex-direction: row;
align-items: center;
`

const AddMoneyBtn = styled(TouchableOpacity)`
background:#FF326A;
border-radius: 50px;
width: 90px;
height: 25px;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
margin: 0px 4px;
`

const WithdrawMoneyBtn = styled(TouchableOpacity)`
background:rgba(255, 255, 255, 0.4);
border-color:rgba(235, 235, 245, 0.3);
border-width: 1px;
border-radius: 50px;
width: 90px;
height: 25px;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
margin: 0px 4px;
`


const ProfileScreen = ({navigation}) => {

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
          console.log('====================================');
          console.log("PROFILE SCREEN  ");
          console.log('====================================');
          getCurrentUser(auth.access_token);
    });

    return unsubscribe;
  }, [navigation]);

  const dispatch = useDispatch();
  //const navigation = useNavigation();

  const copyToClipboard = async (value) => {
    //await Clipboard.setStringAsync(value);
    Clipboard.setString(value);
  };

  const [showInputToAddMoney, setShowInputToAddMoney] = React.useState(false)

  const [amountToAdd, setAmountTooAdd] = React.useState(null);

  const addMoneyToWallet = () => {
    if (+amountToAdd > 0)
      Linking.openURL(`http://payments.klutchh.in/addMoney?amount=${amountToAdd}&token=${auth.access_token}`)
  }

  const showSnackBar = () => {
    setSnackbarVisible(true)

    setTimeout(() => {
      setSnackbarVisible(false)
    }, 2000);
  }

  function MixPanelCall() {
    axios.post(
      `${BASE_URL}/track/mixpanel`,
      {
        eventName: 'Referral Initiated',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth?.access_token}`,
        },
      },
    );
  }


  return (
    <ImageBackground source={icons.background_img} style={{height: '100%', }} >
    <SafeAreaView style={{ flex: 1, marginTop: Platform.OS === "ios" ? -40 : 0, marginBottom: Platform.OS === "ios" ? 0 : 0, paddingBottom: Platform.OS === "ios" ? 30 : 40 }}>

    <ScrollView>
 
          <View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', padding: 10 }} >
                <View style={{height: 90, width: 90, borderRadius: 45, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF10'}} >
                  
                  
                  <Image source={{
                    uri: `data:image/image/png;base64,${auth?.user?.avatar_id?.avatar_data.toString('base64')}`
                  }}
                  style={{height: 90, width: 90, borderRadius: 45,}} />

                </View>

                <View style={{ marginLeft: 20}} >
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }} >
                          <Text style={{color: 'white', fontFamily: 'Inter-Bold', fontSize: 17, lineHeight: 28, fontWeight: 'bold'}} >{auth?.user?.name}</Text>
                        </View>
                        <View>
                          <Text style={{color: 'white', fontFamily: 'Inter-Medium', fontSize: 12,}} >{auth?.user?.email}</Text>
                        </View>
                    </View>
                    
                </View>
            </View>

            
            <View style={[styles.cardHeadingContainer, {margin: 16, marginBottom: 0}]}  >
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}} >
                  <Text style={{color: '#FFFFFF', fontFamily: 'Inter-Bold', fontSize: 14, fontWeight: 'bold',}} >Wallet Balance</Text>

                  <TouchableOpacity 
                    onPress={() => {
                      navigation.navigate("Wallet");
                    }}
                    style={{backgroundColor: 'rgba(255, 255, 255, 0.3)', width: 110, height: 22, alignItems: 'center', justifyContent: 'center', padding: 4, borderRadius: 50}} >
                    <Text style={{color: '#FFFFFF', fontSize: 10, fontFamily: 'Inter-SemiBold', fontWeight: 'bold',}} >View Transactions</Text>
                  </TouchableOpacity>
                </View>
                
                <View style={[styles.cardSubHeadingContainer, {alignItems: 'center', justifyContent:'space-between', flexDirection: 'row'}]}>
                    <Balance>
                      ₹ {Number(auth?.user?.wallet_balance)?.toFixed(2)}
                    </Balance>

                              
                    <View style={{
                      flexDirection: 'row',
                      alignItems: "center",
                      justifyContent: 'center'
                    }}>
                      <View>
                        <AddMoneyBtn 
                        onPress={() => {
                          navigation.navigate("AddMoneyForm")
                          }}>
                           {/* <AddIcon  /> */}
                          <Text style={{
                            fontSize: 10,
                            fontWeight: 'bold',
                            color: "white",
                            fontFamily: 'Inter-SemiBold',
                          }}>ADD MONEY</Text>
                        </AddMoneyBtn>
                      </View>

                      <View>
                        <WithdrawMoneyBtn onPress={() => {
                            navigation.navigate("WithdrawForm")
                            }}>
                          {/* <MinusIcon  /> */}
                          <Text style={{
                            fontSize: 10,
                            fontWeight: 'bold',
                            color: "white",
                            fontFamily: 'Inter-SemiBold',
                          }}>WITHDRAW</Text>
                        </WithdrawMoneyBtn>
                      </View>
                    </View>
                </View>
            </View>
            
            <View style={[styles.cardHeadingContainer, {margin: 16, marginBottom: 0}]}  >
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}} >
                  <Text style={{color: '#FFFFFF', fontFamily: 'Inter-Bold', fontSize: 14, fontWeight: 'bold',}} >Stats</Text>
                </View>
                <View style={[styles.cardSubHeadingContainer, {padding: 2,}]}>
                  <View style={{marginBottom: 15,  marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}} >
                      <View style={styles.statsBox} >
                        <Image source={icons.swords} style={{height: 38, width: 38, resizeMode: 'contain', marginBottom: 4, marginTop: 4}} />
                        <Text style={{fontSize: 10, fontFamily: 'Inter-Bold', marginTop: 0, marginBottom: 0, color: 'rgba(235, 235, 245, 0.6)'}} >Matches Played</Text>
                        <Text style={{fontSize: 16, textAlign: 'auto', color: 'white', lineHeight: 22}} >{auth?.user?.contests_played ? auth?.user?.contests_played : 0}</Text>
                      </View>
                      <View style={styles.statsBox} >
                        <Image source={icons.prize} style={{height: 38, width: 38, resizeMode: 'contain', marginBottom: 4, marginTop: 4}} />
                        <Text style={{fontSize: 10, fontFamily: 'Inter-Bold', marginTop: 0, marginBottom: 0, color: 'rgba(235, 235, 245, 0.6)'}} >Matches Won</Text>
                        <Text style={{fontSize: 16, textAlign: 'auto', color: 'white', lineHeight: 22}} >{auth?.user?.contests_won ? auth?.user?.contests_won : 0}</Text>
                      </View>
                      <View style={styles.statsBox} >
                        <Image source={icons.winnings} style={{height: 38, width: 38, resizeMode: 'contain', marginBottom: 4, marginTop: 4}} />
                        <Text style={{fontSize: 10, fontFamily: 'Inter-Bold', marginTop: 0, marginBottom: 0, color: 'rgba(235, 235, 245, 0.6)'}} >Winnings</Text>
                        <Text style={{fontSize: 16, textAlign: 'auto', color: 'white', lineHeight: 22}} >₹ {auth?.user?.totalAmountWon ? auth?.user?.totalAmountWon.toFixed(2) : 0}</Text>
                      </View>
                  </View>
                </View>
            </View>

            <View style={[styles.cardHeadingContainer, { marginBottom: 50, margin: 16, }]}  >
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}} >
                  <Text style={{color: '#FFFFFF', fontFamily: 'Inter-Bold', fontSize: 14, fontWeight: 'bold',}} >Refer & Earn</Text>

                  <View>
                    <Text style={{
                      color: "white",
                      fontSize: 10,
                    }}>
                      {auth?.user?.is_influencer
                        ? `${auth?.user?.users_referred} `
                        : `${auth?.user?.users_referred}/5 `} <Text style={{
                          color: "white"
                        }}>users refered</Text>
                    </Text>
                  </View>
                </View>

               
                <View style={[styles.cardSubHeadingContainer, {padding: 15, }]}>
                  <View style={{marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}} >
                      <View style={[styles.statsBox,  {width: 93, height: 93}]} >
                        <Image source={icons.user_icon} style={{height: 38, width: 38, resizeMode: 'contain', marginBottom: 4, marginTop: 2}} />
                        <Text style={{fontSize: 10, fontFamily: 'Inter-Bold', marginBottom: 0, color: 'rgba(235, 235, 245, 0.6)'}} >Users Referred</Text>
                        <Text style={{fontSize: 16, textAlign: 'auto', color: 'white', lineHeight: 22}} >{auth?.user?.users_referred ? auth?.user?.users_referred : 0}</Text>
                      </View>
                      <View style={[styles.statsBox, {width: 93, height: 93}]} >
                        <Image source={icons.earnings} style={{height: 38, width: 38, resizeMode: 'contain', marginBottom: 4, marginTop: 2}} />
                        <Text style={{fontSize: 10, fontFamily: 'Inter-Bold', marginBottom: 0, color: 'rgba(235, 235, 245, 0.6)'}} >Referral Earnings</Text>
                        <Text style={{fontSize: 16, textAlign: 'auto', color: 'white', lineHeight: 22}} >₹ {auth?.user?.referral_earnings ? auth?.user?.referral_earnings : 0 }</Text>
                      </View>
                  </View>
                  

                   <View style={{alignItems: 'center'}} >
                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 6, paddingHorizontal: 16,  backgroundColor: '#211134', borderRadius: 8,}} >
                        <Text style={{fontFamily: 'Inter-Medium', color: 'rgba(235, 235, 245, 0.6)', }}>Your Referral Code :  </Text>  
           
                        <View style={{flexDirection: 'row', alignItems: 'center',}} >
                            <Text style={{color: 'white', marginRight: 10 }} > {auth?.user?.referral_code}</Text>  
                            <TouchableOpacity
                              style={{
                                paddingVertical: 6,
                              }}
                              onPress={() => {
                                MixPanelCall();
                                copyToClipboard(auth?.user?.referral_code);
                                showSnackBar();
                              }}
                            >
                              <Image source={icons.copy_icon} style={{height: 25, width: 25, }} />
                            </TouchableOpacity>
                        </View>
                      </View>
                   </View>
                </View>

               
                

            </View>

            {snackbarVisible && (
              <View style={{position: 'absolute', height: '100%', width: DeviceWidth, alignItems: 'center', justifyContent: 'center',}} >
                <View style={{height: 40, marginTop: 150, borderRadius: 4,  width: DeviceWidth-40,  alignItems: 'center', justifyContent: 'center', backgroundColor:'#FF326A'  }} >
                  <Text style={{color: 'white', textAlign: 'center', width: '100%'}} >Referral Code Copied!</Text>
                </View>     
              </View>
             )}

          </View>
   
        
     

      </ScrollView>
     
    </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  cardHeadingContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
    marginTop: 28,
  },
  cardSubHeadingContainer: {
    backgroundColor:"rgba(0, 1, 27, 0.2)",
    borderBottomEndRadius:8,
    borderBottomStartRadius:8,
    padding: 15,
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: 'center',
    backgroundColor: color.BLACK,
  },

  inputboxone: {
    marginTop: 15,
    marginBottom: 15
  },

  inputText: {
    color: colors.klutchhwhite,
    padding: 10,

    backgroundColor: color.GREY,
    borderRadius: 5,
  },

  statsBox: {
    height: 90, 
    width: 92, 
    padding: 4,
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#211134', 
    borderRadius: 10,
  },
  errorText: {
    color: "red",
    // marginLeft: 30,
    // marginRight: 30,
    // marginBottom: 10,

    paddingLeft: 2,
  },
});

const DeviceWidth = Dimensions.get("window").width;
const DeviceHeight = Dimensions.get("window").height;

export default ProfileScreen;
