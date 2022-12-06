import { BASE_URL } from "../../extras/constants";
import {
  GET_CURRENT_USER,
  LOGIN_USER,
  LOGOUT_USER,
  SET_ALERT_MODAL,
  SET_MATCH_ID,
  SET_STACK_MODE,
  SET_TAB_NAVIGATION,
} from "./types";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { getToken, removeTokens } from "../../extras/utils";
import { googleConfig } from "../../constants/constant";

export const loginWithToken = (token) => {
  console.log("loginWithToken  ", token);
  let finalToken = token;

  return function (dispatch) {
    AsyncStorage.setItem("access_token_klutchh", finalToken);
    dispatch({
      type: LOGIN_USER,
      payload: finalToken,
    });
  };
};

export const completeLogin = (token, isReload) => {
  return function (dispatch) {
    console.log("completeLogin  ", token);
    dispatch(loginWithToken(token));
    !isReload &&
     Alert.alert("Success", "Login Successful! Welcome to Klutchh.");
    dispatch(getCurrentUser(token));
  };
};

export const setStackMode = (mode) => {
  return function (dispatch) {
    dispatch({
      type: SET_STACK_MODE,
      payload: mode,
    });
  };
};
export const setTabNavigation = (navigation) => {
  return function (dispatch) {
    dispatch({
      type: SET_TAB_NAVIGATION,
      payload: navigation,
    });
  };
};

export const setMatchID = (matchID) => {
  return function (dispatch) {
    dispatch({
      type: SET_MATCH_ID,
      payload: matchID,
    });
  };
};


export const setAlertModal = (mode) => {
  return function (dispatch) {
    dispatch({
      type: SET_ALERT_MODAL,
      payload: mode,
    });
  };
};

export const loginUser = (loginData, setLoading, navigation) => {
  console.log("loginData => ", loginData);
  return function (dispatch) {
    setLoading(true);
    // // console.log("TESTS",BASE_URL)
    axios
      .post(`${BASE_URL}/user/mobileLogin`, loginData)
      .then((response) => {
        //console.log("response => ", response);
        if (response.data.status == 'SUCCESS' || response.data.token) {
          navigation.navigate("Otp", { loginData: loginData});
          //dispatch(completeLogin(response.data.token));
          setLoading(false);

          //dispatch(setStackMode("default"));
        } else {
          Alert.alert("Error", "Invalid ID or Password");
          setLoading(false);
        }
      })
      .catch((error) => {
         console.log("error => ", error);
        setLoading(false);
        try {
          switch (error.status) {
            case 400:
              //   add a toast
              Alert.alert(error.data.status, error.data.msg);
              break;
            case 401:
              //   add a toast
              Alert.alert("Error", "Invalid ID or Password");
              break;
            default:
              // server error
              Alert.alert("Error", "Server error");
              break;
          }
        } catch (e) {
          Alert.alert("Error", "Server error");
        }
      });
  };
};

export const signupUser = (signUpData, setLoading, navigation, setTimer) => {
  return function (dispatch) {

    console.log("signUpData  => ", signUpData);

    ///user/mobileVerification?signup=true
    setLoading(true);
    axios
      .post(`${BASE_URL}/user/mobile/signup`, signUpData)
      .then((response) => {
        Alert.alert("Success", "Verification sent!");

        //navigation.navigate("VerificationScreen", { signUpData: signUpData });

        navigation.navigate("SignupVerificationScreen", { loginData: signUpData, isEmail: false });
        setLoading(false);
      })
      .catch(({ response }) => {
        setLoading(false);

        // // console.log('====================================');
        console.log("response signup => ", response);
        // // console.log('====================================');
        try {
          console.log("try response signup => ", response?.data);
          switch (response?.data?.msg) {
            case "No need, already verified":
              Alert.alert("Error", "Already verified! Login to continue");
              navigation.navigate("Login");
              break;
            case "Account already registered, please log in.":
              Alert.alert("Error", "Already Registered! Login to continue");
              navigation.navigate("Login");
              break;
            
            case "Account already registered, but not verified, OTP sent again to email and/or mobile.":
                Alert.alert("Already verified!", "Enter OTP to continue");
                navigation.navigate("SignupVerificationScreen", { loginData: signUpData, isEmail: false,  });
                break;
            case "Email Already registered, otp sent again":
              //   add a toast
              Alert.alert("Error", "Email Already registered, OTP sent again");
              if (setTimer) {
                setTimer(30);
              }
              // navigation.navigate("VerificationScreen", {
              //   signUpData: signUpData,
              // });
              break;

            case "Email or phone number invalid.":
              Alert.alert("Error", "Email or phone number invalid.");
          
              break;

            default:
              // server error
              console.log("Server ereor");
              Alert.alert("Error", "Server error");
              break;
          }
        } catch (e) {
          console.log("catch ereor => ", e);
          Alert.alert("Error", "Server error");
        }
      });
  };
};

