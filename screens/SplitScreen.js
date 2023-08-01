import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import color from "../constants/color";
import fonts from "../constants/fonts";
import { TabView, SceneMap } from "react-native-tab-view";
import AddExcercise from "../components/splits/AddExcercise";
import WorkoutList from "../components/splits/WorkoutList";
const SplitScreen = (props) => {
  const dummyDataPull = null;
  const dummyDataPush = { Eggs: "eggs" };
  const dummyDataLegs = [
    {
      name: "Bench Press",
      complete: false,
    },
    {
      name: "Dips",
      complete: true,
    },
  ];
  const [showAddModal, setShowAddModal] = useState(false);

  const Push = () => <WorkoutList type={"Push"}/>;
  const Pull = () => <WorkoutList type={"Pull"}/>;
  const Legs = () => <WorkoutList type={"Legs"}/>;

  const renderScene = SceneMap({
    first: Push,
    second: Pull,
    third: Legs,
  });

  const routes = [
    { key: "first", title: "Push" },
    { key: "second", title: "Pull" },
    { key: "third", title: "Legs" },
  ];

  const [index, setIndex] = React.useState(0);
  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View
        style={{
          flexDirection: "row",
          borderColor: "white",
        }}
      >
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              key={i}
              style={{
                flex: 1,
                alignItems: "center",
              }}
              onPress={() => {
                setIndex(i);
              }}
            >
              <View style={[styles.tabTextContainer]}>
                <Animated.Text
                  style={[
                    {
                      fontFamily: fonts.main,
                      color: "white",
                      fontSize: 18,
                    },
                    { opacity },
                  ]}
                >
                  {route.title}
                </Animated.Text>
              </View>
              {index == i && (
                <View
                  style={[
                    { borderWidth: 1, borderColor: "white" },
                    { width: "50%" },
                  ]}
                ></View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: color.background }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            setShowAddModal(true);
          }}
          style={{
            borderWidth: 1.5,
            borderRadius: 100,
            width: "25%",
            borderColor: color.buttonAccent,
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
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: "100%",
          marginTop: 10,
        }}
      >
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
        />
      </View>
      <AddExcercise
        visible={showAddModal}
        setVisible={setShowAddModal}
        split={routes[index].title}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginHorizontal: "5%",
    alignSelf: "flex-end",
  },
  headerText: {
    fontSize: 26,
    fontFamily: fonts.main,
    opacity: 0.5,
  },
  authContainer: {
    width: "80%",
    // marginTop: '5%',
    alignSelf: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 45,
    backgroundColor: color.primary,
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    padding: "5%",
    fontFamily: fonts.main,
  },
});

export default SplitScreen;
