import React,{useEffect} from 'react'

import { StyleSheet, Text, View, Platform, StatusBar, Linking, Modal, TouchableOpacity } from "react-native";

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

const AppNavigation = () => {

    const auth = useSelector((state) => state.auth);

    console.log("auth =>>> ", auth?.access_token);

    const dispatch = useDispatch();

    const [hasToken, setHasToken] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);

    useEffect(() => {
        checkLogin();
    }, [])

    React.useEffect(() => {

      SplashScreen.hide()

        if (auth?.loggedIn && Platform.OS === "android") {
          checkAppVersion();
        }
    }, [auth?.loggedIn]);

    const checkAppVersion = async () => {
        const res = await axios.get(`${BASE_URL}/version`);
    
        if (res.data.version !== "1.1.0") {
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

            <RemotePushController />
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
      paddingTop:  Platform.OS == 'ios' ? 20 : 0, 
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
