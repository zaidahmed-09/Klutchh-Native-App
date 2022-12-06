import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  Alert,
  SafeAreaView,
} from "react-native";
import color from "../../constants/colors";
import { loginUser, googleLogin } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import { setStackMode } from "../../redux/actions/auth";

import { Formik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";


import styled from "styled-components";
import { GlobalButton, GlobalButtonInactive, TextWhite } from "../../components/reusables";


import { icons } from "../../utills/Icons";


const Container = styled(View)`
padding: 16px;
margin: 0px 20px 20px 20px;
border: 1px solid #FFFFFF80;
background: #FFFEFF33;
border-radius: 8px;

`
const Input = styled(TextInput)`
background: #1C1C1E80;
color: white;
padding: 12px;
border-radius: 4px;
margin-bottom: 5px;
`
const CheckBoxContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const validationSchema = Yup.object({
  contact: Yup.string()
    .required("Email or number is required")
    .email("Please enter valid Email or Number"),
  //password: Yup.string().required("Password is required"),
});

const LoginScreen = ({ navigation, loginUser, setStackMode }) => {
  const [loading, setLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const lastNameRef = useRef();


  const [checkBoxStatus, setCheckBoxStatus] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {

    var isEmail = true
    var loginData = values

    var regex = /^\d{10}$/

    if(regex.test(values.contact)){
      loginData = {
        "contact": '+91' + values.contact,
      }
        loginUser(loginData, setLoading, navigation);
    }else{
      // console.log("object -- ", loginData);
      loginUser(loginData, setLoading, navigation);
    }
  };



  return (
    <Formik
      initialValues={initialValues}
      // onSubmit={(values) => // console.log(values)}
      onSubmit={handleSubmit}
      //validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
      }) => (
        <SafeAreaView style={styles.container}>
          <Container  style={{marginTop: 20}} >
          <View >
                      <Input
                        style={[styles.inputText , touched.contact && errors.contact ? {borderColor: '#FF3B30', borderWidth: 1} : null]}
                        placeholder="Enter Mobile Number/ Email Id"
                        onChangeText={handleChange("contact")}
                        placeholderTextColor="#7F7D82"
                        value={values.contact}
                        autoCapitalize="none"
                        returnKeyType="next"
                        onSubmitEditing={() => {
                          //lastNameRef.current.focus();
                        }}
                      />
                       {touched.contact && errors.contact ? (
                            <Text style={{marginBottom: 10, color: '#FF3B30'}} >{errors.contact}</Text>
                          )
                        :
                        <TextWhite style={{marginBottom: 10, color: '#EBEBF560', 
                            fontFamily:"Inter-Medium",
                            fontSize:12,}} >Enter your Mobile Number/ Email Id here</TextWhite>
                        }
                          
                    </View>
                  
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
                          {values.contact
                          ?
                          <GlobalButton
                              disabled={loading}
                              
                              onPress={handleSubmit}
                            ><TextWhite style={{
                                    fontFamily:"Inter-Bold",
                                    fontSize:16}}>LOG IN</TextWhite></GlobalButton>
                          :
                          <GlobalButtonInactive
                            disabled={true}
                            
                            onPress={handleSubmit}
                          ><TextWhite style={{
                                fontFamily:"Inter-Bold",
                                fontSize:16}} >LOG IN</TextWhite>
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
                           
                            <TextWhite style={{fontSize:11, lineHeight: 16, flex:1, 
                                    fontFamily:"Inter-Medium"
                                }}>
                            By proceeding, I agree that I am 18 years old or above
          and I am not a resident of Andhra Pradesh,Assam,
          Odisha, Nagaland or Sikkim.
                            </TextWhite>
                          </CheckBoxContainer>

          </Container>

          <View style={{marginBottom: 40}} >
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                <TextWhite     
                style={{fontSize: 14, marginRight: 4, 
                    fontFamily:"Inter-Medium",
                }}>
                Are you a new user? 
                </TextWhite>
                <TouchableOpacity onPress={()=>navigation.navigate("Signup",{isRefernal: false,})}>
                  <TextWhite style={{fontSize: 14, color: '#FF326A', 
                    fontFamily:"Inter-Bold"
                }} >
                  Register Here
                  </TextWhite>
                </TouchableOpacity>
                
              </View>
          </View>

        </SafeAreaView>
      )}
    </Formik>
  );
};
const initialValues = {
  contact: "",
  //password: "",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor:color.BG,
    position: "relative",
fontFamily:"Inter-Medium",
    fontSize:14,
    paddingHorizontal: 16,
  },

});

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (loginData, setLoading, navigation, isEmail) =>
      dispatch(loginUser(loginData, setLoading, navigation, isEmail)),
    setStackMode: (mode) => dispatch(setStackMode(mode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
