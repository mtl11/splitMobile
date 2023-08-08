import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Modal,
  FlatList,
} from "react-native";
import React, { useState, useCallback, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import color from "../../constants/color";
import fonts from "../../constants/fonts";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";
import pushWorkouts from "../../assets/data/pushWorkouts";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WorkoutContext } from "../../store/workoutContext";
import pullWorkouts from "../../assets/data/pullWorkouts";
import legWorkouts from "../../assets/data/legWorkouts";

const AddExcercise = (props) => {
  const workoutContext = useContext(WorkoutContext);
  const [data, setData] = useState([
    {
      Reps: "",
      Weight: "",
      TypeOfWeight: "lbs",
    },
    {
      Reps: "",
      Weight: "",
      TypeOfWeight: "lbs",
    },
  ]);
  const [selectedItem, setSelectedItem] = useState(null);

  function emptyInputHelper() {
    for (const item in data) {
      if (data[item].Reps == "") {
        return true;
      }
      if (data[item].Weight == "") {
        return true;
      }
    }
    return false;
  }
  const [errorText, setErrorText] = useState("");

  async function AddWorkout() {
    const workout = {
      workout: selectedItem,
      sets: data,
    };
    if (selectedItem == null) {
      setErrorText("Please choose a workout.");
    } else if (emptyInputHelper()) {
      setErrorText("Please fill out all sets.");
    } else if (data.length == 0) {
      setErrorText("Minimum require number of sets is 1");
    } else {
      setErrorText("");
      if (props.split == "Push") {
        if (workoutContext.pushExercises != null) {
          const newWorkouts = [...workoutContext.pushExercises, workout];
          workoutContext.setPushExercises(newWorkouts);
          await AsyncStorage.setItem(
            "pushWorkouts",
            JSON.stringify(newWorkouts)
          );
        } else {
          workoutContext.setPushExercises([workout]);
          await AsyncStorage.setItem("pushWorkouts", JSON.stringify([workout]));
        }
      }
      if (props.split == "Pull") {
        if (workoutContext.pullExercises != null) {
          const newWorkouts = [...workoutContext.pullExercises, workout];
          workoutContext.setPullExercises(newWorkouts);
          await AsyncStorage.setItem(
            "pullExercises",
            JSON.stringify(newWorkouts)
          );
        } else {
          workoutContext.setPullExercises([workout]);
          await AsyncStorage.setItem("pullWorkouts", JSON.stringify([workout]));
        }
      }
      if (props.split == "Legs") {
        if (workoutContext.legExercises != null) {
          const newWorkouts = [...workoutContext.legExercises, workout];
          workoutContext.setLegExercises(newWorkouts);
          await AsyncStorage.setItem(
            "legWorkouts",
            JSON.stringify(newWorkouts)
          );
        } else {
          workoutContext.setLegExercises([workout]);
          await AsyncStorage.setItem("legWorkouts", JSON.stringify([workout]));
        }
      }
      props.setVisible(false);
    }
  }

  const RenderItem = useCallback(({ item }) => {
    const set = item.index + 1;
    const [measurement, setMeasurement] = useState(item.item.TypeOfWeight);
    const [reps, setReps] = useState(item.item.Reps);
    const [weight, setWeight] = useState(item.item.Weight);
    const renderRight = (progress, dragX) => {
      const trans = dragX.interpolate({
        inputRange: [0, 50, 100, 101],
        outputRange: [0, 0, 0, 1],
      });
      return (
        <TouchableOpacity
          style={{ justifyContent: "center", marginHorizontal: "5%" }}
          onPress={() => {
            const x = data.splice(item.index, 1);
            setData([...data]);
          }}
        >
          <Feather name="x" size={28} color="red" />
        </TouchableOpacity>
      );
    };
    return (
      <Swipeable renderRightActions={renderRight}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderColor: color.primaryGray,
            borderBottomWidth: 0.2,
            padding: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "white",
                fontFamily: fonts.main,
                fontSize: 20,
              }}
            >
              Set {set}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "white",
                fontFamily: fonts.main,
                fontSize: 20,
              }}
            >
              Reps
            </Text>
            <TextInput
              style={{
                borderColor: color.buttonAccent,
                textAlign: "center",
                borderBottomWidth: 2,
                padding: 5,
                color: "white",
                fontFamily: fonts.mainBold,
                fontSize: 16,
              }}
              maxLength={2}
              inputMode="numeric"
              returnKeyType="done"
              placeholder={"   "}
              onChangeText={setReps}
              value={reps}
              onBlur={() => {
                data[item.index] = {
                  Reps: reps,
                  Weight: weight,
                  TypeOfWeight: measurement,
                };
                setData(data);
              }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "white",
                fontFamily: fonts.main,
                fontSize: 20,
              }}
            >
              Weight
            </Text>
            <TextInput
              style={{
                borderColor: color.buttonAccent,
                textAlign: "center",
                borderBottomWidth: 2,
                padding: 5,
                color: "white",
                fontFamily: fonts.mainBold,
                fontSize: 16,
              }}
              maxLength={3}
              returnKeyType="done"
              placeholder={"    "}
              value={weight}
              inputMode="numeric"
              onChangeText={setWeight}
              onBlur={() => {
                data[item.index] = {
                  Reps: reps,
                  Weight: weight,
                  TypeOfWeight: measurement,
                };
                setData(data);
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              if (measurement == "lbs") {
                setMeasurement("kgs");
                data[item.index] = {
                  Reps: reps,
                  Weight: weight,
                  TypeOfWeight: "kgs",
                };
              } else {
                setMeasurement("lbs");
                data[item.index] = {
                  Reps: reps,
                  Weight: weight,
                  TypeOfWeight: "lbs",
                };
              }
              setData(data);
            }}
          >
            <Text
              style={{
                color: color.buttonAccent,
                fontFamily: fonts.main,
                fontSize: 20,
              }}
            >
              {measurement}
            </Text>
          </TouchableOpacity>
        </View>
      </Swipeable>
    );
  });

  return (
    <Modal visible={props.visible} animationType="slide">
      <AutocompleteDropdownContextProvider>
        <SafeAreaView style={{ backgroundColor: color.background, flex: 1 }}>
          <TouchableOpacity
            style={{
              marginLeft: "5%",
              alignSelf: "baseline",
            }}
            onPress={() => {
              props.setVisible(false);
            }}
          >
            <Ionicons
              name="close-circle-outline"
              size={30}
              color={color.icon}
            />
          </TouchableOpacity>
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{
                color: "white",
                fontFamily: fonts.main,
                fontSize: 20,
              }}
            >
              Add {props.split} Workout
            </Text>
          </View>
          <View style={{ marginTop: "5%" }}>
            <AutocompleteDropdown
              onClear={() => {
                setSelectedItem();
              }}
              clearOnFocus={false}
              closeOnSubmit={false}
              onSelectItem={setSelectedItem}
              dataSet={() => {
                if (props.split == "Push") {
                  return pushWorkouts.data;
                }
                if (props.split == "Legs") {
                  return legWorkouts.data;
                }
                if (props.split == "Pull") {
                  return pullWorkouts.data;
                }
                return [];
              }}
              containerStyle={{
                backgroundColor: color.icon,
                borderRadius: 1000,
                marginHorizontal: "5%",
              }}
              renderItem={(item, text) => (
                <Text
                  style={{
                    color: "white",
                    fontFamily: fonts.main,
                    fontSize: 16,
                    padding: 15,
                  }}
                >
                  {item.title}
                </Text>
              )}
              suggestionsListMaxHeight={500}
              textInputProps={{
                placeholder: "Choose Workout",
                autoCorrect: false,
                autoCapitalize: "none",
                style: {
                  borderRadius: 12,
                  backgroundColor: color.secondary,
                  paddingLeft: 18,
                  color: "white",
                  fontFamily: fonts.main,
                  fontSize: 18,
                },
              }}
              inputContainerStyle={{
                backgroundColor: color.secondary,
                borderRadius: 12,
              }}
              suggestionsListContainerStyle={{
                backgroundColor: color.secondary,
              }}
              inputHeight={50}
              showChevron={false}
              onBlur={() => {}}
              closeOnBlur={false}
            />
            <FlatList
              style={{
                marginTop: "5%",
              }}
              renderItem={(item) => {
                return <RenderItem item={item} />;
              }}
              data={data}
              scrollEnabled={false}
            />
            {data.length <= 4 && (
              <TouchableOpacity
                style={{
                  marginTop: "5%",
                  width: "90%",
                  borderWidth: 1.5,
                  borderRadius: 100,
                  alignSelf: "center",
                  borderColor: color.buttonAccent,
                }}
                onPress={() => {
                  if (data.length <= 4) {
                    setData([
                      ...data,
                      {
                        Reps: "",
                        Weight: "",
                        TypeOfWeight: "lbs",
                      },
                    ]);
                  }
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: fonts.mainBold,
                    color: color.buttonAccent,
                    textAlign: "center",
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  }}
                >
                  Add Set
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <View>
              {errorText != "" && (
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: fonts.mainBold,
                    color: "white",
                    textAlign: "center",
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  }}
                >
                  {errorText}
                </Text>
              )}
            </View>
            <TouchableOpacity
              style={{
                marginBottom: "10%",
                marginTop: "5%",
                width: "90%",
                borderWidth: 1.5,
                borderRadius: 100,
                alignSelf: "center",
                borderColor: color.buttonAccent,
                backgroundColor: color.buttonAccent,
              }}
              onPress={() => {
                AddWorkout();
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: fonts.mainBold,
                  color: "white",
                  textAlign: "center",
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }}
              >
                Add Workout
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </AutocompleteDropdownContextProvider>
    </Modal>
  );
};

export default AddExcercise;
