import * as React from "react";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ButtonWithCenteredIcon = () => {
  return (
    <View style={styles.buttonWithCenteredIcon}>
      <View style={styles.socialIconGoogleParent}>
        <Image
          style={styles.socialIconGoogle}
          contentFit="cover"
          source={require("../assets/social-icon--google1.png")}
        />
        <Text style={styles.google}>Google</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  socialIconGoogle: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  google: {
    fontSize: FontSize.size_sm,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
    marginLeft: 12,
  },
  socialIconGoogleParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonWithCenteredIcon: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 353,
    justifyContent: "center",
    paddingHorizontal: 45,
    paddingVertical: Padding.p_lg,
    alignItems: "center",
  },
});

export default ButtonWithCenteredIcon;
