import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function DOBScreen({ navigation }) {
  const [dob, setDob] = useState("");

  const handleNext = () => {
    if (dob.trim() !== "") {
      navigation.navigate("InvestmentExperienceScreen", { dob });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your Date of Birth</Text>

      <TextInput
        style={styles.input}
        placeholder="DD/MM/YYYY"
        keyboardType="numeric"
        value={dob}
        onChangeText={setDob}
      />

      {/* Next Button */}
      <TouchableOpacity 
        style={[styles.button, !dob.trim() && styles.disabledButton]} 
        onPress={handleNext}
        disabled={!dob.trim()}
      >
        <Text style={styles.buttonText}>Next →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#F7941D",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
