import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useState } from "react";

const Menu = ({navigation}) => {
  return (
    <View className="bg-black">
      <View
        style={[styles.iphone1415ProMax1Inner, styles.rectangleParentLayout]}
      >
        <Pressable
          onPress={() => navigation.navigate("Chatbot")}
        >
          <View style={[styles.groupWrapper, styles.groupPosition]}>
            <View style={[styles.groupWrapper, styles.groupPosition]}>
              <View style={[styles.groupChild, styles.groupPosition]} />
              <Text style={styles.askAboutEnrollment}>Ask about Enrollment</Text>
            </View>
          </View>
        </Pressable>
        
      </View>
      <View
        style={[styles.iphone1415ProMax1Child, styles.rectangleParentLayout]}
      >
        <Pressable
          onPress={() => navigation.navigate("Chatbot")}
        >
          <View className="bg-black">
            <View style={[styles.groupWrapper, styles.groupPosition]}>
              <View style={[styles.groupChild, styles.groupPosition]} />
              <Text style={styles.askAboutCourses} className="text-white">Ask about Courses</Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
        <Pressable
            onPress={() => navigation.navigate("Chatbot")}
          >
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.askAboutTimetables, styles.askTypo]}>
            Ask about Timetables
          </Text>
        </Pressable>
      </View>
      <View style={[styles.groupView, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.bookAnAppointment, styles.askAboutGlobalTypo]}>
          Book an appointment
        </Text>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.askAboutWellbeing, styles.askTypo]}>
          Ask about Wellbeing
        </Text>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.askAboutGlobal, styles.askAboutGlobalTypo]}>
          Ask about Global Experience
        </Text>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.askAboutTimetables, styles.askTypo]}>
          Ask about Graduation
        </Text>
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={styles.askAboutCourses}>Ask about Fees and Finance</Text>
      </View>
      <View style={[styles.iphone1415ProMax1Item, styles.groupPosition]} />
      <Text style={styles.connectd}>Connectd.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 42,
    width: 200,
    left: 103,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    position: "absolute",
  },
  askTypo: {
    left: 17,
    top: 7,
    height: 28,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  askAboutGlobalTypo: {
    left: "50%",
    top: 7,
    height: 28,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  text: {
    marginTop: -6,
    left: 30,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_base,
    top: "50%",
    position: "absolute",
  },
  mobileSignalIcon: {
    marginTop: -1.5,
    right: 69,
    width: 18,
    height: 10,
  },
  wifiIcon: {
    marginTop: -3,
    right: 49,
    width: 15,
    height: 11,
  },
  batteryIcon: {
    marginTop: -4,
    right: 16,
    width: 27,
    height: 13,
  },
  statusBar: {
    top: 4,
    right: 30,
    left: 25,
    height: 44,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_200,
    top: 0,
    left: 0,
    height: 42,
    width: 200,
  },
  askAboutEnrollment: {
    top: 6,
    left: 20,
    height: 28,
    width: 166,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupWrapper: {
    top: 0,
    left: 0,
    height: 42,
    width: 200,
  },
  iphone1415ProMax1Inner: {
    top: 170,
  },
  askAboutCourses: {
    left: 26,
    top: 7,
    height: 28,
    width: 210,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iphone1415ProMax1Child: {
    top: 246,
  },
  askAboutTimetables: {
    width: 166,
    left: 17,
  },
  rectangleContainer: {
    top: 474,
  },
  bookAnAppointment: {
    marginLeft: -80,
    width: 200,
  },
  groupView: {
    top: 550,
  },
  askAboutWellbeing: {
    width: 178,
  },
  rectangleParent1: {
    top: 626,
  },
  askAboutGlobal: {
    marginLeft: -69,
    width: 138,
  },
  rectangleParent2: {
    top: 702,
  },
  rectangleParent3: {
    top: 398,
  },
  rectangleParent4: {
    top: 322,
  },
  iphone1415ProMax1Item: {
    top: 60,
    backgroundColor: "#d9d9d9",
    width: 406,
    height: 62,
  },
  connectd: {
    top: 80,
    left: 138,
    fontSize: 24,
    width: 130,
    height: 40,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 30,
    position: "absolute",
    
  },
  iphone1415ProMax1: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Menu;
