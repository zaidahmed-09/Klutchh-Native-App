import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAlertModal } from '../../redux/actions/auth';

import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, Modal,  } from 'react-native'

import { icons } from "../../utills/Icons";
import colors from '../../constants/colors';

const DeviceWidth = Dimensions.get("window").width;

const AlertModal = () => {

    const auth = useSelector((state) => state.auth);

    console.log('====================================');
    console.log("home auth alertModal => ", auth?.alertModal);
    console.log('====================================');

    var modalDetails = auth?.alertModal

    const dispatch = useDispatch()

    const [modalVisible, setModalVisible] = useState(true);


    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //setModalVisible(!modalVisible);
        }}
        onBackdropPress={() => {
          //setModalVisible(false);
        }}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', }} 
      >
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', }} >
            <View style={styles.modalContainer} >
                <TouchableOpacity 
                    onPress={() => {dispatch(setAlertModal(null));}}
                    style={{alignItems: 'flex-end', width: '100%'}} >
                    <Image
                        source={icons.cross_pink}
                        style={styles.crossIcon}
                    />
                </TouchableOpacity>
                <View style={styles.tickmarkContainer} >
                    {modalDetails?.modalType == 'SignupModal'
                    ?
                    <Text style={styles.amountStyle} >₹ {modalDetails?.amount}</Text>
                    :
                    <Image
                        source={icons.purple_check}
                        style={styles.tickmark}
                    />
                    }
                    
                    
                </View>
                <View style={styles.textContainer} >
                    <Text style={styles.title} >{modalDetails?.title}</Text>
                    <Text style={styles.subTitle} >{modalDetails?.subtitle}</Text>
                </View>
            </View>
            </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    tickmark: {
        height: 110, 
        width: 110, 
        resizeMode: 'contain',
    },
    tickmarkContainer: {
        height: 140,
        width: 140,
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#58306e80',
    },
    modalContainer: {
        //height: 250, 
        width: DeviceWidth-32, 
        borderRadius: 20,
        borderWidth: 2,
        padding: 15,
        paddingVertical: 20,
        borderColor: '#EBEBF515',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.PRIMARY_COLOR,
    },
    textContainer: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 22,
        marginBottom: 6,
        color: colors.NEW_THEME_RED,
        fontFamily: 'Inter-SemiBold',
    },
    subTitle: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Inter-Medium',
    },
    amountStyle: {
        fontSize: 45,
        color: '#BB37BA',
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
    },
    crossIcon: {
        height: 36,
        width: 36
    }
})

export default AlertModal