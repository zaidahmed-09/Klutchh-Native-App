import React, { useState } from 'react'
import { Text, View, TouchableOpacity,  Image, Dimensions, StyleSheet, Modal, Platform } from 'react-native'
import { useSelector } from 'react-redux';
import { icons } from '../../utills/Icons'
import colors from "../../constants/colors";

import { TextWhite } from '../reusables';

import styled from 'styled-components';

const DeviceWidth = Dimensions.get("window").width;


const AddMoneyBtn = styled(TouchableOpacity)`
background:#FF326A;
border-radius: 4px;
width: 75px;
height: 25px;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
margin: 10px 0px 0px 0px;
`


const DrawerHeader = (props) => {

    const auth = useSelector((state) => state.auth);

    const [modalVisible, setModalVisible] = useState(false);

    const dummyUserImg = ['dummyImg1', 'dummyImg2', 'dummyImg3' ]

    const dummyImg = dummyUserImg[(Math.random() * dummyUserImg.length) | 0]

    const DrawerRightElements = () => {
        return(
            <>
                <View style={{flexDirection: 'row', marginLeft: 0, alignItems: 'center',}} >
                    {/* <TouchableOpacity
                         onPress={() => {props.navigationProps.navigate('Notifications')}}
                    >
                        <Image source={icons.notification_icon} style={{height: 24, width: 24, marginRight: 10, }} />
                    </TouchableOpacity>
                     */}
                    <TouchableOpacity
                        style={{flexDirection: 'row', alignItems: 'center'}} 
                        onPress={() => setModalVisible(true)}
                    >
                        <Image source={icons.wallet_white} style={{height: 24, width: 24, marginRight: 10, }} />
                        <Text style={{color: 'white',  
                        fontFamily:"Inter-Bold",
                         fontSize: 12, marginRight: 0, }} >₹ {Number(auth?.user?.wallet_balance)?.toFixed(2)}</Text>
                    </TouchableOpacity>
                </View>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    setModalVisible(false);
                    }}
                    onBackdropPress={() => {
                    setModalVisible(false);
                    }}
                >
                    <View style={{ flex: 1, }} >
                    
                    
                        <View style={{ height: '100%', width: DeviceWidth, position: 'absolute', top: Platform.OS == 'ios' ? 94 : 60}} >
                            <TouchableOpacity 
                                onPress={() => setModalVisible(false)}
                                style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#420C58', borderBottomRightRadius: 20, borderBottomLeftRadius: 20, height: 200, width: DeviceWidth, }} >
                                    
                                <View style={{width: '100%', alignItems: 'center'}} >
                                    <TextWhite style={{fontSize: 22, marginBottom: 10}} >My Wallet</TextWhite>
                                
                                    <View style={{width: '100%', marginTop :20, flexDirection: 'row', alignItems: 'center', }} >
                                        <View style={{flex: 1, alignItems: 'center',}} >
                                            <TextWhite style={{fontSize: 14}} >Cash Balance</TextWhite>
                                            <View style={{alignItems: 'center', flexDirection: 'row', marginTop: 10}} >
                                                <Image source={icons.earnings} style={{height: 30, width: 30, marginRight: 10}} />
                                                <TextWhite style={{fontSize: 22}} >₹ {Number(auth?.user?.wallet_balance)?.toFixed(2)}</TextWhite>
                                            </View>
                                            <View>
                                                <AddMoneyBtn onPress={() => {setModalVisible(false); props.navigationProps.navigate("AddMoneyForm")}}>
                                                    <Text style={{
                                                    fontSize: 10,
                                                    fontWeight: 'bold',
                                                    color: "white",
                                                    }}>ADD CASH</Text>
                                                </AddMoneyBtn>
                                            </View>
                                        </View>

                                        <View style={{height: 80, width: 1, backgroundColor: 'white'}} />

                                        <View style={{flex: 1, alignItems: 'center'}} >
                                            <TextWhite style={{fontSize: 14}} >Winnings</TextWhite>
                                            <View style={{alignItems: 'center', flexDirection: 'row', marginTop: 10}} >
                                                <Image source={icons.winnings} style={{height: 30, width: 30, marginRight: 10}} />
                                                <TextWhite style={{fontSize: 22}} >₹ {auth?.user?.totalAmountWon ? auth?.user?.totalAmountWon : 0}</TextWhite>
                                            </View>
                                            <View>
                                                <AddMoneyBtn onPress={() => {setModalVisible(false); props.navigationProps.navigate("WithdrawForm")}}>
                                                    <Text style={{
                                                    fontSize: 10,
                                                    fontWeight: 'bold',
                                                    color: "white",
                                                    }}>WITHDRAW</Text>
                                                </AddMoneyBtn>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={() => setModalVisible(false)}
                                style={{flex: 1, width: DeviceWidth, backgroundColor: '#00000080' }} > 
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </Modal>
            </>
        )
    }
    return (
        <View style={{height: 80, paddingBottom: 15, paddingTop: 15, flex: 1, width: DeviceWidth, padding: 10, paddingHorizontal: 10, paddingRight: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',}} >
          
            <View style={{ width: DeviceWidth/3-15 , paddingLeft: 10, }} >
                <TouchableOpacity onPress={() =>  props.navigationProps.toggleDrawer()} >
                    <View style={{height: 44, width: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', borderColor: '#FF326A'}} >
                        <Image 
                         source={{
                            // dummyImg == 'dummyImg1' ? icons.avatar1
                            // : dummyImg == 'dummyImg2' ? icons.avatar2
                            // : icons.avatar3
                            uri: `data:image/image/png;base64,${auth?.user?.avatar_id?.avatar_data.toString('base64')}`
                        }}
                        style={{height: 44, width: 44, resizeMode: 'contain',}} /> 
                        <Image source={icons.hamburger_menu} style={{height: 20, width: 20, position: 'absolute', right: -4, bottom: -4, resizeMode: 'contain',}} /> 
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', width: DeviceWidth/3-15}} >
                {props.screenTitle 
                ?
                <Text style={{fontSize: 15, 
                    fontFamily:"Inter-Bold",
                     letterSpacing: 0,  color: 'white'}} >{props.screenTitle}</Text>
                :
                <Image source={icons.klutchh_logo} style={{height: 30, width: 90, resizeMode: 'contain', }} />
                } 
            </View>
            <View style={{ alignItems: 'center', width: DeviceWidth/3-15}} >
                <DrawerRightElements />
            </View>
        </View>
    )
}




export default DrawerHeader