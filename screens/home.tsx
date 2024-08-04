import * as React from "react";
import { Text, StyleSheet, View, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Home = ({navigation}) => {
  
  const [posts, setPosts] = React.useState([]);

  type details = {
    uni: string;
    user: string;
    para: string;
    loc: string;
  }

  const StudentPost = (props: details) => {
    return (
      <View style={styles.post}>
        <Text style={{fontWeight: "bold"}}>u/{props.uni}/{props.user}</Text>
        <Text style={styles.titleTypo}>{props.para}</Text>
        <Text style={styles.typeString}>{props.loc}</Text>
      </View>
    );
  }

  const EventPost = () => {
    return (
        <View style={styles.post}>
            <Text style={{fontWeight: "bold"}}>u/Monash/WIRED</Text>
            <Image style={styles.logIn1Item} contentFit="cover" source={require("../assets/founder.jpeg")} />
            <Text style={styles.titleTypo}>FoundersHack Pitch Night</Text>
            <Text style={styles.titleTypo}>RMIT University, Building 16 (Storey Hall)</Text>
            <Text style={styles.titleTypo}>Melbourne, Victoria</Text>
            <Text style={styles.titleTypo}>Tuesday, 06 August 2024</Text>
        </View>
        );
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.text}>
            Connectd.
        </Text>
      </View>
      <ScrollView>
        <EventPost />
        <StudentPost uni="RMIT" user="Colette" para="I'm looking for a study buddy for COMP248" loc="Building 80, Level 9" />
        <StudentPost uni="Monash" user="James123" para="COSC123 is hell" loc="Monash University, Clayton" />
        <StudentPost uni="UniMelb" user="Clara567" para="I'm hosting a bbq party at my place in the two days, all university students are welcome." loc="University of Melbourne" />
      </ScrollView>
      <Image style={styles.img} contentFit="cover" source={require("../assets/pplus.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
    img: {
        position: "absolute",
        width: 50,
        height: 50,
        bottom: 10,
        right: 10,
        zIndex: 1,
    },
    subcontainer: {
        flex: 0.7,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 0.5,
        zIndex: 1,
    },
    text: {
        fontSize: 20,
        paddingTop: 45,
        fontWeight: "bold",
    },
    logIn1Item: {
        width: 350,
        height: 150,
        borderRadius: 10,
    },
    titleTypo: {
        color: Color.colorDarkslategray_200,
        fontFamily: "Roboto",
        fontWeight: 600,
        fontSize: FontSize.size_sm,
        lineHeight: 18,
        textAlign: "right",
    },
    typeString: {
        color: Color.colorDarkslategray_200,
        fontFamily: "Roboto",
        fontSize: FontSize.size_sm,
        lineHeight: 18,
        textAlign: "right",
        fontWeight: "bold",
    },
    post: {
        padding: 10,
        margin: 10,
        borderWidth: 0.5,
        borderColor: "black",
        borderRadius: 10,
    },
    
});

export default Home;
