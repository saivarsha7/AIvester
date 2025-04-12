import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileSetupScreen = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: "Financial Assessment", description: "Start your financial assessment" },
    { id: 2, title: "Profile & Security Setup", description: "Secure your account & add details" },
    { id: 3, title: "Receive Insights & Start Investing", description: "Get AI-driven investment insights" },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.navigate("Home"); // Redirect after last step
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.heading}>Next, Let’s Setup Profile & Account Security.</Text>
      <Text style={styles.subtext}>Input your personal details in a few minutes.</Text>

      {/* Stepper */}
      <View style={styles.stepper}>
        {steps.map((step, index) => (
          <View key={step.id} style={styles.stepContainer}>
            <View style={[styles.stepCircle, currentStep >= step.id && styles.activeStep]}>
              {currentStep > step.id ? (
                <Ionicons name="checkmark" size={18} color="white" />
              ) : (
                <Text style={styles.stepNumber}>{step.id}</Text>
              )}
            </View>
            <View>
              <Text style={[styles.stepTitle, currentStep === step.id && styles.activeText]}>
                {step.title}
              </Text>
              <Text style={styles.stepDescription}>{step.description}</Text>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("PersonalDetails")}>
  <Text style={styles.buttonText}>Continue →</Text>
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f0e1", padding: 20 },
  heading: { fontSize: 22, fontWeight: "bold", color: "#333", textAlign: "center", marginBottom: 10 },
  subtext: { fontSize: 16, color: "#666", textAlign: "center", marginBottom: 30 },

  // Stepper styles
  stepper: { width: "100%", marginBottom: 40 },
  stepContainer: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  activeStep: { backgroundColor: "orange", borderColor: "orange" },
  stepNumber: { fontSize: 14, fontWeight: "bold", color: "orange" },
  stepTitle: { fontSize: 16, fontWeight: "bold", color: "#666" },
  activeText: { color: "orange" },
  stepDescription: { fontSize: 14, color: "#888" },

  // Continue Button
  continueButton: { backgroundColor: "orange", paddingVertical: 12, width: "100%", borderRadius: 8, alignItems: "center" },
  continueText: { color: "#000", fontWeight: "bold", fontSize: 16 },
});

export default ProfileSetupScreen;
