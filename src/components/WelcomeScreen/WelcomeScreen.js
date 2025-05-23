import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

console.log("WelcomeScreen Loaded!");

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../../../assets/logo.jpg")} // Relative path to the assets folder
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
            <Ionicons name="checkmark-circle" size={20} color="#FFA500" />
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

      {/* Temporary button to navigate to GeminiChatScreen */}
      <TouchableOpacity
        style={{ ...styles.getStartedButton, backgroundColor: 'blue', marginTop: 10 }}
        onPress={() => navigation.navigate('GeminiChatScreen')}
      >
        <Text style={styles.getStartedText}>Go to Gemini Chat</Text>
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
    backgroundColor: "#fff", // White background for a light theme
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333", // Dark text for good contrast
    marginBottom: 10,
    textAlign: "center",
  },
  mainHeading: {
    fontSize: 18,
    color: "#555", // Medium gray for the main heading
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  subHeading: {
    fontSize: 14,
    color: "#777", // Lighter gray for the subheading
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
    fontSize: 16,
    color: "#333", // Dark text for better readability
  },
  getStartedButton: {
    backgroundColor: "#FFA500", // Orange button color
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 10,
  },
  getStartedText: {
    color: "#fff", // White text for button
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    color: "#FFA500", // Orange text for login link
    fontSize: 14,
    textDecorationLine: "underline",
    marginTop: 10,
  },
});

export default WelcomeScreen;
