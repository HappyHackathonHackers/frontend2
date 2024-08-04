import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";
import { StackNavigatorParamList } from "./type"; 
import { StackNavigationProp } from '@react-navigation/stack';

type ChatBotScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;

interface Props {
  navigation: ChatBotScreenNavigationProp;
}

const Chatbot2 = ({navigation}) => {
  return (
    <View style={styles.chatbot}>
      <View style={[styles.topNavBar, styles.messagesPosition]}>
        <View style={styles.leftContent}>
          <Pressable
            onPress={() => navigation.goBack()}
          >
            <Image
            style={[styles.categoriesIconButton, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/categories-icon-button.png")}
            />
          </Pressable>
          <View style={styles.fitbot}>
            <Image
              style={[styles.categoriesIconButton, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/avatar1.png")}
            />
            <View style={styles.nameActivity}>
              <Text style={styles.connectdbot}>ConnectdBot</Text>
              <View style={styles.alwaysActive}>
                <Image
                  style={styles.alwaysActiveChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-12.png")}
                />
                <Text style={[styles.alwaysActive1, styles.wed821AmTypo]}>
                  Always active
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.categoriesIconButton, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/categories-icon-button1.png")}
        />
      </View>
      <View style={[styles.messages, styles.messagesPosition]}>
        <View style={[styles.botMessage, styles.statusBarPosition1]}>
          <View style={styles.messageFromBot}>
            <Text style={[styles.wed821Am, styles.wed821AmTypo]}>
              Wed 8:21 AM
            </Text>
            <View style={styles.message}>
              <Image
                style={styles.messageChild}
                contentFit="cover"
                source={require("../assets/frame-2107.png")}
              />
              <View style={styles.textBox}>
                <Text
                  style={[styles.helloImConnectdbot, styles.typeAMessageTypo]}
                >
                  Hello, I’m ConnectdBot! 👋 I’m your student connect assistant.
                  How can I help you?
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.option, styles.inputSpaceBlock]}>
            <Text style={styles.askAboutEnrollment}>Ask about Enrollment</Text>
          </View>
          <View style={[styles.option, styles.inputSpaceBlock]}>
            <Text style={styles.askAboutEnrollment}>Ask about Courses</Text>
          </View>
          <View style={[styles.option, styles.inputSpaceBlock]}>
            <Text style={styles.askAboutEnrollment}>
              Ask about Fees and Finance
            </Text>
          </View>
          <View style={[styles.option, styles.inputSpaceBlock]}>
            <Text style={styles.askAboutEnrollment}>Ask about Graduation</Text>
          </View>
          <View style={[styles.option, styles.inputSpaceBlock]}>
            <Text style={styles.askAboutEnrollment}>Ask about Timetables</Text>
          </View>
          <View style={[styles.option, styles.inputSpaceBlock]}>
            <Text style={styles.askAboutEnrollment}>Book an appointment</Text>
          </View>
        </View>
      </View>
      <View style={styles.sendAMessagePrompt}>
        <View style={styles.sendMessageInput}>
          <View style={[styles.input, styles.inputSpaceBlock]}>
            <Text style={[styles.typeAMessage, styles.typeAMessageTypo]}>
              Type a message...
            </Text>
            <Image
              style={styles.hiconLinearMicrophone1}
              contentFit="cover"
              source={require("../assets/hicon--linear--microphone-1.png")}
            />
          </View>
          <View style={[styles.categoriesIconButton2, styles.iconLayout]}>
            <Image
              style={[styles.backgroundIcon, styles.statusBarPosition1]}
              contentFit="cover"
              source={require("../assets/background.png")}
            />
            <Image
              style={styles.sentIcon}
              contentFit="cover"
              source={require("../assets/sent1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <Text style={[styles.text, styles.iconPosition]}>9:41</Text>
        <Image
          style={[styles.mobileSignalIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mobile-signal1.png")}
        />
        <Image
          style={[styles.wifiIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={[styles.batteryIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/battery1.png")}
        />
      </View>
      <Image
        style={[styles.homeIndicatorIcon, styles.statusBarPosition]}
        contentFit="cover"
        source={require("../assets/home-indicator1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  messagesPosition: {
    left: 24,
    position: "absolute",
  },
  iconLayout: {
    width: 44,
    height: 44,
  },
  wed821AmTypo: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  statusBarPosition1: {
    left: 0,
    top: 0,
  },
  typeAMessageTypo: {
    fontFamily: FontFamily.dMSansRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  inputSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  statusBarPosition: {
    right: 0,
    position: "absolute",
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  categoriesIconButton: {
    height: 44,
  },
  connectdbot: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  alwaysActiveChild: {
    width: 8,
    height: 8,
  },
  alwaysActive1: {
    marginLeft: 4,
    color: Color.colorGray_100,
  },
  alwaysActive: {
    marginTop: 2,
    alignItems: "center",
    flexDirection: "row",
  },
  nameActivity: {
    marginLeft: 12,
  },
  fitbot: {
    marginLeft: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  leftContent: {
    flexDirection: "row",
  },
  topNavBar: {
    top: 60,
    width: 327,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  wed821Am: {
    color: Color.colorGray_100,
  },
  messageChild: {
    width: 32,
    height: 32,
  },
  helloImConnectdbot: {
    color: Color.colorDarkslategray_100,
    flex: 1,
  },
  textBox: {
    borderTopRightRadius: Border.br_5xl,
    borderBottomRightRadius: Border.br_5xl,
    borderBottomLeftRadius: Border.br_5xl,
    backgroundColor: Color.colorWhitesmoke_100,
    padding: Padding.p_base,
    marginLeft: 8,
    flexDirection: "row",
    flex: 1,
  },
  message: {
    width: 345,
    marginTop: 8,
    flexDirection: "row",
  },
  messageFromBot: {
    alignItems: "center",
  },
  askAboutEnrollment: {
    color: Color.colorRoyalblue_100,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  option: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorAliceblue,
    paddingHorizontal: Padding.p_base,
    marginTop: 16,
  },
  botMessage: {
    alignItems: "flex-end",
    position: "absolute",
  },
  messages: {
    top: 128,
    width: 351,
    height: 754,
  },
  typeAMessage: {
    color: Color.colorGray_100,
  },
  hiconLinearMicrophone1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  input: {
    borderRadius: Border.br_29xl,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray,
    borderWidth: 1.5,
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  backgroundIcon: {
    height: 44,
    width: 44,
    position: "absolute",
  },
  sentIcon: {
    top: 9,
    left: 12,
    width: 25,
    height: 25,
    position: "absolute",
  },
  categoriesIconButton2: {
    marginLeft: 16,
    height: 44,
  },
  sendMessageInput: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  sendAMessagePrompt: {
    top: 704,
    left: 14,
    borderBottomLeftRadius: Border.br_29xl,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_13xl,
    width: 375,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    marginTop: -6,
    left: 30,
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_base,
    top: "50%",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 16,
    textAlign: "left",
  },
  mobileSignalIcon: {
    marginTop: -1.5,
    right: 69,
    width: 18,
    height: 10,
  },
  wifiIcon: {
    marginTop: -3,
    right: 49,
    width: 15,
    height: 11,
  },
  batteryIcon: {
    marginTop: -4,
    right: 16,
    width: 27,
    height: 13,
  },
  statusBar: {
    left: 0,
    top: 0,
    height: 44,
    backgroundColor: Color.colorWhite,
  },
  homeIndicatorIcon: {
    bottom: 0,
    height: 34,
    width: 375,
  },
  chatbot: {
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Chatbot2;
