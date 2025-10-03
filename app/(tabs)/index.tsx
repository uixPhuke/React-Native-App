import { View, Text, StyleSheet, Image } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.main_container}>
      <Text style={styles.text1}>Recently Played</Text>

      {/* First Row */}
      <View style={styles.row}>
        <Image
          style={styles.img1}
          source={require("../../assets/images/central-cee-20250710.jpg")}
        />
        <Image
          style={styles.img1}
          source={require("../../assets/images/Billie-Eilish-Happier-Than-Ever.jpeg.webp")}
        />
        <Image
          style={styles.img1}
          source={require("../../assets/images/central-cee-20250710.jpg")}
        />
      </View>

      {/* Second Row */}
      <View style={styles.row2}>
        <Image
          style={styles.img2}
          source={require("../../assets/images/central-cee-20250710.jpg")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text2}>Spotify Wrapped</Text>
          <Text style={styles.text3}>Your 2025 in Review</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 100,
    marginHorizontal: 20,
  },
  text1: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between", // even spacing between images
  },
  img1: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    //  justifyContent: "space-between",
    marginTop: 30,
  },
  img2: {
    height: 80,
    width: 80,
    
  },
  textContainer: {
    marginLeft: 15,
    gap:10
  },
  text2: {
    fontSize: 14,
    fontWeight: "500",
  },
  text3:{
    fontSize:30
  }
});
