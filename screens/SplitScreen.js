import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../constants/color';
import fonts from '../constants/fonts';
import SingleSplit from '../components/SingleSplit';
import SplitTrackerBar from '../components/SplitTrackerBar';
import SingleSplitEmpty from '../components/SingleSplitEmpty';

const SplitScreen = props =>{
    const dummyDataPull = null;
    const dummyDataPush = {Eggs:"eggs"};
    const dummyDataLegs = {Eggs:"eggs"};
    const [currentData, setCurrentData] = useState(dummyDataPush);
    const [currentSplit, setCurrentSplit] = useState("Push")

    const changeSplit = () => {
        if (currentSplit === "Push") {
            setCurrentSplit("Pull");
            setCurrentData(dummyDataPull);
        }
        else if (currentSplit == "Pull") {
            setCurrentSplit("Legs");
            setCurrentData(dummyDataLegs);
        }
        else {
            setCurrentSplit("Push");
            setCurrentData(dummyDataPush);
        }
    }
    
    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.headerContainer} onPress={()=>changeSplit()}>
                <Text style={styles.headerText}>
                    {currentSplit} 
                </Text>
                <MaterialCommunityIcons name="rotate-3d-variant" size={28} color="black" />
            </TouchableOpacity>
            {currentData == null ? <SingleSplitEmpty splitday={currentSplit}/> : <SingleSplit/> } 
            {currentData == null ? null :  <SplitTrackerBar/> } 
            <TouchableOpacity style = {styles.authContainer}>
                <Text style={styles.titleText}>
                    Add Workout 
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        alignSelf:"center",
        flexDirection: 'row',
        backgroundColor: color.primary,
        borderRadius: 45,
        alignItems: 'center',
        padding: '2%',
        justifyContent: 'center',
        width: "25%",
        borderWidth:2,
        marginTop: '3%'
    },
    headerText:{
        fontSize: 22,
        fontFamily: fonts.mainBold
    },
    authContainer: {
        width:'80%',
        marginTop: '5%',
        alignSelf:"center",
        borderWidth:2,
        borderRadius: 45,
        backgroundColor: color.primary,
    },
    titleText:{
        textAlign: 'center',
        fontSize: 20,
        padding:'5%',
        fontFamily: fonts.main
    },
});

export default SplitScreen;