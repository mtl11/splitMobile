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
import React, { useEffect, useState, useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fonts from "../../constants/fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WorkoutContext } from "../../store/workoutContext";
import color from "../../constants/color";
const WorkoutList = (props) => {
  const workoutContext = useContext(WorkoutContext);
  const [data, setData] = useState();
  async function getWorkouts(type) {
    // console.log(await AsyncStorage.getItem("pullWorkouts"));
    if (type == "Pull") {
      if (workoutContext.pullExercises != null)
        setData(workoutContext.pullExercises);
    }
    if (type == "Push") {
      if (workoutContext.pushExercises != null)
        setData(workoutContext.pushExercises);
    }
    if (type == "Legs") {
      if (workoutContext.legExercises != null)
        setData(workoutContext.legExercises);
    }
  }
  useEffect(() => {
    getWorkouts(props.type);
  }, []);
  const renderItem = (item) => {
    const workout = item.item.workout;
    // console.log(workout);
    return (
      <View
        style={{
          width: "90%",
          backgroundColor: color.secondary,
          alignSelf: "center",
          marginVertical: "2.5%",
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "white" }}>{workout.title}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        contentContainerStyle={{ height: "100%" }}
        data={data}
        renderItem={renderItem}
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
