import { Formik, validateYupSchema } from "formik";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from "react-native";
import color from "../../constants/colors";
import { connect, useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

import styled from 'styled-components';
import { GlobalButton, TextWhite } from "../../components/reusables";
import colors from "../../constants/colors";

const QuickAddBtn = styled(TouchableOpacity)`
background: rgba(255, 255, 255, 0.2);
border-color: rgba(255, 255, 255, 0.3);
border-width: 0.5px;
border-radius: 50px;
width: 70px;
height: 30px;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
margin: 0px;
`

const quickAdd = [
    {
        id: 1,
        value: '99'
    },
    {
        id: 2,
        value: '49'
    },
    {
        id: 3,
        value: '19'
    },
    {
        id: 4,
        value: '9'
    },
]

const AddMoneyForm = ({ navigation, }) => {

  const auth = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);

  const [amountToAdd, setAmountTooAdd] = React.useState(null);

  const addMoneyToWallet = () => {
    if (+amountToAdd > 0)
      Linking.openURL(`http://payments.klutchh.in/addMoney?amount=${amountToAdd}&token=${auth.access_token}`)

      navigation.goBack()
  }

     return (
        <SafeAreaView style={styles.container}>
          <ScrollView>

            <View style={{padding: 16, paddingTop: 10}} >
                <View style={styles.withdrawContainer} >
                    <Text style={{color: 'white', fontSize: 18}} >Add Money to your Wallet</Text>
                    <View style={styles.balanceContainer} >
                      <Image source={require('../../../assets/wallet.png')} style={{height: 20, width: 20, marginRight: 10}} />
                      <Text style={{color: 'white', fontSize: 16}} >Wallet Balance: </Text>
                      <Text style={{color: 'white', fontSize: 16}} >  ₹  {Number(auth?.user?.wallet_balance)?.toFixed(2)}</Text>
                    </View>
                </View>


                <View style={{marginVertical: 30}} >

                  <Text style={{color: 'white', fontSize: 14, marginBottom: 20}} >Quick Add</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
                      {quickAdd.map((item) => (
                          <QuickAddBtn onPress={() => {setAmountTooAdd(item.value)}}>
                              <Text style={{
                                  fontSize: 14,
                                  fontWeight: 'bold',
                                  color: "white",
                              }}>₹ {item.value}</Text>
                          </QuickAddBtn> 
                      ))}
                  </View>
                </View>

                <View style={styles.opacityCardContainer}  >
                    <View style={styles.opacityCard}>
                        <Text style={{color: 'white', fontSize: 17}} >Enter amount to add</Text>
                        
                        <View style={{marginVertical: 25,}}>
                          <TextInput
                            style={styles.inputbox}
                            placeholderTextColor="#7F7D82"
                            placeholder="Enter Amount (> ₹9)"
                            keyboardType="numeric"
                            value={amountToAdd}
                            onSubmitEditing={() => { addMoneyToWallet() }}
                            onChangeText={setAmountTooAdd}
                          />
                         
                         <View>
                            {amountToAdd && amountToAdd < 9 ?
                            <Text style={{ color: "red", marginTop: 10 }}>
                              Amount should be greater than 9
                            </Text>
                            :
                              null
                            }
                        </View>

                        </View>


                        <View >
                          <GlobalButton
                           // disabled={loading}
                           onPress={() => {(amountToAdd && (amountToAdd >= 9)) ? addMoneyToWallet() : null}}
                          ><TextWhite>ADD MONEY</TextWhite></GlobalButton>
                        </View>
                    </View>
                </View>


                <View style={{marginTop: 50, }} >
                  <Text style={{fontSize: 16, fontFamily: 'Inter-Bold', color: 'white', marginBottom: 10,}} >Disclaimer :</Text>
                  <View style={{flexDirection: 'row',}} >
                      <Text style={{textAlign: 'left', marginBottom: 10, fontFamily: 'Inter-Medium', color: 'white', fontSize: 12, lineHeight: 16}} >- </Text>
                      <Text style={{textAlign: 'left', marginBottom: 10, fontFamily: 'Inter-Medium', color: 'white', fontSize: 12, lineHeight: 16}} >Sometimes due to server issues it may take 15-30mins for the money to be reflected in your wallet.</Text>
                  </View>

                  <View style={{flexDirection: 'row',}} >
                      <Text style={{textAlign: 'left', marginBottom: 10, fontFamily: 'Inter-Medium', color: 'white', fontSize: 12, lineHeight: 16}} >- </Text>
                      <Text style={{textAlign: 'left', marginBottom: 10, fontFamily: 'Inter-Medium', color: 'white', fontSize: 12, lineHeight: 16}} >Make sure you have the latest version of our <Text onPress={() => { 
                        //navigation.navigate('HomeStack'); 
                        Linking.openURL("https://klutchh.in/");
                        //navigation.goBack()
                        }} style={{color: colors.NEW_THEME_RED, textDecorationLine: 'underline'}} >app</Text>.</Text>
                  </View>


                  <View style={{flexDirection: 'row',}} >
                      <Text style={{textAlign: 'left', marginBottom: 10, fontFamily: 'Inter-Medium', color: 'white', fontSize: 12, lineHeight: 16}} >- </Text>
                      <Text style={{textAlign: 'left', marginBottom: 10, fontFamily: 'Inter-Medium', color: 'white', fontSize: 12, lineHeight: 16}} >If you are still facing this issue, <Text onPress={() => { 
                        navigation.navigate('ContactUs');
                        //navigation.goBack()
                        }} style={{color: colors.NEW_THEME_RED, textDecorationLine: 'underline'}} >contact us</Text>.</Text> 
                  </View>
                </View>
            </View>

          </ScrollView>
        </SafeAreaView>
    );
};
const DeviceWidth = Dimensions.get("window").width;
const DeviceHeight = Dimensions.get("window").height;




export default AddMoneyForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: color.PRIMARY_COLOR,
  },
  opacityCardContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
    marginTop: 28,
  },
  opacityCard: {
    backgroundColor:"rgba(0, 1, 27, 0.2)",
    borderBottomEndRadius:8,
    borderBottomStartRadius:8,
    padding: 15,
  },
  withdrawContainer: {

  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  headerone: {
    color: color.WHITE,
    marginTop: 20,
    fontSize: 30,
    textTransform: "uppercase",
    textAlign: "center",
  },
  headertwo: {
    color: color.WHITE,
    fontSize: 20,
    textAlign: "center",
    textTransform: "capitalize",
  },
  currentBalance: {
    color: color.klutchhpurple,
    fontSize: 30,
    textAlign: "center",
  },
  inputBoxContainerStart: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 70,
  },
  inputBoxContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
  },
  inputBoxContainerEnd: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 50,
  },

  inputbox: {
    padding: 10,
    color: "white",
    backgroundColor: '#1C1C1E80',
    borderRadius: 5,
  },

  errorText: {
    color: "red",
    paddingLeft: 2,
  },
});
