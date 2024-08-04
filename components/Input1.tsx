import * as React from "react";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Input1 = () => {
  return (
    <View>
      <Text style={[styles.title, styles.textTypo]}>title</Text>
      <View style={styles.inputField}>
        <Text style={[styles.text, styles.textTypo]}>Text</Text>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon2.png")}
        />
      </View>
      <Text style={styles.error}>Error</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  title: {
    fontSize: FontSize.size_sm,
    lineHeight: 18,
    color: Color.colorBlack,
    textAlign: "left",
  },
  text: {
    flex: 1,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    color: Color.colorGray_500,
    textAlign: "left",
  },
  icon: {
    width: 20,
    height: 20,
    overflow: "hidden",
    marginLeft: 10,
  },
  inputField: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 353,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_lg,
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
});

export default Input1;
