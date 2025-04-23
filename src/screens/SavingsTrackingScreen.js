import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Slider from "@react-native-community/slider";
import { ProgressChart } from "react-native-chart-kit";

const SavingsTrackingScreen = ({ navigation }) => {
  const [savingsPercentage, setSavingsPercentage] = useState(25);

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

      {/* Chart with center percentage */}
      <View style={styles.chartWrapper}>
        <ProgressChart
          data={{ data: [savingsPercentage / 100] }}
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
        <Text style={styles.percentageText}>{savingsPercentage}%</Text>
      </View>

      <Text style={styles.helperText}>I save {savingsPercentage}% of my income.</Text>

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

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("IndustrySelectionScreen", { savingsPercentage })}
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
    paddingBottom: 60,
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
  chartWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  percentageText: {
    position: "absolute",
    fontSize: 28,
    fontWeight: "bold",
    color: "green",
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
