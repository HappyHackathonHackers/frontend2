import * as React from "react";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ButtonPrimary = () => {
  return (
    <View style={styles.buttonPrimary}>
      <Text style={styles.button}>Button</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  buttonPrimary: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    width: 353,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
  },
});

export default ButtonPrimary;
