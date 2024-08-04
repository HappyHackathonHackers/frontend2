import * as React from "react";

const EyeHide = () => {
  return (
    <Image
      style={styles.eyeHide}
      contentFit="cover"
      source={require("../assets/eye--hide.png")}
    />
  );
};

const styles = StyleSheet.create({
  eyeHide: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
});

export default EyeHide;
