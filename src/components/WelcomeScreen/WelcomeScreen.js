import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./WelcomeScreenStyles";
const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />

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
      <TouchableOpacity style={styles.getStartedButton} onPress={()=>NavigationPreloadManager.navigate("Onboarding")}>
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
