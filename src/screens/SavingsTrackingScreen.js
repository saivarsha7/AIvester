import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Slider from "@react-native-community/slider";
import { ProgressChart } from "react-native-chart-kit";

const SavingsTrackingScreen = ({ navigation }) => {
  const [savingsPercentage, setSavingsPercentage] = useState(25); // Default 25%

  return (
    <View style={styles.container}>
      {/* Header Icon */}
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>💰</Text>
      </View>

      {/* Question */}
      <Text style={styles.question}>
        How much percentage of your income do you usually save every month?
      </Text>

      {/* Progress Chart */}
      <ProgressChart
        data={{ data: [savingsPercentage / 100] }} // Convert to 0-1 range
        width={Dimensions.get("window").width - 40}
        height={220}
        strokeWidth={12}
        radius={80}
        chartConfig={{
          backgroundGradientFrom: "#fdf6e3",
          backgroundGradientTo: "#fdf6e3",
          color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
          strokeWidth: 2,
        }}
        hideLegend={true}
      />

      {/* Percentage Text */}
      <Text style={styles.percentageText}>{savingsPercentage}%</Text>
      <Text style={styles.helperText}>I save {savingsPercentage}% of my income.</Text>

      {/* Slider to Adjust Percentage */}
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={savingsPercentage}
        onValueChange={(value) => setSavingsPercentage(value)}
        minimumTrackTintColor="green"
        maximumTrackTintColor="gray"
        thumbTintColor="green"
      />

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("InvestmentDuration", { savingsPercentage })}
      >
        <Text style={styles.continueText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SavingsTrackingScreen;

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
  percentageText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "green",
    marginTop: -130,
  },
  helperText: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
  },
  slider: {
    width: "80%",
    marginTop: 20,
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
