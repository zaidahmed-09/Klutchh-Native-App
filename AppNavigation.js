import React, { useState, useEffect, useRef } from 'react'

import { StyleSheet, Text, View, Platform, PermissionsAndroid, StatusBar, Linking, Modal, TouchableOpacity, AppState } from "react-native";

import { NavigationContainer } from '@react-navigation/native';

import AuthenticationStack from './src/stack/AuthenticationStack';
import DrawerNavigationStack from './src/stack/DrawerNavigationStack';

import { connect, useDispatch, useSelector } from 'react-redux';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { completeLogin } from './src/redux/actions/auth';
import axios from 'axios';
import { BASE_URL } from './src/extras/constants';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import colors from './src/constants/colors';


import SplashScreen from 'react-native-splash-screen';
import RemotePushController from './src/utills/RemotePushController';
// import FcmTokenScreen from './FcmTokenScreen';

import Geolocation from '@react-native-community/geolocation';
import AppEligibleModal from './src/components/modal/AppEligibleModal';


const AppNavigation = () => {

  const [isAppEligible, setIsAppEligible] = useState(false);

  const [userLocation, setUserLocation] = useState('');

  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');

  const auth = useSelector((state) => state.auth);

  //console.log("auth =>>> ", auth?.access_token);

  const dispatch = useDispatch();

  const [hasToken, setHasToken] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const appState = useRef(AppState.currentState);

  useEffect(() => {
    checkLogin();



    const subscription = AppState.addEventListener("change", nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }

      appState.current = nextAppState;
      if (appState.current == "active") {
        axios.post(`${BASE_URL}/track/mixpanel`,
          {
            eventName: "App Open"
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth?.access_token}`,
            },
          }
        ).then(res => {
          console.log(res.data)
        })
      } else if (appState.current == "background") {
        axios.post(`${BASE_URL}/track/mixpanel`,
          {
            eventName: "App Close"
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth?.access_token}`,
            },
          }
        )
      }
      console.log("AppState", appState.current);
    });

    return () => {
      subscription.remove();
    };

  }, [])

  console.log(
    "access token---------------",
    auth?.access_token
  )

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      (position) => {
        setLocationStatus('You are Here');
        console.log("getOneTimeLocation =>> You are Here");
        const currentLongitude =
          JSON.stringify(position.coords.longitude);
        const currentLatitude =
          JSON.stringify(position.coords.latitude);
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        setLocationStatus('You are Here');
        console.log("subscribeLocationLocation =>> You are Here");
        console.log(position);

        var longitude = position.coords.longitude
        var latitude = position.coords.latitude

        // console.log("longitude => ", longitude);     
        // console.log("latitude => ", latitude);  


        //https://nominatim.openstreetmap.org/reverse?lat=16.515099&lon=80.632095&format=json
        // fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)

        // fetch(`https://nominatim.openstreetmap.org/reverse?lat=16.515099&lon=80.632095&format=json`)
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
          .then(response => response.json())
          .then(resp => {
            console.log("resp => ", resp?.address?.state);

            var userState = resp?.address?.state


            setUserLocation(userState)

            if (userState == 'Delhi' || userState == 'Andhra Pradesh' || userState == 'Assam' || userState == 'Odisha' || userState == 'Nagaland' || userState == 'Sikkim') {
              setIsAppEligible(true)
            }
          })
          .catch(error => {
            console.log("error => ", error);
          })


        const currentLongitude =
          JSON.stringify(position.coords.longitude);
        const currentLatitude =
          JSON.stringify(position.coords.latitude);
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };

  React.useEffect(() => {

    SplashScreen.hide()

    if (auth?.loggedIn && Platform.OS === "android") {
      checkAppVersion();
    }
  }, [auth?.loggedIn]);

  const checkAppVersion = async () => {
    const res = await axios.get(`${BASE_URL}/version`);

    if (res.data.version !== "1.1") {
      setModalVisible(true);
    }
  };



  const checkLogin = async () => {
    AsyncStorage.getItem("access_token_klutchh").then((token) => {
      if (token) {
        setHasToken(true);
        dispatch(completeLogin(token, true));
      }
    });
  };



  //console.log("AppNavigation auth => ", auth);

  return (
    <NavigationContainer>

      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.PRIMARY_COLOR}
      />

      {!auth?.loggedIn
        ?
        <>
          <AuthenticationStack />
        </>
        :
        <>
          <DrawerNavigationStack />
        </>
      }

      {/* <FcmTokenScreen /> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
      >
        <TouchableOpacity
          style={styles.outerContainer}
          activeOpacity={1}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>A new version is available!!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  Linking.openURL("https://klutchh.in/");
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Download now</Text>
              </Pressable>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>


      {isAppEligible ? <AppEligibleModal userLocation={userLocation} /> : null}
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  font10: {
    fontSize: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#4F4ADD",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  outerContainer: {
    height: "100%",
  },
  tabbarStyle: {
    position: 'absolute',
    height: Platform.OS == 'ios' ? 100 : 90,
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
    backgroundColor: '#101010',
    borderRadius: 50,
    // borderWidth: 1,
    // borderColor: 'red',
    paddingBottom: Platform.OS == 'ios' ? 40 : 10,
    borderTopWidth: 0,
    elevation: 0
  }
});



const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginWithToken: (token) => dispatch(loginWithToken(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
