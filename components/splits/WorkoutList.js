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
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState, useContext, useRef } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fonts from "../../constants/fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WorkoutContext } from "../../store/workoutContext";
import color from "../../constants/color";
import { Entypo } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from "@expo/vector-icons";

const WorkoutList = (props) => {
  const workoutContext = useContext(WorkoutContext);
  const [data, setData] = useState();

  async function getWorkouts(type) {
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

  const WorkoutRow = ({ expanded, sets, saveChecked }) => {
    const [height] = useState(new Animated.Value(0));

    const RenderSet = (item) => {
      const [isChecked, setIsChecked] = useState(item.item.isChecked);
      const setNumber = parseInt(item.index) + 1;
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View>
            <Text style={styles.checkBoxText}>
              {"Set " +
                setNumber +
                " = " +
                item.item.Reps +
                " Reps x " +
                item.item.Weight +
                " " +
                item.item.TypeOfWeight}
            </Text>
          </View>
          <BouncyCheckbox
            style={{ justifyContent: "flex-end" }}
            size={25}
            fillColor="#00CC66"
            unfillColor={color.primaryGray}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={{ fontFamily: "JosefinSans-Regular" }}
            onPress={() => {
              setIsChecked(!isChecked);
              saveChecked(item, !isChecked);
            }}
            isChecked={isChecked}
          />
        </View>
      );
    };

    useEffect(() => {
      Animated.timing(height, {
        toValue: !expanded ? 0 : 50 * sets.length,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }, [expanded, height]);
    return (
      <Animated.View
        style={{
          height,
          backgroundColor: "#333333",
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderColor: color.primaryGray,
          justifyContent: "center",
        }}
      >
        {expanded && (
          <FlatList
            data={sets}
            renderItem={({ item, index }) => {
              return <RenderSet item={item} index={index} />;
            }}
          />
        )}
      </Animated.View>
    );
  };

  const RenderItem = (item) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const workout = item.item.workout;
    const sets = item.item.sets;
    let reps = 0;
    for (const x in sets) {
      reps += parseInt(sets[x].Reps);
    }
    async function saveChecked(info, isChecked) {
      sets[info.index] = { ...info.item, isChecked: isChecked };
      const type = props.type;
      if (type == "Pull") {
          await AsyncStorage.setItem("pullWorkouts",JSON.stringify(data));
      }
      if (type == "Push") {
        await AsyncStorage.setItem("pushWorkouts",JSON.stringify(data));
      }
      if (type == "Legs") {
        await AsyncStorage.setItem("legWorkouts",JSON.stringify(data));
      }
    }

    return (
      <View style={styles.workoutContainer} key={item.index}>
        <Text style={styles.workoutTitle}>{workout.title}</Text>
        <View style={styles.workoutDetailsContainer}>
          <Text style={styles.workoutDetailsText}>{sets.length} Sets</Text>
          <Entypo name="dot-single" size={30} color="white" />
          <Text style={styles.workoutDetailsText}>{reps} Reps</Text>
        </View>
        <WorkoutRow
          expanded={isExpanded}
          sets={sets}
          saveChecked={saveChecked}
        />
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? (
            <Ionicons
              name="ios-chevron-up"
              size={30}
              color={color.buttonAccent}
            />
          ) : (
            <Ionicons
              name="ios-chevron-down"
              size={30}
              color={color.buttonAccent}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  };
  
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={data}
        renderItem={({ item, index }) => {
          return <RenderItem item={item} index={index}/>;
        }}
        ListEmptyComponent={
          <View style={styles.listEmptyContainer}>
            <MaterialCommunityIcons
              name="weight-lifter"
              size={85}
              color="white"
              style={{ opacity: 0.5 }}
            />
            <Text style={styles.listEmptyHeaderText}>Add Workouts</Text>
            <Text style={styles.listEmptyText}>
              Keep track of your {props.type} workouts here.
            </Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listEmptyText: {
    fontFamily: fonts.main,
    color: "white",
    fontSize: 18,
    opacity: 0.5,
  },
  listEmptyHeaderText: {
    fontFamily: fonts.mainBold,
    color: "white",
    fontSize: 24,
    opacity: 0.5,
  },
  listEmptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30%",
  },
  listContainer: {
    height: "100%",
  },
  workoutDetailsText: {
    color: "white",
    paddingHorizontal: 16,
    fontFamily: fonts.mainLightBold,
    color: "white",
    fontSize: 18,
  },
  workoutDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  workoutContainer: {
    width: "90%",
    backgroundColor: color.primaryGray,
    alignSelf: "center",
    marginVertical: "2.5%",
    borderRadius: 12,
    borderColor: color.icon,
  },
  workoutTitle: {
    paddingHorizontal: 16,
    paddingTop: 16,
    fontFamily: fonts.main,
    color: "white",
    fontSize: 18,
  },
  checkBoxText: {
    fontFamily: fonts.main,
    color: "white",
    fontSize: 18,
    paddingHorizontal: 16,
  },
});

export default WorkoutList;
