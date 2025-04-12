import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./WelcomeScreenStyles";
console.log("WelcomeScreen Loaded!");

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{ uri: "https://png.pngtree.com/png-clipart/20230326/original/pngtree-chip-ai-human-intelligence-technology-chip-high-tech-circuit-board-ai-png-image_9004996.png" }} // Use a valid online image
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
<<<<<<< HEAD
      <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate("Onboarding")}>

=======
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation?.navigate("Onboarding")}
      >
>>>>>>> e6530eae2b707fbb7e7621e081908c62cdf311a0
        <Text style={styles.getStartedText}>Get Started →</Text>
      </TouchableOpacity>

      {/* Already have an account */}
      <TouchableOpacity>
        <Text style={styles.loginText}>I already have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
