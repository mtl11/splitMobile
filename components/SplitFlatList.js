import { StyleSheet, Text, View , Switch, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import React, { useState } from 'react';
import SingleSplit from './SingleSplit';

const SplitFlatList = props => {
    console.log(props.data);
    return (
        <View style={styles.container}>
            <FlatList 
                data={props.data}
                renderItem={({item}) =>(
                    <SingleSplit 
                    name ={item.name}
                    complete ={item.complete}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: "3%",
        marginBottom: "3%",
        width: "100%",
        height: "92.5%",
        alignSelf: "center",
        backgroundColor: '#efefef'
    },
})
export default SplitFlatList;