export const verifyOTP = (otpData, setLoading, navigation) => {
  return function (dispatch) {
    setLoading(true);
    axios
      .get(`${BASE_URL}/verification/${otpData.email}/${otpData.otp}`)
      .then((response) => {

        dispatch(completeLogin(response.data.token));
        setLoading(false);
        dispatch(setStackMode("default"));
      })
      .catch((response) => {

        setLoading(false);
        try {
          switch (response.status) {
            case 400:
              //   add a toast
              Alert.alert("Error", "Invalid OTP");
              break;
            case 401:
              //   add a toast
              Alert.alert("Error", "Invalid OTP");
              break;
            default:
              // server error
              Alert.alert("Error", "Server error");
              break;
          }
        } catch (e) {
          Alert.alert("Error", "Server error");
        }
      });
  };
};

export const logoutUser = () => {
  return function (dispatch) {
    // remove stored tokens
    removeTokens();

    // LOGOUT_USER
    dispatch({
      type: LOGOUT_USER,
    });

    // add Toast
    Alert.alert("Success", "Logged out successfully");
  };
};

export const getCurrentUser = (token) => {
  
  return function (dispatch) {
    axios
      .get(`${BASE_URL}/mine`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        
        let data = response.data.data;
        // dispatch current_user data

        dispatch({
          type: GET_CURRENT_USER,
          payload: data,
        });
      })
      .catch((err) => {
        // // console.log(err);
      });
    // dispatch current_user data
  };
};

export const getCurrentMatch = (matchId, token) => {
  return function (dispatch) {
    axios
      .get(`${BASE_URL}/match/getMatchDetails?id=${matchId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {

        dispatch(setMatchID(response.data.match));
      })
      .catch((res) => {
        // // console.log(res, "errGetCurrentMatch");
      });
  };
};

export const resetPassword = (inputData, setLoading) => {
  return function (dispatch) {
    setLoading(true);
    axios
      .post(`${BASE_URL}/user/reset`, inputData)
      .then((response) => {
        if (response.data.isSuccess || response.data.token) {
          dispatch(completeLogin(response.data.token));
          setLoading(false);

          dispatch(setStackMode("default"));
        } else {
          Alert.alert("Error", "Invalid OTP");
          setLoading(false);
        }
      })
      .catch((response) => {

        setLoading(false);
        try {
          switch (response.status) {
            case 400:
              //   add a toast
              Alert.alert("Error", "Invalid OTP");
              break;
            case 401:
              //   add a toast
              Alert.alert("Error", "Invalid OTP");
              break;
            default:
              // server error
              Alert.alert("Error", "Server error");
              break;
          }
        } catch (e) {
          Alert.alert("Error", "Server error");
        }
      });
  };
};

export const withdrawAmount = (withdrawalData, setLoading, navigation) => {
  return function (dispatch,getstate) {
    setLoading(true); 
    // // console.log(withdrawalData);
    axios
      .post(`${BASE_URL}/user/withdraw`, withdrawalData, {
        headers: {
          Authorization: `Bearer ${getstate()?.auth?.access_token}`,
        },
      })
      .then((response) => {
        // // console.log(response)
        Alert.alert("Success", "Withdrawal Request Submitted!");
        setLoading(false);
        navigation.navigate("Home");
      })
      .catch(({ response }) => {
        // // console.log(response)
        try {
          switch (response.status) {
            case 401:
              Alert.alert("Error", "Invalid Token!");
              //   logout User
              dispatch(logoutUser());
              break;
            default:
              Alert.alert("Error", "Oops, something went wrong");
              break;
          }
          setLoading(false);
        } catch (e) {
          Alert.alert("Error", "Couldn't reach the server");
          // // console.log(e);
          setLoading(false);
        }
      });
  };
};

export const googleLogin = ({ setLoading, client, navigation, token }) => {
  return function (dispatch) {
    setLoading(true);
    axios
      .post(`${BASE_URL}/google`, {
        token,
        client: client,
      })
      .then((response) => {

        dispatch(completeLogin(response.data.token));
        setLoading(false);
        dispatch(setStackMode("default"));
      })
      .catch(({ response }) => {

        try {
          switch (response.status) {
            case 401:
              Alert.alert("Error", "Invalid credentials!");

              break;
            default:
              Alert.alert("Error", "Oops, something went wrong");

              break;
          }
        } catch (e) {
          Alert.alert("Error", "Couldn't reach the server");
        }
        setLoading(false);
      });
  };
};
