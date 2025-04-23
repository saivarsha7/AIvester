import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const InvestmentSetupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Text */}
      <Text style={styles.heading}>Let’s Set Up Your Investment Portfolio</Text>
      <Text style={styles.description}>
        We’ll guide you through setting up your investment strategy for a secure financial future.
      </Text>


      {/* Get Started Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("InvestmentSelectionScreen")}  // Replace with actual screen name
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  illustration: {
    width: 250,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff6600",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default InvestmentSetupScreen;
