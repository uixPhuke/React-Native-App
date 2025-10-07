import { FontAwesome } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";



const Play = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  //
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.main}>
      <View style={styles.c1}>
        <Image
          style={styles.img}
          source={require("../../assets/images/zcop.jpeg")}
        />

        {/* Song Info */}
        <View style={styles.tC}>
          <View>
            <Text style={styles.t1}>MAYABINI</Text>
            <Text style={styles.t1}>Zubeen Garg</Text>
          </View>
          <FontAwesome style={{ color: "white", fontSize: 20 }} name="heart" />
        </View>

        {/* Slider */}
        <Slider
          style={{ width: 300, height: 40, marginTop: 20 }}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />

        {/* Time */}
        <View style={styles.time}>
          <Text style={{ color: "white" }}>1:03</Text>
          <Text style={{ color: "white" }}>-4:47</Text>
        </View>

        {/* Controls */}
        <View style={styles.icons}>
          <FontAwesome name="random" style={{ color: "white", fontSize: 20 }} />
          <FontAwesome name="step-backward" style={{ color: "white", fontSize: 30 }} />

          {/* ✅ Play / Pause Toggle */}
          <TouchableOpacity onPress={togglePlayPause}>
            <FontAwesome
              name={isPlaying ? "pause" : "play"}
              style={{ color: "white", fontSize: 40 }}
            />
          </TouchableOpacity>

          <FontAwesome name="step-forward" style={{ color: "white", fontSize: 30 }} />
          <FontAwesome name="repeat" style={{ color: "white", fontSize: 20 }} />
        </View>

        {/* Bottom section */}
        <View style={styles.bottom}>
          <View style={{ alignItems: "center", flexDirection: "row", gap: 5 }}>
            <FontAwesome name="bluetooth" style={{ fontSize: 15, color: "white" }} />
            <Text style={{ color: "white" }}>JBL TUNE760NC</Text>
          </View>

          <View style={{ alignItems: "center", flexDirection: "row", gap: 30 }}>
            <FontAwesome name="share" style={{ fontSize: 15, color: "white" }} />
            <FontAwesome name="list" style={{ fontSize: 15, color: "white" }} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Play;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "crimson",
    flex: 1,
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
    borderRadius: 10,
  },
  tC: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    alignItems: "center",
  },
  t1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  time: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
  },
  icons: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 300,
  },
  bottom: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
    width: 300,
  },
});
