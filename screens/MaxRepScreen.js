import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import color from "../constants/color";
import fonts from "../constants/fonts";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryArea,
  VictoryLine,
} from "victory-native";
import { Icon } from "react-native-elements";

const MaxRepScreen = (props) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.bodyContainer}>
        <View style={styles.repContainer}>
          <View style={styles.repHeaderContainer}>
            <Text style={styles.repHeader}>Bench</Text>
            <Text style={styles.repHeader}>PR: 180 lbs</Text>
            <TouchableOpacity>
              <Text style={[styles.repHeader, { color: color.icon }]}>
                Add New
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.graphContainer}>
            <VictoryLine
              interpolation="basis"
              animate={{ duration: 1000 }}
              style={{
                data: {
                  stroke: color.icon,
                  strokeWidth: 5,
                },
              }}
              width={300}
              height={150}
              padding={5}
              data={[
                { x: 1, y: 0, y0: 0 },
                { x: 2, y: 2, y0: 0 },
                { x: 3, y: 4, y0: 0 },
                { x: 4, y: 18, y0: 0 },
                { x: 5, y: 9, y0: 0 },
                { x: 5, y: 9, y0: 0 },
                { x: 10, y: 4, y0: 0 },
                { x: 11, y: 4, y0: 0 },
                { x: 12, y: 4, y0: 0 },
              ]}
            />
            <Text style={{ color: "white", fontFamily: fonts.main }}>
              Last Updated: 10/20/2023
            </Text>
          </View>
        </View>
        <View style={styles.repContainer}>
          <View style={styles.repHeaderContainer}>
            <Text style={styles.repHeader}>Deadlift</Text>
            <Text style={styles.repHeader}>PR: 180 lbs</Text>
            <TouchableOpacity>
              <Text style={[styles.repHeader, { color: color.icon }]}>
                Add New
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.graphContainer}>
            <VictoryLine
              interpolation="basis"
              animate={{ duration: 1000 }}
              style={{
                data: {
                  stroke: color.icon,
                  strokeWidth: 5,
                },
              }}
              width={300}
              height={150}
              padding={5}
              data={[
                { x: 1, y: 0, y0: 0 },
                { x: 2, y: 2, y0: 0 },
                { x: 3, y: 4, y0: 0 },
                { x: 4, y: 18, y0: 0 },
                { x: 5, y: 9, y0: 0 },
                { x: 5, y: 9, y0: 0 },
                { x: 10, y: 4, y0: 0 },
                { x: 11, y: 4, y0: 0 },
                { x: 12, y: 4, y0: 0 },
              ]}
            />
            <Text style={{ color: "white", fontFamily: fonts.main }}>
              Last Updated: 10/20/2023
            </Text>
          </View>
        </View>
        <View style={styles.repContainer}>
          <View style={styles.repHeaderContainer}>
            <Text style={styles.repHeader}>Squat</Text>
            <Text style={styles.repHeader}>PR: 180 lbs</Text>
            <TouchableOpacity>
              <Text style={[styles.repHeader, { color: color.icon }]}>
                Add New
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.graphContainer}>
            <VictoryLine
              interpolation="basis"
              animate={{ duration: 1000 }}
              style={{
                data: {
                  stroke: color.icon,
                  strokeWidth: 5,
                },
              }}
              width={300}
              height={150}
              padding={5}
              data={[
                { x: 1, y: 0, y0: 0 },
                { x: 2, y: 2, y0: 0 },
                { x: 3, y: 4, y0: 0 },
                { x: 4, y: 18, y0: 0 },
                { x: 5, y: 9, y0: 0 },
                { x: 5, y: 9, y0: 0 },
                { x: 10, y: 4, y0: 0 },
                { x: 11, y: 4, y0: 0 },
                { x: 12, y: 4, y0: 0 },
              ]}
            />
            <Text style={{ color: "white", fontFamily: fonts.main }}>
              Last Updated: 10/20/2023
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: color.background,
    flex: 1,
  },
  headerContainer: {
    marginHorizontal: "5%",
  },
  headerText: {
    fontSize: 20,
    fontFamily: fonts.mainLightBold,
    color: "white",
  },
  bodyContainer: { justifyContent: "space-evenly", flex: 1 },
  repHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  repContainer: {
    // backgroundColor: color.primaryGray,
    width: "90%",
    height: "33%",
    borderRadius: 12,
    alignSelf: "center",
    padding: 16,
    // shadowColor: "#171717",
    // shadowOffset: { width: -3, height: 3 },
    // shadowOpacity: 0.4,
    // shadowRadius: 2,
  },
  repHeader: {
    fontSize: 20,
    fontFamily: fonts.main,
    color: "white",
  },
  dateText: {
    fontFamily: fonts.main,
    color: "white",
    fontSize: 16,
  },
  graphContainer: {
    alignItems: "center",
    backgroundColor: color.primaryGray,
    padding: 16,
    shadowColor: "#171717",
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    borderRadius: 12,
  },
});

export default MaxRepScreen;
