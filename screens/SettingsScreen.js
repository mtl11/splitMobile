import { StyleSheet, Text, View , Switch, SafeAreaView, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import fonts from '../constants/fonts';
import { MaterialIcons } from '@expo/vector-icons';

const SettingsScreen = props =>{
    const [isEnabledDM, setIsEnabled] = useState(false);
    const toggleSwitchDM = () => setIsEnabled(previousState => !previousState);

    const [isEnabledNotif, setIsEnabledNotif] = useState(false);
    const toggleSwitchNotif = () => setIsEnabledNotif(previousState => !previousState);

    return (
        <SafeAreaView>
            <View style={styles.iconContainer}>
                <Text style={styles.iconText}>
                    Split
                </Text>
            </View>
            <View style={[styles.settingsBar, {borderTopWidth:1}]}>
                <Text style ={styles.settingsText}>
                    Dark Mode 
                </Text>
                <Switch
                    onValueChange={toggleSwitchDM}
                    value={isEnabledDM}
                />
            </View>
            <TouchableOpacity style={styles.settingsBar}>
                <Text style ={styles.settingsText}>
                    matthew.tyler.lewis@gmail.com 
                </Text>
                <View >
                    <MaterialIcons name="arrow-forward-ios" size={20} color="black"  style={styles.settingsBarIcon}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsBar}>
                <Text style ={styles.settingsText}>
                    Send Feedback 
                </Text>
                <View >
                    <MaterialIcons name="arrow-forward-ios" size={20} color="black"  style={styles.settingsBarIcon}/>
                </View>
            </TouchableOpacity>
            <View style={styles.settingsBar}>
                <Text style ={styles.settingsText}>
                    Enable Notifications 
                </Text>
                <Switch
                    onValueChange={toggleSwitchNotif}
                    value={isEnabledNotif}
                />
            </View>
            <TouchableOpacity style ={{marginTop:'10%'}}>
                <Text style ={styles.signOutText}>
                    Sign Out 
                </Text>
            </TouchableOpacity>
            <View style={styles.infoContainer}>
                <Text style ={styles.infoText}>
                    Split v1.0.0 
                </Text>
                <Text style ={styles.infoText}>
                    Created By Lewey Labs
                </Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    settingsBarIcon:{
        opacity: .5
    },
    settingsBarSwitch:{
        flexDirection: 'row',
        alignContent: 'center'
    },
    settingsBar:{
        backgroundColor: 'white',
        borderBottomWidth:1,
        // borderTopWidth:1,
        borderTopColor: 'grey',
        borderBottomColor: 'grey',
        // marginBottom: '5%',
        padding: '4%',
        justifyContent:'space-between',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: "center"
    },
    iconText:{
        fontFamily: fonts.mainLightBold,
        fontSize: 50,
    },
    settingsText:{
        fontSize: 18,
        fontFamily: fonts.main
    },
    iconContainer:{
        alignSelf:"center",
        marginTop: '15%',
        marginBottom: '15%'
    },
    infoContainer:{
        alignSelf: 'center',
        marginTop: '15%',
        opacity: '.5'
    },
    infoText:{
        fontSize: 18,
        fontFamily: fonts.main,
        textAlign: 'center'
    },
    signOutText:{
        fontSize: 24,
        fontFamily: fonts.main,
        textAlign: 'center',
        color: 'red'
    }
   
})
export default SettingsScreen;