import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MarketIndexes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Market Indexes</Text>
      <View style={styles.mapContainer}>
        <Image
          source={require("../../../assets/world_map.png")} // Ensure you have an image for the map
          style={styles.mapImage}
        />
        <View style={styles.indexBox}>
          <Text style={styles.indexText}>S&P 500</Text>
          <Text style={styles.indexValue}>4,500.75</Text>
          <Text style={styles.indexChange}>+0.82%</Text>
        </View>
      </View>
    </View>
  );
};

export default MarketIndexes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffff",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  mapContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  mapImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  indexBox: {
    position: "absolute",
    backgroundColor: "#fffff",
    padding: 10,
    borderRadius: 5,
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  indexText: {
    color: "white",
    fontWeight: "bold",
  },
  indexValue: {
    color: "lightgreen",
  },
  indexChange: {
    color: "#f39c12",
  },
});
