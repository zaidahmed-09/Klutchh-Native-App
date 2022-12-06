import React, {useState, useEffect} from 'react'
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity, Modal, } from "react-native";
import { icons } from '../../../utills/Icons';

//import { Video, AVPlaybackStatus } from 'expo-av';

const LiveStream = ({showModal, onCloseModal, streamUrl}) => {

    const video = React.useRef(null);

    const [status, setStatus] = React.useState({});

    return (
        <View>
            <Modal
                transparent
                visible={showModal}
                onRequestClose={() => {onCloseModal()}}
            >
               <TouchableOpacity   
                    onPress={() => {onCloseModal()}}  
                    style={{backgroundColor: '#11111190', flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                    <View style={{ height: 250, width: '85%', borderRadius: 10, backgroundColor: '#000',  alignItems: 'center', justifyContent: 'center'}} >
                            {/* <TouchableOpacity
                                onPress={() => {onCloseModal()}} 
                                style={{alignItems: 'flex-end' , width: '100%' }} >
                                <Image source={icons.cross_pink} style={{height: 30, width: 30}} />
                            </TouchableOpacity> */}
                            {/* <Video
                                shouldPlay={true}
                                ref={video}
                                style={{height: '100%', width:'100%'}}
                                source={{
                                    uri: streamUrl?.english?.raw_url || streamUrl?.english?.embed_url
                                    //uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                                }}
                                useNativeControls
                                resizeMode="contain"
                                //isLooping
                                onPlaybackStatusUpdate={status => setStatus(() => status)}
                            /> */}
                            <Text> </Text>

                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default LiveStream
