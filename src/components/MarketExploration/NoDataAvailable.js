import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NoDataAvailable = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>No currently items are available</Text>
      <Text style={styles.subMessage}>⏳ Please try again later</Text>
    </View>
  );
};

export default NoDataAvailable;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2a2a2a",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  message: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  subMessage: {
    fontSize: 14,
    color: "#f0a500",
  },
});
