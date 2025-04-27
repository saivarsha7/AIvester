import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MarketMovers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Market Movers</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Top Gainers</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MarketMovers;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 8,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterButton: {
    backgroundColor: "#333",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  filterText: {
    color: "#fff",
    fontSize: 14,
  },
});
