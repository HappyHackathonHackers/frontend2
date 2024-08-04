import * as React from "react";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const ButtonSecondary = () => {
  return (
    <View style={styles.buttonSecondary}>
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
    color: Color.colorBlack,
    textAlign: "center",
  },
  buttonSecondary: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: "#747474",
    borderWidth: 1,
    width: 353,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
  },
});

export default ButtonSecondary;
