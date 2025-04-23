import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // Icon import

const IndustrySelectionScreen = ({ navigation }) => {
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  const industries = [
    "Tech",
    "Healthcare",
    "Energy",
    "Finance",
    "Real Estate",
    "Retail",
    "Automotive",
    "Consumer Goods",
  ];

  const toggleIndustry = (industry) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((item) => item !== industry)
        : [...prev, industry]
    );
  };

  return (
    <View style={styles.container}>
      {/* Icon on Top Right Corner */}
      <TouchableOpacity
        style={styles.topRightIcon}
        onPress={() => navigation.navigate("RetirementPlanningScreen")}
      >
        <Ionicons name="business-outline" size={28} color="#333" />
      </TouchableOpacity>

      {/* Question */}
      <Text style={styles.question}>
        Are there any specific industries that you’d like to focus on?
      </Text>

      {/* Industry Selection Pills */}
      <View style={styles.pillContainer}>
        {industries.map((industry, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.pill,
              selectedIndustries.includes(industry) && styles.selectedPill,
            ]}
            onPress={() => toggleIndustry(industry)}
          >
            <Text
              style={[
                styles.pillText,
                selectedIndustries.includes(industry) && styles.selectedPillText,
              ]}
            >
              {industry}
            </Text>
          </TouchableOpacity>
        ))}

        {/* "I'm unsure at the moment" Option */}
        <TouchableOpacity
          style={[
            styles.pill,
            selectedIndustries.includes("Unsure") && styles.selectedPill,
          ]}
          onPress={() => toggleIndustry("Unsure")}
        >
          <Text
            style={[
              styles.pillText,
              selectedIndustries.includes("Unsure") && styles.selectedPillText,
            ]}
          >
            I’m unsure at the moment
          </Text>
        </TouchableOpacity>
      </View>

      {/* Helper Text */}
      <Text style={styles.helperText}>
        You can always skip and customize this later based on your tracking goals.
      </Text>

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("DebtLevelScreen")}
      >
        <Text style={styles.continueText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IndustrySelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf6e3",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  topRightIcon: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
    marginTop: 80,
  },
  pillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  pill: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    margin: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selectedPill: {
    backgroundColor: "#ff8c00",
    borderColor: "#ff8c00",
  },
  pillText: {
    fontSize: 16,
    color: "#333",
  },
  selectedPillText: {
    color: "#fff",
  },
  helperText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  continueButton: {
    backgroundColor: "#ff8c00",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  continueText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
