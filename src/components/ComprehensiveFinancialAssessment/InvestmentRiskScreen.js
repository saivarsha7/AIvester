import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider"; // Make sure you installed this package

const InvestmentRiskScreen = ({ navigation }) => {
  const [riskLevel, setRiskLevel] = useState(50); // Default at 50%

  // Determine risk type based on slider value
  const getRiskType = () => {
    if (riskLevel <= 33) return { label: "Low Risk", color: "green", description: "I prefer stable investments." };
    if (riskLevel <= 66) return { label: "Moderate Risk", color: "orange", description: "I’m okay with some market fluctuations." };
    return { label: "High Risk", color: "red", description: "I seek high returns despite volatility." };
  };

  const { label, color, description } = getRiskType();

  return (
    <View style={styles.container}>
      {/* Icon */}
      <Text style={styles.icon}>📈</Text>

      {/* Question */}
      <Text style={styles.question}>What investment risk type do you prefer?</Text>

      {/* Risk Percentage */}
      <Text style={[styles.percentage, { color }]}>{riskLevel}%</Text>

      {/* Slider */}
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={riskLevel}
        onValueChange={setRiskLevel}
        minimumTrackTintColor={color}
        maximumTrackTintColor="#ccc"
        thumbTintColor={color}
      />

      {/* Risk Type Description */}
      <Text style={[styles.riskText, { color }]}>{label}</Text>
      <Text style={styles.description}>{description}</Text>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("AssetSelectionScreen")}      >
        <Text style={styles.continueText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InvestmentRiskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf6e3",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  icon: {
    fontSize: 40,
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  percentage: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  slider: {
    width: "90%",
    height: 40,
  },
  riskText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 30,
  },
  continueButton: {
    backgroundColor: "#ff8c00",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  continueText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
