import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const SingleSplit = props =>{
    return (
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: "5%",
        backgroundColor: "white",
        width: "92%",
        height: "60%",
        alignSelf: "center",
        borderRadius: 20,
        shadowOffset: {
            width:  0,
            height: 1
          },
          shadowOpacity: .1,
          shadowRadius: 5
    }
})

export default SingleSplit;