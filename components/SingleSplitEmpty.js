import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import fonts from '../constants/fonts';

const SingleSplitEmpty = props =>{
    return (
        <View style={styles.container}>
            <View style={styles.alertView}>
                <Feather name="alert-triangle" size={60} color="black" />
                <Text style={styles.splitName}>
                    No {props.splitday} Day Workouts
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    alertView:{
        alignItems:"center",
        alignContent:"center",
        justifyContent: "center",
        flex:1
    },
    container:{
        marginTop: "3%",
        marginBottom: "3%",
        width: "100%",
        height: "92.5%",
        alignSelf: "center",
        backgroundColor: '#efefef'
    },
    splitName:{
        fontFamily: fonts.main,
        fontSize: 18
    }
})

export default SingleSplitEmpty;