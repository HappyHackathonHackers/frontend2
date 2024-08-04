import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";
import { StackNavigatorParamList } from "./type"; 
import { StackNavigationProp } from '@react-navigation/stack';
import { useState, useRef } from "react";

type ChatBotScreenNavigationProp = StackNavigationProp<StackNavigatorParamList>;

interface Props {
  navigation: ChatBotScreenNavigationProp;
}

const Chatbot = ({navigation}) => {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<string[]>([]);
  const [chatbotMessages, setChatbotMessages] = useState<string[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);

  async function callApi(message: string) {
    const requestBody = {
        input: message
    };

    try {
        const response = await fetch('http://127.0.0.1:8000/llama/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Response:', data);
            setChatbotMessages([...chatbotMessages, data.response.message.content]);
            scrollViewRef.current?.scrollToEnd({ animated: true });
        } else {
            throw new Error('API call failed with status ' + response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
  }

  const handleSend = () => {
    callApi(message);
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  const refreshPage = () => {
    const currentRoute = navigation.getState().routes[navigation.getState().index];
    navigation.reset({
      index: 0,
      routes: [{ name: currentRoute.name }],
    });
  };

  return (
    <View style={styles.screen3}>
      <View style={[styles.topNavBar, styles.messagesPosition]}>
        <View style={styles.leftContent}>
          <Pressable
            onPress={() => refreshPage()}
          >
            <Image
              style={[styles.categoriesIconButton, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/favicon.png")}
            />
          </Pressable>
          <View style={styles.fitbot}>
            <Image
              style={[styles.categoriesIconButton, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/avatar.png")}
            />
            <View style={styles.nameActivity}>
              <Text style={styles.connectbot}>ConnectdBot</Text>
              <View style={styles.alwaysActive}>
                <Image
                  style={styles.alwaysActiveChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-12.png")}
                />
                <Text style={[styles.alwaysActive1, styles.wed821AmClr]}>
                  Always active
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* <Image
          style={[styles.categoriesIconButton, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/categories-icon-button1.png")}
        /> */}
      </View>
      <ScrollView style={[styles.messages, styles.messagesPosition]} scrollEnabled={true} showsVerticalScrollIndicator={true} ref={scrollViewRef} >
        <View style={[styles.botMessage, styles.botPosition]}>
          <View style={styles.messageFromBot}>
            <Text style={[styles.wed821Am, styles.wed821AmClr]}>
              Wed 8:21 AM
            </Text>
            <View style={styles.message}>
              <Image
                style={styles.messageChild}
                contentFit="cover"
                source={require("../assets/frame-2107.png")}
              />
              <View style={[styles.textBox, styles.textBoxPosition]}>
                <Text
                  style={[styles.helloImConnectbot, styles.showMeOtherTypo]}
                >
                  Hello, I’m ConnectdBot! 👋 I’m your student connect assistant.
                  How can I help you?
                </Text>
              </View>
            </View>
          </View>
          {/* <View style={[styles.option, styles.optionSpaceBlock]}>
            <Pressable onPress={() => navigation.navigate("Chatbot2")}>
              <Text style={styles.giveMeEnrollement}>
                Give me enrollement options in RMIT
              </Text>
            </Pressable>
            
          </View>
          <View style={[styles.option, styles.optionSpaceBlock]}>
            <Text style={styles.giveMeEnrollement}>
              Show me scholarship options in UniMelb
            </Text>
          </View> */}
        </View>
        <View style={[styles.messageContainer]}>
          {messages.map((message, index) => 
            <View>
              <View >
                <Text key={index} style={[styles.myMessage]}>
                  {message}
                </Text>
              </View>
              <View style={styles.message}>
              <Image
                style={styles.messageChild}
                contentFit="cover"
                source={require("../assets/frame-2107.png")}
              />
              <View style={[styles.textBox, styles.textBoxPosition]}>
                <Text
                  key={index} style={[styles.helloImConnectbot, styles.showMeOtherTypo]}
                >
                  {chatbotMessages[index]}
                </Text>
              </View>
            </View>
          </View>
          )}  
        </View>

      </ScrollView>
      <View style={styles.sendAMessagePrompt}>
        <View style={styles.sendMessageInput}>
          <View style={[styles.input, styles.optionSpaceBlock]}>
            <TextInput style={[styles.typeAMessage, styles.showMeOtherTypo]} onChangeText={setMessage} value={message} placeholder="Type a message...">
            </TextInput>
            <Image
              style={styles.hiconLinearMicrophone1}
              contentFit="cover"
              source={require("../assets/hicon--linear--microphone-1.png")}
            />
          </View>
          <View style={[styles.categoriesIconButton2, styles.iconLayout]}>
            <Pressable onPress={handleSend}>
              <Image
                style={styles.backgroundIcon}
                contentFit="cover"
                source={require("../assets/background.png")}
              />
              <Image
                style={styles.sentIcon}
                contentFit="cover"
                source={require("../assets/sent.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messagesPosition: {
    left: 24,
    width: 327,
    position: "absolute",
  },
  iconLayout: {
    width: 44,
    height: 44,
  },
  wed821AmClr: {
    color: Color.colorGray_100,
    textAlign: "left",
  },
  botPosition: {
    alignItems: "flex-end",
    left: 0,
    position: "absolute",
  },
  textBoxPosition: {
    padding: Padding.p_base,
    borderBottomLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    flexDirection: "row",
  },
  showMeOtherTypo: {
    fontFamily: FontFamily.dMSansRegular,
    lineHeight: 24,
    fontSize: FontSize.size_base,
  },
  optionSpaceBlock: {
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
  connectbot: {
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
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
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
    justifyContent: "space-between",
    flexDirection: "row",
    width: 327,
  },
  wed821Am: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_100,
  },
  messageChild: {
    width: 32,
    height: 32,
  },
  helloImConnectbot: {
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    flex: 1,
  },
  textBox: {
    borderBottomRightRadius: Border.br_5xl,
    backgroundColor: Color.colorWhitesmoke_100,
    marginLeft: 8,
    flex: 1,
  },
  message: {
    marginTop: 8,
    flexDirection: "row",
    width: 327,
  },
  messageFromBot: {
    alignItems: "center",
  },
  giveMeEnrollement: {
    color: Color.colorRoyalblue_100,
    lineHeight: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  option: {
    marginTop: 16,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_5xl,
    paddingVertical: Padding.p_3xs,
  },
  botMessage: {
    top: 0,
  },
  message1: {
    flexDirection: "row",
    width: 327,
  },
  botMessage1: {
    top: 332,
  },
  showMeOther: {
    color: Color.colorWhite,
    textAlign: "center",
  },
  myMessage: {
    marginTop: 16,
    marginLeft: 120,
    backgroundColor: "#f7f7f7",
    padding: 10,
    // width: 200,
    // height: 40,
    textAlign: "right",
    borderRadius: 20,
    borderColor: "black",
    overflow: "hidden",
  },
  messageContainer: {
    marginTop: 125,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    flexGrow: 1,
  },
  option2: {
    top: 398,
    left: 56,
    paddingHorizontal: Padding.p_base,
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_5xl,
    paddingVertical: Padding.p_3xs,
    position: "absolute",
  },
  messages: {
    top: 128,
    height: 1200,
    width: 327,
    flex: 1,
    flexGrow: 1,
  },
  typeAMessage: {
    color: Color.colorGray_100,
    textAlign: "left",
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
    left: 0,
    top: 0,
    height: 44,
    position: "absolute",
  },
  sentIcon: {
    top: 6,
    left: 11,
    width: 30,
    height: 30,
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
    top: 670,
    borderBottomLeftRadius: Border.br_29xl,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_13xl,
    width: 400,
    height: 130,
    left: 0,
    alignItems: "center",
    // position: "absolute",
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  text: {
    marginTop: -6,
    left: 30,
    color: Color.colorGray_300,
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
  screen3: {
    width: "100%",
    height: 1600,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Chatbot;
