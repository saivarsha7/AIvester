import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const brandLogos = [
  require("../../../assets/starbucks.png"),
  require("../../../assets/tesla.png"),
  require("../../../assets/apple.jpeg"),
  require("../../../assets/coca_cola.png"),
  require("../../../assets/intel.png"),
  require("../../../assets/charles_schwab.png"),
  require("../../../assets/adidas.png"),
  require("../../../assets/mcdonalds.png"),
  require("../../../assets/uber.png"),
  require("../../../assets/nike.png"),
  require("../../../assets/microsoft.jpeg"),
  require("../../../assets/netflix.png"),
  require("../../../assets/google.png"),
  require("../../../assets/walmart.png"),
  require("../../../assets/ibm.png"),
  require("../../../assets/amazon.png"),
  require("../../../assets/nvidia.png"),
  require("../../../assets/meta.png"),
];

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.mainHeading}>
          Invest in over <Text style={styles.highlight}>3,500</Text> Global Stocks & ETFs
        </Text>
        <Text style={styles.subHeading}>
          Options for everyone, from beginner to pros. Start with as little as $1.
        </Text>

        <FlatList
          data={brandLogos}
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Image source={item} style={styles.logoSmall} />}
          contentContainerStyle={styles.logoContainer}
        />

        <View style={styles.progressContainer}>
          <View style={[styles.progressDot, styles.activeDot]} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate("Authentication")}
        >
          <Text style={styles.continueText}>Continue →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F9", // Lighter background color
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    paddingHorizontal: 20,
  },
  content: {
    alignItems: "center", // Keep content centered horizontally
    width: "100%", // Ensures content occupies the full width of the container
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Dark gray for text
    textAlign: "center",
    marginBottom: 10,
  },
  highlight: {
    color: "#FF6F00", // Warm orange color for highlight
  },
  subHeading: {
    fontSize: 16,
    color: "#555", // Light gray for subheading
    textAlign: "center",
    marginBottom: 15, // Reduced margin to make the gap smaller
    paddingHorizontal: 10,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 15, // Reduced margin to bring logos closer to the bottom
  },
  logoSmall: {
    width: 50,
    height: 50,
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#E0E0E0", // Light gray background for logos
  },
  progressContainer: {
    flexDirection: "row",
    marginTop: 20, // Reduced the top margin of progress dots
    marginBottom: 15, // Reduced the bottom margin
  },
  progressDot: {
    width: 10,
    height: 10,
    backgroundColor: "#D0D0D0", // Light gray for inactive dots
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#FF6F00", // Highlight color for active dot
  },
  continueButton: {
    backgroundColor: "#FF6F00", // Button with warm orange
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20, // Reduced margin between the progress dots and button
  },
  continueText: {
    color: "#FFFFFF", // White text for the button
    fontWeight: "bold",
    fontSize: 18,
  },
});
