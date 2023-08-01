import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Animated,
  Modal,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fonts from "../../constants/fonts";
const WorkoutList = (props) => {
  return (
    <View>
      <FlatList
        ListEmptyComponent={
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "30%",
            }}
          >
            <MaterialCommunityIcons
              name="weight-lifter"
              size={85}
              color="white"
              style={{ opacity: 0.5 }}
            />
            <Text
              style={{
                fontFamily: fonts.mainBold,
                color: "white",
                fontSize: 24,
                opacity: 0.5,
              }}
            >
              Add Workouts
            </Text>
            <Text
              style={{
                fontFamily: fonts.main,
                color: "white",
                fontSize: 18,
                opacity: 0.5,
              }}
            >
              Keep track of your {props.type} workouts here.
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default WorkoutList;
