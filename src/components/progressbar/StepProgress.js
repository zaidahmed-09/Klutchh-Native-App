import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions, Platform, } from 'react-native';
import { icons } from '../../utills/Icons';

const progressData = [
    {
        id: 1,
        title: 'Enter Match',
    },
    {
        id: 2,
        title: 'Enter Contest',
    },
    {
        id: 3,
        title: 'Select team',
    },
    {
        id: 4,
        title: 'Select MVP',
    },
    {
        id: 5,
        title: 'Enter',
    },
]

const StepProgress = (props) => {

    const { currentIdx, } = props;
    
    return (
            <View style={{position: 'absolute', top: 10, width: '100%',  alignItems: 'center'}} >
                <View style={{flexDirection: 'row', alignItems: 'center',}} >
                    {progressData.map((item, index) => (
                        <View style={styles.container} >
                            <View style={styles.mainContainer} >
                                {index != 0 ? <View style={styles.barStyle} /> : <View style={[styles.barStyle, {backgroundColor: 'transparent'}]} />}
                                
                                {currentIdx > index ? 
                                <View style={styles.completedCircle} >
                                    <Image source={icons.check_mark} style={styles.checkIcon} />
                                </View>
                                : 
                                <>
                                    {currentIdx == index
                                    ? 
                                    <View style={styles.activeCircle} >
                                        <View style={styles.dotStyle} />
                                    </View>
                                    :
                                        <View style={styles.activeCircle} />
                                    }
                                </>
                                }
                                {progressData.length - 1 !== index ? <View style={styles.barStyle} /> : <View style={[styles.barStyle, {backgroundColor: 'transparent'}]} />}
                            </View>
                             <Text style={styles.textStyle} >{item.title}</Text>
                        </View>
                    ))}
                </View>
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: Platform.OS === "ios" ? 75 : 65, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: Platform.OS === "ios" ? 10 : 8, 
        fontFamily: 'Inter-Medium',
        color: 'white', 
        marginTop: 8, 
        marginRight: 2,
    },
    checkIcon: {
        height: 10, 
        width: 10, 
        marginRight: 2, 
        resizeMode: 'contain',
    },
    activeCircle: {
        height: 16,
        width: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#FF326A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    completedCircle: {
        height: 16,
        width: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#FF326A',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF326A',
    },
    dotStyle: {
        height: 4,
        width: 4,
        borderRadius: 2,
        backgroundColor: '#FF326A',
    },
    barStyle: {
        height: 2,
        width: Platform.OS === "ios" ? 35 : 25,
        backgroundColor: '#FF326A',
    }
})

export default StepProgress