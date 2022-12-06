import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import color from "../../constants/colors";
import * as Yup from "yup";
import { connect, useDispatch } from "react-redux";

import styled from "styled-components";
import { GlobalButton, GlobalButtonInactive, TextWhite } from "../../components/reusables";
import {  signupUser } from "../../redux/actions/auth";
import { icons } from "../../utills/Icons";

const Container = styled(View)`
padding: 16px;
border: 1px solid #FFFFFF80;
background: #FFFEFF33;
border-radius: 8px;
width: 100%;
font-family:"Inter-Medium";
`
const Input = styled(TextInput)`
background: #1C1C1E80;
color: white;
padding: 12px;
border-radius: 4px;
margin-bottom: 5px;
font-size:14px;
font-family:"Inter-Medium";
`

const CheckBoxContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter valid Email"),
  phoneNumber:  Yup.string()
  .required("Phone Number is Required")
  .matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Phone number is not valid"
  ),
});

const SignupScreen = (props) => {

  const {navigation, signupUser, } = props;
  const [loading, setLoading] = useState(false);

  const isRefernal = props.route.params.isRefernal

  const [checkBoxStatus, setCheckBoxStatus] = useState(true);
  
  const dispatch = useDispatch();


  const handleSubmit = (values) => {
    // delete values.confirmPassword;
    // delete values.isAdult;


    var signupData = {}

    if(values.referralCodeUsed){
        signupData = {
          email: values.email,
          name: values.name,
          phoneNumber: '+91' + values.phoneNumber,
          referralCodeUsed: values.referralCodeUsed
      }
    }else{
      signupData = {
        email: values.email,
        name: values.name,
        phoneNumber: '+91' + values.phoneNumber
      }
    }
   

   signupUser(signupData, setLoading, navigation);
  };



  return (
    <View style={styles.container}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        //validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => {
          return (
            <SafeAreaView style={styles.container}>

              <Container style={{marginTop: 20}} >

                    {isRefernal ?
                      <View >
                      <Input
                        style={styles.inputText}
                      
                            placeholder="Enter Referral Code (Optional)"
                            onChangeText={handleChange("referralCodeUsed")}
                            placeholderTextColor="#7F7D82"
                            returnKeyType="next"
                            onSubmitEditing={() => {
                              Keyboard.dismiss()
                            }}
                      />
                       <TextWhite style={{marginBottom: 10, color: '#EBEBF560',fontSize:12,
                       fontFamily:"Inter-Medium"
                       }} >Enter referral code here</TextWhite>
                      
                    </View>
                    :
                    null
                    }
                        <View >
                          <Input
                            style={[styles.inputText, touched.email && errors.email ? {borderColor: '#FF3B30', borderWidth: 1} : null]}
                          
                                placeholder="Enter Name"
                                onChangeText={handleChange("name")}
                                placeholderTextColor="#7F7D82"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                  Keyboard.dismiss()
                                }}
                          />
                         
                            {touched.name && errors.name ? (
                                <Text style={{marginBottom: 10, color: '#FF3B30'}} >{errors.name}</Text>
                              )
                            :
                            <TextWhite style={{marginBottom: 10, color: '#EBEBF560',fontSize:12,
                            fontFamily:"Inter-Medium"
                        }} >Enter your name here</TextWhite>
                            }
                          
                        </View>
                        
                        <View >
                          <Input
                            style={[styles.inputText, touched.email && errors.email ? {borderColor: '#FF3B30', borderWidth: 1} : null]}
                                maxLength={10}
                                //keyboardType="number-pad"
                                placeholder="Enter Mobile no."
                                onChangeText={handleChange("phoneNumber")}
                                placeholderTextColor="#7F7D82"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                  Keyboard.dismiss()
                                }}
                          />
                            {touched.phoneNumber && errors.phoneNumber ? (
                                <Text style={{marginBottom: 10, color: '#FF3B30'}} >{errors.phoneNumber}</Text>
                              )
                            :
                            <TextWhite style={{marginBottom: 10, color: '#EBEBF560',fontSize:12,
                              fontFamily:"Inter-Medium"
                        }} >You’ll receive an OTP on your Mobile Number</TextWhite>
                            }
                          
                        </View>
                        <View >
                          <Input
                            style={[styles.inputText, touched.email && errors.email ? {borderColor: '#FF3B30', borderWidth: 1} : null]}
                                autoCapitalize={false}
                                placeholder="Enter Email Id"
                                onChangeText={handleChange("email")}
                                placeholderTextColor="#7F7D82"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                  Keyboard.dismiss()
                                }}
                          />
                          
                          {touched.email && errors.email ? (
                                <Text style={{marginBottom: 10, color: '#FF3B30'}} >{errors.email}</Text>
                              )
                            :
                            <TextWhite style={{marginBottom: 10, color: '#EBEBF560',fontSize:12,
                            fontFamily:"Inter-Medium"
                        }} >You’ll receive an OTP on your Email</TextWhite>
                            }
                          
                        </View>
                        {!isRefernal ?
                          <View >
                          <Input
                            style={styles.inputText}
                          
                                placeholder="Enter Referal Code(Optional)"
                                onChangeText={handleChange("referralCodeUsed")}
                                placeholderTextColor="#7F7D82"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                  Keyboard.dismiss()
                                }}
                          />
                           <TextWhite style={{marginBottom: 20, color: '#EBEBF560',fontSize:12,
                           fontFamily:"Inter-Medium"
                           }} >Enter referral code here</TextWhite>
                        </View>
                        :
                        null
                        }
                        <View style={{marginTop: 20}} >
                         
                         <>
                         {loading
                         ?
                         <GlobalButtonInactive
                            disabled={true}
                          ><TextWhite style={{
                            fontFamily:"Inter-Bold",
                            fontSize:16}} >LOADING. . .</TextWhite>
                          </GlobalButtonInactive>
                         :
                          <>

                      {values.email && values.name && values.phoneNumber
                          ?
                          <GlobalButton
                            onPress={handleSubmit}
                          ><TextWhite style={{
                            fontFamily:"Inter-Bold",
                            fontSize:16}} >REGISTER</TextWhite>
                          </GlobalButton>
                          :
                          <GlobalButtonInactive
                            disabled={true}
                            onPress={handleSubmit}
                          ><TextWhite style={{
                            fontFamily:"Inter-Bold",
                            fontSize:16}} >REGISTER</TextWhite>
                          </GlobalButtonInactive>
                          }
                          </>
                         }
                         </>
                         
                         
                        </View>

                        
                       
                        <CheckBoxContainer>
                        {Platform.OS == 'ios' ? 
                            <>
                            {checkBoxStatus
                            ?
                            <TouchableOpacity 
                                onPress={() => setCheckBoxStatus(!checkBoxStatus)}
                                style={{backgroundColor :'#FF326A', marginRight: 10, borderRadius: 4, alignItems: 'center', justifyContent: 'center', height: 24, width: 24}} >
                                <Image source={icons.check_mark} style={{height: 16, width: 16}} /> 
                              </TouchableOpacity>
                              : <TouchableOpacity 
                                  onPress={() => setCheckBoxStatus(!checkBoxStatus)}
                                  style={{borderColor :'#FFFFFF30', borderWidth: 1, marginRight: 10, borderRadius: 4, alignItems: 'center', justifyContent: 'center', height: 24, width: 24}} >
                              <Image source={icons.check_mark} style={{height: 16, width: 16}} /> 
                            </TouchableOpacity> 
                            }
                           
                            </>
                             : 
                             <>
                             {checkBoxStatus
                            ?
                            <TouchableOpacity 
                                onPress={() => setCheckBoxStatus(!checkBoxStatus)}
                                style={{backgroundColor :'#FF326A', marginRight: 10, borderRadius: 4, alignItems: 'center', justifyContent: 'center', height: 24, width: 24}} >
                                <Image source={icons.check_mark} style={{height: 16, width: 16}} /> 
                              </TouchableOpacity>
                              : <TouchableOpacity 
                                  onPress={() => setCheckBoxStatus(!checkBoxStatus)}
                                  style={{borderColor :'#FFFFFF30', borderWidth: 1, marginRight: 10, borderRadius: 4, alignItems: 'center', justifyContent: 'center', height: 24, width: 24}} >
                              <Image source={icons.check_mark} style={{height: 16, width: 16}} /> 
                            </TouchableOpacity> 
                            }
                            </>
                          
                             }
                                <TextWhite style={{fontSize:11,  lineHeight: 16, flex:1,
                                    fontFamily:"Inter-Medium"
                                    }}>
                                By proceeding, I agree that I am 18 years old or above
              and I am not a resident of Andhra Pradesh,Assam,
              Odisha, Nagaland or Sikkim.
                                </TextWhite>
                              </CheckBoxContainer>

              </Container>
        
              <View style={{marginBottom: 20}} >
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    <TextWhite     
                    style={{fontSize: 14, marginRight: 10,
                        fontFamily:"Inter-Medium"
                    }}>
                    Already a User? 
                    </TextWhite>

                    <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                      <TextWhite style={{fontSize: 14, color: '#FF326A',
                        fontFamily:"Inter-Bold"
                    }} >
                      Log In
                      </TextWhite>
                    </TouchableOpacity>
                    
                  </View>
              </View>
            
       
            </SafeAreaView>
          );
        }}
      </Formik>
    </View>
  );
};
const DeviceWidth = Dimensions.get("window").width;
const DeviceHeight = Dimensions.get("window").height;

const initialValues = {
  name: "",
  email: "",
  phoneNumber:"",
  referralCodeUsed: "",
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (signupData, setLoading, navigation) =>
      dispatch(signupUser(signupData, setLoading, navigation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
    justifyContent: 'space-between',
    fontFamily:"Inter-Medium",
    backgroundColor:color.BG
  },

});