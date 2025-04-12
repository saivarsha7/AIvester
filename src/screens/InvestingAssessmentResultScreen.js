import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";  // ✅ Import useNavigation

const InvestingAssessmentResultScreen = () => {
  const navigation = useNavigation();  // ✅ Initialize navigation

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Investing Assessment Result</Text>

      {/* Circular Chart Placeholder */}
      <View style={styles.chartPlaceholder}>
        <Text style={{ color: "#666" }}>[Chart Here]</Text>
      </View>

      {/* Investor Type */}
      <Text style={styles.investorType}>Investor Type: <Text style={{ fontWeight: "bold" }}>Moderate</Text></Text>
      <Text style={styles.percentageScore}>Score: 75%</Text>

      {/* Description */}
      <Text style={styles.descriptionTitle}>Balanced Portfolio Growth with Steady Returns</Text>
      <Text style={styles.description}>
        Based on your responses, you are a moderate investor, which means you prefer a balanced approach 
        between growth and stability. Your portfolio will have a mix of stocks, bonds, and cash.
      </Text>

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("InvestingStrategyRecommendationScreen")}  // ✅ Fix navigation
      >
        <Text style={styles.continueButtonText}>See Investment Strategy</Text>
      </TouchableOpacity>

      {/* Additional Info Link */}
      <TouchableOpacity>
        <Text style={styles.infoLink}>Where do we get this score?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5", justifyContent: "center" },
  heading: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  chartPlaceholder: { width: 200, height: 200, backgroundColor: "#ddd", alignSelf: "center", justifyContent: "center", alignItems: "center", borderRadius: 100, marginBottom: 15 },
  investorType: { fontSize: 18, textAlign: "center", marginTop: 10 },
  percentageScore: { fontSize: 16, textAlign: "center", color: "#666", marginBottom: 20 },
  descriptionTitle: { fontSize: 16, fontWeight: "bold", textAlign: "center", marginBottom: 5 },
  description: { fontSize: 14, textAlign: "center", color: "#666", marginBottom: 20 },
  continueButton: { backgroundColor: "#ff6600", padding: 15, borderRadius: 10, alignItems: "center", marginBottom: 10 },
  continueButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  infoLink: { textAlign: "center", color: "#ff6600", fontSize: 14, fontWeight: "bold" },
});

export default InvestingAssessmentResultScreen;
