import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const Play = () => {
  return (
    <View style={styles.main}>
      <View style={styles.c1}>
        <Image
          style={styles.img}
          source={require("../assets/images/zcop.jpeg")}
        />
        <View style={styles.tC}>
          <View>
            <Text style={styles.t1}>MAYABINI</Text>
            <Text style={styles.t1}>Zubeen Garg</Text>
          </View>
          <FontAwesome style={{ color: "white", fontSize: 20 }} name="heart" />
        </View>
        <Slider
          style={{ width: 300, height: 40, marginTop: 20 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          
        />
        <View style={styles.time}>
          <Text style={{color:'white'}}>1:03</Text>
          <Text style={{color:'white'}}>-4:47</Text>
        </View>
        <View style={styles.icons}>
<FontAwesome name='play' style={{color:'white', fontSize:40}}/>
        </View>
      </View>
    </View>
  );
};

export default Play;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "crimson",
    flex:1
  },
  c1: {
    marginTop: 100,
    margin: 2,
    padding: 2,
    alignItems: "center",
  },
  img: {
    height: 300,
    width: 300,
  },
  tC: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 170,
    alignItems: "center",
  },
  t1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  time:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    gap:230
  },
  icons:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between'
  }
});
