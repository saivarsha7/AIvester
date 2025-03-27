import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Slider from "@react-native-community/slider";

const InvestmentDurationScreen = ({ navigation }) => {
  const [investmentYears, setInvestmentYears] = useState(10);

  return (
    <View style={styles.container}>
      {/* Icon */}
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>📅</Text>
      </View>

      {/* Question */}
      <Text style={styles.question}>
        How long do you plan to keep your investment?
      </Text>

      {/* Slider */}
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={20}
        step={1}
        value={investmentYears}
        minimumTrackTintColor="#ff8c00"
        maximumTrackTintColor="#ccc"
        thumbTintColor="#ff8c00"
        onValueChange={(value) => setInvestmentYears(value)}
      />

      {/* Selected Value */}
      <Text style={styles.selectedValue}>
        {investmentYears} {investmentYears >= 20 ? "+" : ""} years
      </Text>

      {/* Supporting Text */}
      <Text style={styles.supportingText}>Long-term Range</Text>

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("NextScreen")}
      >
        <Text style={styles.continueText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InvestmentDurationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf6e3",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    fontSize: 40,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  slider: {
    width: Dimensions.get("window").width - 60,
    height: 40,
    marginBottom: 20,
  },
  selectedValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff8c00",
  },
  supportingText: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  continueButton: {
    backgroundColor: "#ff8c00",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 30,
  },
  continueText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
