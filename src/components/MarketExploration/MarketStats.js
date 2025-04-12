import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MarketStats = () => {
  return (
    <View style={styles.statsContainer}>
      <Text style={styles.statText}>NASDAQ: 14,200 +1.2%</Text>
      <Text style={styles.statText}>S&P 500: 4,300 -0.3%</Text>
      <Text style={styles.statText}>Dow Jones: 33,900 +0.8%</Text>
    </View>
  );
};

export default MarketStats;

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1E1E1E",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  statText: {
    color: "white",
    fontSize: 12,
  },
});
