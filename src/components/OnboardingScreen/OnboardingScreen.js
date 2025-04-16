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

const companyLogos = [
  { id: "1", uri: "https://logo.clearbit.com/apple.com" },
  { id: "2", uri: "https://logo.clearbit.com/tesla.com" },
  { id: "3", uri: "https://logo.clearbit.com/starbucks.com" },
  { id: "4", uri: "https://logo.clearbit.com/amazon.com" },
  { id: "5", uri: "https://logo.clearbit.com/microsoft.com" },
  { id: "6", uri: "https://logo.clearbit.com/google.com" },
  { id: "7", uri: "https://logo.clearbit.com/facebook.com" },
  { id: "8", uri: "https://logo.clearbit.com/twitter.com" },
  { id: "9", uri: "https://logo.clearbit.com/netflix.com" },
  { id: "10", uri: "https://logo.clearbit.com/adobe.com" },
  { id: "11", uri: "https://logo.clearbit.com/spotify.com" },
  { id: "12", uri: "https://logo.clearbit.com/openai.com" },
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
        renderItem={({ item }) => <Image source={item} style={styles.logoSmall} />}
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
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("Authentication")}
      >
        <Text style={styles.continueText}>Continue →</Text>
      </TouchableOpacity>

      {/* Caption */}
      <Text style={styles.heading}>Track Smarter, Invest Better</Text>
      <Text style={styles.subText}>Your AI-Powered Portfolio Partner</Text>

      {/* Company Logos */}
      <FlatList
        data={companyLogos}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.logoGrid}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.logoLarge} />
        )}
      />

      {/* Continue Button Again */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("Authentication")}
      >
        <Text style={styles.continueText}>Continue →</Text>
      </TouchableOpacity>

      {/* Already Have an Account */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
  logoSmall: {
    width: 50,
    height: 50,
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#1E1E1E",
    padding: 10,
  },
  logoLarge: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 10,
  },
  logoGrid: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
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
    paddingVertical: 12,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  continueText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
  subText: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 20,
  },
  loginText: {
    color: "orange",
    fontSize: 14,
    marginTop: 10,
    textDecorationLine: "underline",
  },
});
