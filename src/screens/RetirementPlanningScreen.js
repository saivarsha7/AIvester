import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RetirementPlanningScreen({ navigation }) {
  const [amount, setAmount] = useState(0);

  const increaseAmount = () => {
    setAmount(prevAmount => prevAmount + 1000);
  };

  const decreaseAmount = () => {
    if (amount > 0) {
      setAmount(prevAmount => prevAmount - 1000);
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Icons */}
      <View style={styles.iconBar}>
        <TouchableOpacity onPress={() => navigation.navigate("HomesAndActivitiesScreen")}>
          <Ionicons name="home-outline" size={28} color="#FFA500" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("InvestmentSelectionScreen")}>
          <Ionicons name="trending-up-outline" size={28} color="#FFA500" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <Text style={styles.heading}>
        How much total asset do you need to achieve your retirement goal?
      </Text>

      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={decreaseAmount} style={styles.adjustButton}>
          <Text style={styles.adjustText}>-</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          value={`$${amount.toLocaleString()}.00`}
          editable={false}
        />

        <TouchableOpacity onPress={increaseAmount} style={styles.adjustButton}>
          <Text style={styles.adjustText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.helperText}>I need ${amount.toLocaleString()}.00</Text>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("SavingsTrackingScreen")}
      >
        <Text style={styles.continueText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EFE6",
    padding: 20,
    paddingTop: 50,
  },
  iconBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  adjustButton: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  adjustText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    minWidth: 120,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  helperText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
  },
  continueButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "center",
  },
  continueText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
