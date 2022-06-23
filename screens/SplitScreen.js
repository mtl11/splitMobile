import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import color from '../constants/color';
import fonts from '../constants/fonts';
import SingleSplitEmpty from '../components/SingleSplitEmpty';
import SplitFlatList from '../components/SplitFlatList';

const SplitScreen = props =>{
    const dummyDataPull = null;
    const dummyDataPush = {Eggs:"eggs"};
    const dummyDataLegs = [{
            name:"Bench Press",
            complete: false
        },
        {
            name: "Dips",
            complete: true
        }
    ];
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
        <SafeAreaView style={{backgroundColor: color.primary}}>
            <View style={styles.headerContainer}>
                <TouchableOpacity  onPress={()=>changeSplit()}>
                    <MaterialCommunityIcons name="rotate-3d-variant" size={36} color="black" />
                </TouchableOpacity>
                    <Text style={styles.headerText}>
                        {currentSplit} 
                    </Text>
                <TouchableOpacity>
                    <Ionicons name="add-circle" size={36} color="black" />
                </TouchableOpacity>
            </View>
                {currentData == null ? <SingleSplitEmpty splitday={currentSplit}/> : <SplitFlatList data ={dummyDataLegs}/> } 
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        // alignSelf:"center",
        flexDirection: 'row',
        // backgroundColor: '#d3d3d3',
        // borderRadius: 45,
        alignItems: 'center',
        // padding: '2%',
        justifyContent: 'space-around',
        alignContent:'center',
        // width: "40%",
        // borderWidth:2,
        // marginTop: '2%',
    },
    headerText:{
        fontSize: 26,
        fontFamily: fonts.main,
        opacity: .5
    },
    authContainer: {
        width:'80%',
        // marginTop: '5%',
        alignSelf:"center",
        justifyContent:'center',
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