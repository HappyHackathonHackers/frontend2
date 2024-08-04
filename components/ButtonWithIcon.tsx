import * as React from "react";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ButtonWithIcon = () => {
  return (
    <View style={styles.buttonWithIcon}>
      <View style={styles.continueWithGoogleParent}>
        <Text style={[styles.continueWithGoogle, styles.googlePosition]}>
          Continue with Google
        </Text>
        <Image
          style={[styles.socialIconGoogle, styles.googlePosition]}
          contentFit="cover"
          source={require("../assets/social-icon--google.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  googlePosition: {
    top: 0,
    position: "absolute",
  },
  continueWithGoogle: {
    left: 34,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  socialIconGoogle: {
    left: 0,
    width: 20,
    overflow: "hidden",
    height: 20,
  },
  continueWithGoogleParent: {
    width: 202,
    height: 20,
  },
  buttonWithIcon: {
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 353,
    paddingLeft: Padding.p_lgi,
    paddingTop: Padding.p_mid,
    paddingRight: Padding.p_108xl,
    paddingBottom: Padding.p_mid,
  },
});

export default ButtonWithIcon;
