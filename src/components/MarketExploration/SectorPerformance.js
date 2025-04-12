import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SectorPerformance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sector Performance</Text>
      <View style={styles.cardContainer}>
        {/* Electronics Stocks Card */}
        <View style={styles.card}>
          <Icon name="shopping-cart" size={24} color="white" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Electronics Stocks</Text>
            <Text style={styles.lossText}>-0.67% last week</Text>
          </View>
        </View>

        {/* Technology Card */}
        <View style={styles.card}>
          <Icon name="microchip" size={24} color="white" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Technology</Text>
            <Text style={styles.gainText}>+4.85% this week</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SectorPerformance;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1e1e",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#2a2a2a",
    padding: 15,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  cardTextContainer: {
    marginLeft: 10,
  },
  cardTitle: {
    color: "#ccc",
    fontSize: 14,
  },
  lossText: {
    color: "#ff4d4d",
    fontSize: 13,
    marginTop: 5,
  },
  gainText: {
    color: "#4caf50",
    fontSize: 13,
    marginTop: 5,
  },
});
