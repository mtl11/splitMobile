import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, SafeAreaView, Animated, Modal, FlatList, } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import color from "../../constants/color";
import fonts from '../../constants/fonts';
import { SearchBar } from '@rneui/themed';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown'
import pushWorkouts from '../../assets/data/pushWorkouts';
const AddExcercise = (props) => {
    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };
    const [data, setData] = useState([{}, {}])
    const [selectedItem, setSelectedItem] = useState(null);

    const renderItem = (item) => {
        const set = item.index + 1;
        const[measurement, setMeasurement] = useState("lbs");
        return (

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                // marginHorizontal: "5%",
                borderColor: color.primaryGray,
                borderBottomWidth: .2, padding: 15
            }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{
                        color: "white",
                        fontFamily: fonts.main,
                        fontSize: 20
                    }}>
                        Set {set}
                    </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{
                        color: "white",
                        fontFamily: fonts.main,
                        fontSize: 20
                    }}>
                        Reps
                    </Text>
                    <TextInput style={{
                        borderColor: color.buttonAccent,
                        textAlign: "center",
                        borderBottomWidth: 2,
                        padding: 5,
                        color: "white",
                        fontFamily: fonts.main,
                        fontSize: 16,

                        // width: "25%"
                    }} maxLength={2}
                        placeholder={"   "}
                    />

                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{
                        color: "white",
                        fontFamily: fonts.main,
                        fontSize: 20
                    }}>
                        Weight
                    </Text>
                    <TextInput style={{
                        borderColor: color.buttonAccent,
                        textAlign: "center",
                        borderBottomWidth: 2,
                        padding: 5,
                        color: "white",
                        fontFamily: fonts.main,
                        fontSize: 16,

                        // width: "30%"
                    }} maxLength={3}
                        placeholder={"    "}

                    />

                </View>
                <TouchableOpacity onPress={() => {
                   if(measurement == "lbs"){
                    setMeasurement("kgs")
                   }else{
                    setMeasurement("lbs")
                   }
                }}>
                    <Text style={{
                        color: color.buttonAccent,
                        fontFamily: fonts.main,
                        fontSize: 20
                    }}>
                        {measurement}
                    </Text>
                </TouchableOpacity>
            </View>)
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <AutocompleteDropdownContextProvider>
                <SafeAreaView style={{ backgroundColor: color.background, flex: 1 }}>
                    <TouchableOpacity style={{
                        marginLeft: "5%",
                        alignSelf: "baseline"
                    }} onPress={() => {
                        props.setVisible(false);
                    }}>
                        <Ionicons name="close-circle-outline" size={30} color={color.icon} />
                    </TouchableOpacity>
                    <View style={{ alignSelf: "center" }}>
                        <Text style={{
                            color: "white",
                            fontFamily: fonts.main,
                            fontSize: 20
                        }}>
                            Add {props.split} Workout
                        </Text>
                    </View>
                    <View style={{ marginTop: "5%" }}>
                        <AutocompleteDropdown
                            clearOnFocus={false}
                            closeOnSubmit={false}
                            onSelectItem={setSelectedItem}
                            dataSet={pushWorkouts.pushWorkouts}
                            containerStyle={{
                                backgroundColor: color.icon,
                                borderRadius: 1000,
                                marginHorizontal: "5%"
                            }}
                            renderItem={(item, text) => <Text style={{
                                color: "white",
                                fontFamily: fonts.main,
                                fontSize: 16, padding: 15
                            }}>{item.title}</Text>}
                            suggestionsListMaxHeight={500}
                            textInputProps={{
                                placeholder: "Choose Workout",
                                autoCorrect: false,
                                autoCapitalize: 'none',
                                style: {
                                    borderRadius: 12,
                                    backgroundColor: color.secondary,
                                    // color: '#fff',
                                    paddingLeft: 18,
                                    color: "white",
                                    fontFamily: fonts.mainLightBold,
                                    fontSize: 16,
                                },
                            }}
                            rightButtonsContainerStyle={{
                                right: 8,
                                height: 30,
                                alignSelf: 'center',
                            }}
                            inputContainerStyle={{
                                backgroundColor: color.secondary,
                                borderRadius: 25,
                            }}
                            suggestionsListContainerStyle={{
                                backgroundColor: color.secondary,
                            }}
                            inputHeight={50}
                            showChevron={false}
                            onBlur={() => { }}
                            closeOnBlur={false}
                        />
                        <FlatList
                            style={{
                                marginTop: "5%"
                            }}
                            renderItem={renderItem}
                            data={data}
                            ListFooterComponent={
                                <TouchableOpacity style={{
                                    marginTop: "5%",
                                    width: "90%",
                                    borderWidth: 1.5,
                                    borderRadius: 100, alignSelf: "center", borderColor: color.buttonAccent
                                }}>
                                    <Text style={{
                                        textAlign: "center", color: "white",
                                        fontFamily: fonts.mainBold,
                                        fontSize: 18,
                                        fontFamily: fonts.mainBold,
                                        color: color.buttonAccent,
                                        textAlign: "center",
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                    }}>
                                        Add Set
                                    </Text>
                                </TouchableOpacity>}
                        />
                    </View>
                </SafeAreaView>
            </AutocompleteDropdownContextProvider>
        </Modal>
    )
}

export default AddExcercise;