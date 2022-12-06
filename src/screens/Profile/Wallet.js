import { React, useContext, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import colors from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import Transactions from "../../components/profile/Transactions";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { BASE_URL } from "../../extras/constants";
import axios from "axios";
import styled from 'styled-components';



const Container = styled(View)`
padding: 20px;
border: 0.5px solid #FFFFFF80;
background: #FFFEFF33;
border-radius: 8px;
align-items: center;
margin-top: 20px;
width: 100%;
`

const Wallet = ({ fromHeader }) => {

  const navigation = useNavigation();
  const [status, setStatus] = useState(0);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = auth.access_token;
  

  const fetchStatement = async () => {
    const res = await axios.get(`${BASE_URL}/mine/statement`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };

  const fetchWithdrawals = async () => {
    const res = await axios.get(`${BASE_URL}/my/payments/requests`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };

  const { data: apiResponse, isLoading } = useQuery(
    "statementList",
    fetchStatement
  );
  const { data: apiResponseWithdrawal } = useQuery(
    "withdrawalList",
    fetchWithdrawals
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.PRIMARY_COLOR }}>
      <ScrollView>
         <View style={{padding: 20, marginBottom: 50, marginTop: 0}} >
              <View style={{alignItems: 'center'}} >
                  <Text style={{color: 'white', fontSize: 18}} >Wallet Balance</Text>
                  <View style={styles.balanceContainer} >
                    <Image source={require('../../../assets/wallet.png')} style={{height: 20, width: 20, marginRight: 6}} />
                    <Text style={{color: 'white', fontSize: 26}} > ₹ {auth?.user?.wallet_balance}</Text>
                  </View>
              </View>

              <Container>
                  <View style={{width: '100%'}} >
                      <View style={{marginVertical: 10, marginTop: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
                          <Text style={{color: 'white', fontSize: 16}} >Action</Text>
                          <Text style={{color: 'white', fontSize: 16}} >Date</Text>
                          <Text style={{color: 'white', fontSize: 16}} >Amount</Text>
                      </View>
                  </View>
                  <View style={{width: '100%'}} >

                    {!status
                          ? apiResponse?.statements?.length > 0
                            ? apiResponse?.statements?.map((e, idx) => {
                                return (
                                  <Transactions
                                    amount={e.amount}
                                    Ttype={e.type}
                                    Tdate={e.updatedAt}
                                    Tdesc={e.trans_desc}
                                    key={idx}
                                  />
                                );
                              })
                            : [0]?.map(function (o, idx) {
                            return (
                              <Text
                                style={{
                                  color: colors.WHITE,
                                  textAlign: "center",
                                  marginTop: 20,
                                }}
                                key={idx}
                              >
                                No Transaction History Found!
                              </Text>
                            );
                          })
                        : null}
                  </View> 

              </Container>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  divider: {
    height: 0.55,
    width: '100%',
    marginVertical: 10,
    backgroundColor: colors.WHITE
  },
})

export default Wallet;
