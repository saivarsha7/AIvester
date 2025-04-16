import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

console.log("WelcomeScreen Loaded!");

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{
          uri: "https://png.pngtree.com/png-clipart/20230326/original/pngtree-chip-ai-human-intelligence-technology-chip-high-tech-circuit-board-ai-png-image_9004996.png",
        }}
        style={styles.logo}
      />

      {/* Heading */}
      <Text style={styles.welcomeText}>Welcome To Alvestor!</Text>
      <Text style={styles.mainHeading}>
        Your Smart, AI-Powered Partner for Effortless Investing.
      </Text>
      <Text style={styles.subHeading}>
        Smarter investing made simple—let AI grow your wealth like a pro
      </Text>

      {/* Features List */}
      <View style={styles.featuresList}>
        {[
          "Intelligent Chatbot",
          "Dynamic Investment Portfolio",
          "Explore 4,000 Stocks & ETFs",
          "Goals & Insights",
          "Recurring Investment & More!",
        ].map((item, index) => (
          <View key={index} style={styles.featureItem}>
            <Ionicons name="checkmark-circle" size={20} color="orange" />
            <Text style={styles.featureText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation?.navigate("Onboarding")}
      >
        <Text style={styles.getStartedText}>Get Started →</Text>
      </TouchableOpacity>

      {/* Already have an account */}
      <TouchableOpacity onPress={() => navigation?.navigate("Login")}>
        <Text style={styles.loginText}>I already have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  mainHeading: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  subHeading: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  featuresList: {
    width: "100%",
    marginBottom: 30,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#444",
  },
  getStartedButton: {
    backgroundColor: "orange",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 10,
  },
  getStartedText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    color: "orange",
    fontSize: 14,
    textDecorationLine: "underline",
    marginTop: 10,
  },
});

export default WelcomeScreen;
