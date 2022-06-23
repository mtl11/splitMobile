import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import fonts from '../constants/fonts';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import color from '../constants/color';

const SingleSplit = (props) =>{
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.headerText}>
                        {props.name}
                    </Text>
                    <View style={styles.progressContainer}>
                        <View style={{paddingRight: '10%'}}>
                            <Text style={styles.subText}>
                                3 Sets
                            </Text>
                        </View>
                        {props.complete == true ?
                        <View style={styles.statusContainer}>
                            <Text style={styles.subText}>
                                In Progress
                            </Text>
                        </View> : 
                         <View style={[styles.statusContainer,{backgroundColor: '#49B265'}]}>
                            <Text style={styles.subText}>
                                Complete
                            </Text> 
                        </View>}
                    </View>
                </View>
                <View>
                    <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    statusContainer:{
        backgroundColor: color.primaryGray,
        borderRadius: 25,
        width: '50%',
        margin: 2,
        alignItems: 'center'
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "white",
        padding: 10,
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius:20,
    },
    progressContainer:{
       flexDirection: 'row',
       alignItems: 'center'
    },
    progressText:{
        fontFamily: fonts.main
    },
    headerText:{
        fontFamily: fonts.main,
        fontSize: 24
    },
    subText:{
        fontFamily: fonts.main,
        fontSize: 18,
        opacity: .5
    }
})

export default SingleSplit;