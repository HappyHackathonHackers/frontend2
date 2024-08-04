import * as React from "react";

const SocialIconGoogle = () => {
  return (
    <Image
      style={styles.socialIconGoogle}
      contentFit="cover"
      source={require("../assets/social-icon--google2.png")}
    />
  );
};

const styles = StyleSheet.create({
  socialIconGoogle: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
});

export default SocialIconGoogle;
