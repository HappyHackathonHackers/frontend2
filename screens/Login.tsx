import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Login = ({navigation}) => {
  return (
    <View style={styles.openningScreen}>
      <Image
        style={styles.illustrationIcon}
        contentFit="cover"
        source={require("../assets/illustration.png")}
      />
      <View style={styles.text}>
        <Text style={styles.connectd}>CONNECTD</Text>
        <Text style={styles.needHelpAsk}>
          Need help? Ask your questions here and we’ll guide you through it.
        </Text>
      </View>
      <View style={[styles.buttonPrimary, styles.buttonFlexBox]}>
        <Pressable
          onPress={() => navigation.navigate("LogIn2")}
        >
          <Text style={[styles.button, styles.buttonTypo]}>
            Log In with University Email
          </Text>
        </Pressable>
        
      </View>
      <View style={[styles.buttonPrimary1, styles.buttonFlexBox]}>
        <Text style={[styles.button1, styles.buttonTypo]}>Guest Account</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_133xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 56,
    width: 353,
    borderRadius: Border.br_3xs,
    left: 20,
    position: "absolute",
  },
  buttonTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  illustrationIcon: {
    top: 130,
    width: 316,
    height: 273,
    left: 37,
    position: "absolute",
  },
  connectd: {
    top: 0,
    left: 69,
    fontSize: 32,
    letterSpacing: -0.3,
    lineHeight: 42,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "left",
    color: Color.colorDarkslategray_200,
    position: "absolute",
  },
  needHelpAsk: {
    top: 60,
    left: 0,
    fontSize: 17,
    lineHeight: 21,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_400,
    textAlign: "center",
    width: 319,
    position: "absolute",
  },
  text: {
    top: 472,
    height: 102,
    width: 319,
    left: 37,
    position: "absolute",
  },
  button: {
    color: Color.colorWhite,
  },
  buttonPrimary: {
    top: 642,
    backgroundColor: Color.colorDarkslategray_200,
  },
  button1: {
    color: Color.colorDarkslategray_200,
  },
  buttonPrimary1: {
    top: 718,
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_200,
    borderWidth: 1,
  },
  openningScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Login;
