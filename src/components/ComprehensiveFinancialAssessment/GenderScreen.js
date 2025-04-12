import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export default function GenderScreen({ navigation }) {
  const [selectedGender, setSelectedGender] = useState(null);
  const [customGender, setCustomGender] = useState("");

  const handleContinue = () => {
    if (selectedGender) {
      navigation.navigate("DOBScreen", { gender: selectedGender, customGender });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What’s your official gender?</Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[styles.option, selectedGender === "Male" && styles.selectedOption]}
          onPress={() => setSelectedGender("Male")}
        >
          <Text style={[styles.optionText, selectedGender === "Male" && styles.selectedOptionText]}>I am Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, selectedGender === "Female" && styles.selectedOption]}
          onPress={() => setSelectedGender("Female")}
        >
          <Text style={[styles.optionText, selectedGender === "Female" && styles.selectedOptionText]}>I am Female</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, selectedGender === "Other" && styles.selectedOption]}
          onPress={() => setSelectedGender("Other")}
        >
          <Text style={[styles.optionText, selectedGender === "Other" && styles.selectedOptionText]}>I am Other (Specify)</Text>
        </TouchableOpacity>

        {selectedGender === "Other" && (
          <TextInput
            style={styles.input}
            placeholder="Specify your gender here..."
            value={customGender}
            onChangeText={setCustomGender}
          />
        )}

        <TouchableOpacity
          style={[styles.option, selectedGender === "Prefer not to say" && styles.selectedOption]}
          onPress={() => setSelectedGender("Prefer not to say")}
        >
          <Text style={[styles.optionText, selectedGender === "Prefer not to say" && styles.selectedOptionText]}>
            Prefer not to say, thanks
          </Text>
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, !selectedGender && styles.disabledButton]}
        onPress={handleContinue}
        disabled={!selectedGender}
      >
        <Text style={styles.buttonText}>Continue →</Text>
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
  optionsContainer: {
    marginBottom: 20,
  },
  option: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#F7941D",
    borderColor: "#F7941D",
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
  selectedOptionText: {
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  continueButton: {
    backgroundColor: "#F7941D",
    padding: 15,
    borderRadius: 10,
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
