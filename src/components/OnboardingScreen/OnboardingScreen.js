import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";


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
      {/* Heading */}
      <Text style={styles.mainHeading}>
        Invest in over <Text style={styles.highlight}>3,500</Text> Global Stocks & ETFs
      </Text>
      <Text style={styles.subHeading}>
        Options for everyone, from beginner to pros. Start with as little as $1.
      </Text>

      {/* Brand Logos */}
      <FlatList
        data={brandLogos}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={item} style={styles.logo} />
        )}
        contentContainerStyle={styles.logoContainer}
      />

      {/* Progress Indicator */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressDot, styles.activeDot]} />
        <View style={styles.progressDot} />
        <View style={styles.progressDot} />
        <View style={styles.progressDot} />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={()=>navigation.navigate("Authentication")}>
        <Text style={styles.continueText}>Continue →</Text>
      </TouchableOpacity>

      {/* Already have an account */}
      <TouchableOpacity>
        <Text style={styles.loginText}>I already have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    alignItems: "center",
  },
  mainHeading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 30,
  },
  highlight: {
    color: "orange",
  },
  subHeading: {
    fontSize: 14,
    color: "#aaa",
    textAlign: "center",
    marginVertical: 10,
  },
  logoContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#1E1E1E",
    padding: 10,
  },
  progressContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  progressDot: {
    width: 10,
    height: 10,
    backgroundColor: "#444",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "orange",
  },
  continueButton: {
    backgroundColor: "orange",
    padding: 12,
    width: "80%",
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 10,
  },
  continueText: {
    color: "#121212",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    color: "orange",
    fontSize: 14,
    marginTop: 10,
  },
});
