import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const LogIn2 = ({navigation}) => {
  return (
    <View style={styles.logIn1}>
      {/* <Pressable onPress={() => navigation.navigate("Chatbot")}>
        <Text style={[styles.logIn, styles.logInClr]}>Log In</Text>
      </Pressable> */}
      <Text style={[styles.forgotPassword, styles.titleTypo]}>
        Forgot password?
      </Text>
      <Text style={[styles.logIn2, styles.logIn2Typo]}>Log in</Text>
      <Image
        style={styles.logIn1Child}
        contentFit="cover"
        source={require("../assets/star-8.png")}
      />
      <View style={styles.buttonPrimary}>
        <Pressable onPress={() => navigation.navigate("Main")}>
          <Text style={[styles.button, styles.logIn2Typo]}>Log in</Text>
        </Pressable>
      </View>
      <View style={[styles.input, styles.inputPosition]}>
        <Text style={styles.titleTypo}>Password</Text>
        <View style={[styles.inputField, styles.inputBorder]}>
          <Text style={[styles.text, styles.textTypo]}>Your email</Text>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <Image
        style={styles.logIn1Item}
        contentFit="cover"
        source={require("../assets/group-36690.png")}
      />
      <View style={[styles.input1, styles.inputPosition]}>
        <Text style={styles.titleTypo}>Email address</Text>
        <View style={[styles.inputField1, styles.inputBorder]}>
          <Text style={[styles.text1, styles.textTypo]}>
            Colette.benton@student.rmit.edu.au
          </Text>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logInClr: {
    color: Color.colorDarkslategray_200,
    textAlign: "left",
  },
  titleTypo: {
    fontFamily: FontFamily.interRegular,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorDarkslategray_200,
  },
  logIn2Typo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_base,
  },
  inputPosition: {
    left: 20,
    position: "absolute",
  },
  inputBorder: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    marginTop: 6,
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    lineHeight: 20,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    flex: 1,
  },
  iconLayout: {
    marginLeft: 10,
    height: 20,
    width: 20,
  },
  logIn: {
    top: 145,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 339,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  forgotPassword: {
    top: 419,
    left: 254,
    position: "absolute",
  },
  logIn2: {
    top: 494,
    left: 172,
    textAlign: "left",
    position: "absolute",
  },
  logIn1Child: {
    top: 47,
    left: 320,
    width: 46,
    height: 44,
    position: "absolute",
  },
  button: {
    textAlign: "center",
  },
  buttonPrimary: {
    top: 475,
    backgroundColor: Color.colorDarkslategray_200,
    height: 56,
    justifyContent: "center",
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderRadius: Border.br_3xs,
    left: 20,
    position: "absolute",
  },
  text: {
    color: Color.colorGray_500,
    textAlign: "right",
    display: "none",
  },
  icon: {
    overflow: "hidden",
  },
  inputField: {
    justifyContent: "flex-end",
    marginTop: 6,
  },
  error: {
    fontSize: FontSize.size_smi,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorCrimson,
    display: "none",
    marginTop: 6,
    textAlign: "left",
  },
  input: {
    top: 324,
  },
  logIn1Item: {
    top: 373,
    left: 36,
    width: 76,
    height: 6,
    position: "absolute",
  },
  text1: {
    textAlign: "left",
    color: Color.colorDarkslategray_200,
  },
  inputField1: {
    marginTop: 6,
  },
  input1: {
    top: 222,
  },
  logIn1: {
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default LogIn2;
