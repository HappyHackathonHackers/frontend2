import * as React from "react";

const SocialIconMail = () => {
  return (
    <Image
      style={styles.socialIconMail}
      contentFit="cover"
      source={require("../assets/social-icon--mail1.png")}
    />
  );
};

const styles = StyleSheet.create({
  socialIconMail: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
});

export default SocialIconMail;
