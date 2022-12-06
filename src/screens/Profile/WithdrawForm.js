import { Formik, validateYupSchema } from "formik";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import color from "../../constants/colors";
import * as Yup from "yup";
import { connect } from "react-redux";
import { withdrawAmount } from "../../redux/actions/auth";
import styled from 'styled-components';
import { GlobalButton, TextWhite } from "../../components/reusables";


const Input = styled(TextInput)`
background: #1C1C1E80;
color: white;
padding: 12px;
border-radius: 4px;
margin-bottom: 5px;
font-family:"Inter-Medium";
font-size:14px;
`


const WithdrawForm = ({ navigation, withdrawAmount, auth }) => {



  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
  
    withdrawAmount(values, setLoading, navigation);
  };

  const validationSchema = Yup.object({
    amount: Yup.number()
      .typeError("Enter valid Amount")
      .min(100, "Withdrawal amount should be minmum ₹100")
      .max(auth?.user?.wallet_balance, "Not enough balance!")
      .required("Amount is required"),
    acc_holder_name: Yup.string().required("Account Holder Name is required!"),
    acc_number: Yup.number()
      .typeError("Enter valid Account Number")
      .required("Account Number is required"),
    ifsc_code: Yup.string().required("IFSC Code is required"),
    PAN: Yup.string().required("PAN Number is required"),

    
  });
  return (
    <Formik
      onSubmit={(values) => handleSubmit(values)}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => {
        return (
          <SafeAreaView style={styles.container}>
            <ScrollView style={{marginTop: 10}} >

              <View style={{padding: 16, paddingTop: 0, }} >
                  <View style={styles.withdrawContainer} >
                      <Text style={{color: 'white', fontSize: 18}} >Withdraw your earnings</Text>
                      <View style={styles.balanceContainer} >
                        <Image source={require('../../../assets/wallet.png')} style={{height: 20, width: 20, marginRight: 10}} />
                        <Text style={{color: 'white', fontSize: 16}} >Wallet Balance: </Text>
                        <Text style={{color: 'white', fontSize: 16}} >  ₹ {auth?.user?.wallet_balance}</Text>
                      </View>
                  </View>


                <View style={styles.opacityCardContainer}  >
                    <View style={styles.opacityCard}>
                        <View style={{padding: 15}} >
                            <View >
                              <Input
                                style={[styles.inputText, touched.amount && errors.amount ? {borderColor: '#FF3B30', borderWidth: 1} : null]}
                                    placeholder="Amount"
                                    onChangeText={handleChange("amount")}
                                    placeholderTextColor="#7F7D82"
                                    value={values.amount}
                                    autoCapitalize="none"
                              />
                                {touched.amount && errors.amount ? (
                                    <Text style={{marginBottom: 10, color: '#FF3B30'}} >{errors.amount}</Text>
                                  )
                                :
                                <TextWhite style={{marginBottom: 10, color: '#EBEBF560',fontSize:12,fontFamily:"Inter-Medium"}} >Enter your amount here</TextWhite>
                                }
                          </View>

                          <View >
                              <Input
                                style={[styles.inputText, touched.acc_holder_name && errors.acc_holder_name ? {borderColor: '#FF3B30', borderWidth: 1} : null]}
                                    placeholder="Account Holder Name"
                                    onChangeText={handleChange("acc_holder_name")}
                                    placeholderTextColor="#7F7D82"
                                    value={values.acc_holder_name}
                                    autoCapitalize="none"
                              />
                                {touched.acc_holder_name && errors.acc_holder_name ? (
                                    <Text style={{marginBottom: 10, color: '#FF3B30'}} >{errors.acc_holder_name}</Text>
                                  )
                                :
                                <TextWhite style={{marginBottom: 10, color: '#EBEBF560',fontSize:12,fontFamily:"Inter-Medium"}} >Enter your name here</TextWhite>
                                }
                          </View>

                          <View >
                              <Input
                                style={[styles.inputText, touched.acc_number && errors.acc_number ? {borderColor: '#FF3B30', borderWidth: 1} : null]}
                                    placeholder="Enter Account Number"
                                    onChangeText={handleChange("acc_number")}
                                    placeholderTextColor="#7F7D82"
                                    value={values.acc_number}
                                    autoCapitalize="none"
                              />
                                {touched.acc_number && errors.acc_number ? (
                                    <Text style={{marginBottom: 10, color: '#FF3B30'}} >{errors.acc_number}</Text>
                                  )
                                :
                                <TextWhite style={{marginBottom: 10, color: '#EBEBF560',fontSize:12,fontFamily:"Inter-Medium"}} >Enter your account number here</TextWhite>
                                }
                          </View>

                          <View >
                              <Input
                                style={[styles.inputText, touched.ifsc_code && errors.ifsc_code ? {borderColor: '#FF3B30', borderWidth: 1} : null]}
                                    placeholder="Enter IFSC Code"
                                    onChangeText={handleChange("ifsc_code")}
                                    placeholderTextColor="#7F7D82"
                                    value={values.ifsc_code}
                                    autoCapitalize="none"
                              />
                                {touched.ifsc_code && errors.ifsc_code ? (
                                    <Text style={{marginBottom: 10, color: '#FF3B30'}} >{errors.ifsc_code}</Text>
                                  )
                                :
                                <TextWhite style={{marginBottom: 10, color: '#EBEBF560',fontSize:12,fontFamily:"Inter-Medium"}} >Enter your IFSC code here</TextWhite>
                                }
                          </View>

                          <View >
                              <Input
                                style={[styles.inputText, touched.PAN && errors.PAN ? {borderColor: '#FF3B30', borderWidth: 1} : null]}
                                    placeholder="Enter PAN Number"
                                    onChangeText={handleChange("PAN")}
                                    placeholderTextColor="#7F7D82"
                                    value={values.PAN}
                                    autoCapitalize="none"
                              />
                                {touched.PAN && errors.PAN ? (
                                    <Text style={{marginBottom: 10, color: '#FF3B30'}} >{errors.PAN}</Text>
                                  )
                                :
                                <TextWhite style={{marginBottom: 10, color: '#EBEBF560',fontSize:12,fontFamily:"Inter-Medium"}} >Enter your PAN number here</TextWhite>
                                }
                          </View>

                          
                        </View>

                        <Text style={{color: 'white', fontSize: 10, textAlign: 'center', marginVertical: 25, marginHorizontal: 25}} >Note : Withdrawal request may take upto 3-4 working days to be processed</Text>

                        <View style={{marginHorizontal: 20}} >
                          <GlobalButton
                              onPress={handleSubmit}
                          >
                            <TextWhite>WITHDRAW</TextWhite>
                          </GlobalButton>
                        </View>
                    </View>

                        

                </View>
              </View>

            </ScrollView>
          </SafeAreaView>
        );
      }}
    </Formik>
  );
};
const DeviceWidth = Dimensions.get("window").width;
const DeviceHeight = Dimensions.get("window").height;

const initialValues = {
  acc_holder_name: "",
  acc_number: "",
  ifsc_code: "",
  PAN: "",
  amount: "",
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    withdrawAmount: (withdrawalData, setLoading, navigation) =>
      dispatch(withdrawAmount(withdrawalData, setLoading, navigation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawForm);

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
    width: '100%',
  },
  opacityCard: {
    backgroundColor:"rgba(0, 1, 27, 0.2)",
    borderBottomEndRadius:8,
    borderBottomStartRadius:8,
    paddingTop: 10,
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
    marginLeft: 20,
    marginRight: 20,
    marginTop: 70,
  },
  inputBoxContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  inputBoxContainerEnd: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 50,
  },

  inputbox: {
    padding: 14,
    color: "white",
    backgroundColor: '#1C1C1E80',
    borderRadius: 5,
  },

  errorText: {
    color: "red",
    paddingLeft: 2,
  },
});
