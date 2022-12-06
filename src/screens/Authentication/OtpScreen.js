import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TextInput, Alert, StyleSheet, TouchableOpacity, Platform } from "react-native";

import OTPTextInput from "react-native-otp-textinput";

import { useDispatch } from "react-redux";
import { completeLogin, setAlertModal, setStackMode } from "../../redux/actions/auth";

import styled from "styled-components";
import { GlobalButton, TextWhite } from "../../components/reusables";

import { BASE_URL } from "../../extras/constants";


const Container = styled(View)`
padding: 20px;
border: 0.5px solid #FFFFFF80;
background: #FFFEFF33;
border-radius: 8px;
align-items: center;
`

const OtpScreen = ({route, navigation,}) => {

    const { loginData } = route.params;

    const [otpValue, setOtpValue] = useState('');

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    var isResendEnable = true

    const [timerCount, setTimer] = useState(30);
    const [activator, setActivator] = useState(0);

    useEffect(() => {
        console.log("useEffect =>> >");
      let interval;
      if (isResendEnable) {
        interval = setInterval(() => {
          if (timerCount > 0) {
            setTimer(lastTimerCount => {
              lastTimerCount <= 1 && clearInterval(interval);
              return lastTimerCount - 1;
            });
          }
        }, 1000);
      }
  
      return () => {
        if (isResendEnable) {
          clearInterval(interval);
        }
      };
    }, [activator]);


    const handleSubmit = async () => {
        setLoading(true)

        var data = {
            contact: loginData.contact,
            otp: otpValue,
        }

        console.log("loginData data =>> ", data);
       
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch(`${BASE_URL}/user/mobileVerification?signup=false`, requestOptions)
        .then(response => response.json())
        .then(resp => {
            console.log("resp => ", resp);

            if(resp.status == "SUCCESS"){
                // // console.log("resp => ", resp);

                dispatch(setAlertModal({
                    type: 'Success',
                    title: 'Login Successful!',
                    subtitle: 'Welcome to Klutchh.'
                })); 

                dispatch(completeLogin(resp.token));
                dispatch(setStackMode("default"));
            }else{
                Alert.alert(resp.msg);
            }

            setLoading(false)
        })
        .catch(error => {
            console.log("error => ", error);
            setLoading(false)
            try {
                switch (response.status) {
                    case 401:
                    //   add a toast
                    Alert.alert("Session Expired", "Please login again");
                    break;
                    default:
                    // getcontestDetails();
                    break;
                }
            } catch (e) {
                Alert.alert("Error", "Something went wrong");
            }
        });
    };


    const resendOtpFunc = () => {
        setActivator(activator+1)
        setTimer(30)
        
        var data = {
            contact: loginData.contact,
        }
       
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch(`${BASE_URL}/user/mobileLogin`, requestOptions)
        .then(response => response.json())
        .then(resp => {
            console.log("resp => ", resp);

            if(resp.status == "SUCCESS"){
                Alert.alert("Success", "OTP sent successfully.");
                // // console.log("resp => ", resp);
                // dispatch(completeLogin(resp.token));
                // dispatch(setStackMode("default"));
            }else{
                Alert.alert(resp.msg);
            }

            setLoading(false)
        })
        .catch(error => {
            // // console.log("error => ", error);
            setLoading(false)
            try {
                switch (response.status) {
                    case 401:
                    //   add a toast
                    Alert.alert("Session Expired", "Please login again");
                    break;
                    default:
                    // getcontestDetails();
                    break;
                }
            } catch (e) {
                Alert.alert("Error", "Something went wrong");
            }
        });
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#211134',  }}>
            <View style={{padding: 20, paddingTop: 0}} >
                <Text style={{fontSize: 14, marginVertical: 20, color: 'white', 
                fontFamily:"Inter-Medium"
                 }} >OTP sent to {loginData?.contact}</Text>
                <Container>
                    <View style={{alignItems: 'center', justifyContent: 'center'}} >
                        <Text style={{fontSize: 14, marginVertical: 10, color: 'white', 
                        fontFamily:"Inter-Medium",
                         }} >Enter the OTP you received</Text>

                        {Platform.OS == 'ios'
                        ?
                        <TextInput
                            maxLength={4}
                            placeholder="O T P"
                            placeholderTextColor="#FFFFFF70"
                            style={{fontSize: 18, 
                                fontFamily:"Inter-Medium", 
                                letterSpacing: 10, color: 'white', textAlign: 'center', borderRadius: 6, backgroundColor: '#1C1C1E80', height: 50, width: 200, }}
                            onChangeText={(value) => setOtpValue(value)}
                        />
                        :
                        <OTPTextInput
                            containerStyle={{}}
                            style={{fontSize: 18, 
                               fontFamily:"Inter-Bold", 
                               color: 'white', textAlign: 'center', margin: 8, borderRadius: 6, backgroundColor: '#1C1C1E80', height: 50, width: 50, alignItems: 'center', justifyContent: 'center'}}
                            handleTextChange={(value) => setOtpValue(value)}
                        />
                        }
                    </View>
                </Container>


                {timerCount >0
                ?
                <View style={{width: '100%', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={{fontSize: 14, marginTop: 60, color: 'white'}} >Resend OTP in {timerCount} sec </Text>
                </View>
                :
                <View style={{ marginTop: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={{fontSize: 14, color: 'white', 
                    fontFamily:"Inter-Medium",
                    }} >Didn’t receive the OTP? </Text>
                    <TouchableOpacity
                        onPress={() => resendOtpFunc()}
                    >
                        <Text style={{fontSize: 14,  color: '#FF326A', 
                        fontFamily:"Inter-Bold" 
                        }} > Resend OTP </Text>
                    </TouchableOpacity>
                </View>
                }

                

               


                <View style={{marginTop: 40}} >
                    <GlobalButton
                    disabled={loading}
                    onPress={handleSubmit}
                    ><TextWhite
                    style={{
                        fontFamily:"Inter-Bold",
                        fontSize:16,
                    }}
                    >LOG IN</TextWhite></GlobalButton>
                </View>
            </View>
        </SafeAreaView>
    )
}


  
export default OtpScreen;
