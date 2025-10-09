import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Stack } from 'expo-router';



export default function HomeScreen() {
  const navigation=useRouter();

  const navigateToPlay=()=>{
    navigation.push("/player");
  }

  return (
    <View style={styles.main_container}>
      <View style={styles.containerNew}>
        <Text style={styles.text1}>Recently Played</Text>
        <View style={styles.icon}>
          <FontAwesome style={{ color: "white", fontSize: 20 }} name="bell" />
          <FontAwesome
            style={{ color: "white", fontSize: 40 }}
            name="history"
          />
          <FontAwesome style={{ color: "white", fontSize: 20 }} name="cog" />
        </View>
      </View>

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
          source={require("../../assets/images/gunsroses-hed-2016.png.webp")}
        />
      </View>

      {/* Second Row */}
      <View style={styles.row2}>
        <Image
          style={styles.img2}
          source={require("../../assets/images/main.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text2}>Spotify Wrapped</Text>
          <Text style={styles.text3}>Your 2025 in Review</Text>
        </View>
      </View>

      <View style={styles.container3}>
        <View style={styles.container4}>
          <Image
            style={styles.img3}
            source={require("../../assets/images/zcop.jpeg")}
          />
          <Text style={styles.text4}>Your Artist Revealed</Text>
        </View>
        <View style={styles.container4}>
          <Image
            style={styles.img3}
            source={require("../../assets/images/up-ccopy-.jpeg")}
          />
          <Text style={styles.text4}>Your Top Songs 2025</Text>
        </View>
      </View>

      <View style={styles.container5}>
        <Text style={styles.text1}>Editor's Pick</Text>
        <View style={styles.row}>
          <Image
            style={styles.img4}
            source={require("../../assets/images/albumcop.jpeg")}
          />
          <Image
            style={styles.img4}
            source={require("../../assets/images/4.jpeg")}
          />
          <Image
            style={styles.img4}
            source={require("../../assets/images/Untitled-1cop.jpeg")}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.c1} onPress={navigateToPlay} >
        <View style={styles.c2}>
          <Image
            style={styles.img5}
            source={require("../../assets/images/zcop.jpeg")}
        
          />
          <View style={styles.ci1}>
            <Text style={styles.text4}>Mayabini - Zubeen Garg</Text>
            <Text style={styles.text4}>JBL TUNE760NC</Text>
          </View>
        </View>
        <View style={styles.ci2}>
          <FontAwesome
            style={{ color: "white", fontSize: 20 }}
            name="bluetooth"
          />
          <FontAwesome style={{ color: "white", fontSize: 20 }} name="pause" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 70,
    marginHorizontal: 20,
  },
  containerNew: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  text1: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
    color: "white",
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
    gap: 10,
  },
  text2: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },
  text3: {
    fontSize: 25,
    color: "white",
  },
  img3: {
    height: 150,
    width: 150,
  },
  container3: {
    marginTop: 30,
    flexDirection: "row",
    gap: 10,
  },
  container4: {
    gap: 5,
  },
  text4: {
    color: "white",
  },
  container5: {
    marginTop: 20,
  },
  img4: {
    height: 100,
    width: 100,
  },
  c1: {
    marginTop: 30,
    backgroundColor: "crimson",
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",
  },
  c2: {
    flexDirection: "row",
    gap: 8,
  },
  img5: {
    height: 40,
    width: 40,
  },
  ci1: {
    flexDirection: "column",
    gap: 4,
  },
  ci2: {
    flexDirection: "row",
    gap: 8,
    marginRight:5
  },
});
