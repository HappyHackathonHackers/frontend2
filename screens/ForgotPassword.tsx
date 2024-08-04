import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ForgotPassword = () => {
  return (
    <View style={styles.forgotPassword}>
      <Text style={styles.forgotPassword1}>Forgot Password</Text>
      <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
      <Image
        style={styles.forgotPasswordChild}
        contentFit="cover"
        source={require("../assets/star-8.png")}
      />
      <View style={[styles.buttonPrimary, styles.inputFieldFlexBox]}>
        <Text style={[styles.button, styles.logInTypo]}>Forgot Password</Text>
      </View>
      <View style={[styles.input, styles.inputPosition]}>
        <Text style={[styles.title, styles.textTypo]}>Email address</Text>
        <View style={[styles.inputField, styles.inputFieldFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>
            Colette.benton@gmail.com
          </Text>
          <Image
            style={styles.icon}
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
  logInTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_base,
  },
  inputFieldFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderRadius: Border.br_3xs,
  },
  inputPosition: {
    left: 20,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorDarkslategray_200,
  },
  forgotPassword1: {
    top: 145,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 339,
    textAlign: "left",
    color: Color.colorDarkslategray_200,
    left: 20,
    position: "absolute",
  },
  logIn: {
    top: 359,
    left: 172,
    textAlign: "left",
    position: "absolute",
  },
  forgotPasswordChild: {
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
    top: 340,
    backgroundColor: Color.colorDarkslategray_200,
    height: 56,
    justifyContent: "center",
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    left: 20,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_sm,
    lineHeight: 18,
  },
  text: {
    lineHeight: 20,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  inputField: {
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_lg,
    marginTop: 6,
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
    width: 353,
    borderRadius: Border.br_3xs,
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
    top: 222,
  },
  forgotPassword: {
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default ForgotPassword;
