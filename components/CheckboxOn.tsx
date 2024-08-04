import * as React from "react";

const CheckboxOn = () => {
  return (
    <Image
      style={styles.checkboxOn}
      contentFit="cover"
      source={require("../assets/checkbox--on.png")}
    />
  );
};

const styles = StyleSheet.create({
  checkboxOn: {
    width: 20,
    height: 20,
  },
});

export default CheckboxOn;
