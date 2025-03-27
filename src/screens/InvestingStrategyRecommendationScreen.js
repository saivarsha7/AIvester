import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const InvestingStrategyRecommendationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.innerContainer}>
          {/* Header */}
          <Text style={styles.heading}>Our Investing Strategy Recommendation</Text>
          <Text style={styles.subtext}>Jennifer, here is our investing strategy recommendation based on your assessment.</Text>

          {/* Investing Strategy */}
          <View style={styles.chartContainer}>
            <Text style={styles.chartPlaceholder}>[Chart Here]</Text>
          </View>
          <Text style={styles.investorType}>Moderate Investor</Text>
          <Text style={styles.strategyDescription}>
            Mix of bonds, cash, and stocks for balanced long-term growth.
          </Text>

          {/* Recommended Holdings */}
          <Text style={styles.sectionTitle}>Recommended Holdings</Text>
          <View style={styles.holdingsContainer}>
            <Text style={styles.holdingItem}>V (Visa) - $230.68 (+2.3%)</Text>
            <Text style={styles.holdingItem}>AAPL (Apple) - $175.85 (+1.8%)</Text>
          </View>

          {/* Portfolio Projection */}
          <Text style={styles.sectionTitle}>Portfolio Projection</Text>
          <View style={styles.chartContainer}>
            <Text style={styles.chartPlaceholder}>[Graph Here]</Text>
          </View>
          <Text style={styles.projectionText}>$1,320,000 USD</Text>

        </View>
      </ScrollView>

      {/* Continue Button (ALWAYS VISIBLE) */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.continueButton} 
          onPress={() => navigation.navigate("InvestmentSetup")}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { 
    flex: 1, 
    backgroundColor: "#f5f5f5" 
  },
  scrollView: { 
    flex: 1, 
    backgroundColor: "#f5f5f5" 
  },
  contentContainer: { 
    flexGrow: 1, 
    paddingHorizontal: 20, 
    paddingTop: 20 
  },
  innerContainer: {
    flexGrow: 1, 
    justifyContent: "space-between" // Ensures proper layout
  },
  heading: { 
    fontSize: 22, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 10 
  },
  subtext: { 
    fontSize: 14, 
    color: "#666", 
    textAlign: "center", 
    marginBottom: 15 
  },
  chartContainer: { 
    alignItems: "center", 
    marginBottom: 15 
  },
  chartPlaceholder: { 
    backgroundColor: "#ddd", 
    width: 200, 
    height: 200, 
    textAlign: "center", 
    lineHeight: 200, 
    borderRadius: 100 
  },
  investorType: { 
    fontSize: 18, 
    fontWeight: "bold", 
    textAlign: "center" 
  },
  strategyDescription: { 
    fontSize: 14, 
    color: "#666", 
    textAlign: "center", 
    marginBottom: 20 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  holdingsContainer: { 
    backgroundColor: "#fff", 
    padding: 10, 
    borderRadius: 10, 
    marginBottom: 15 
  },
  holdingItem: { 
    fontSize: 16, 
    paddingVertical: 5 
  },
  projectionText: { 
    fontSize: 20, 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 20 
  },
  buttonContainer: { 
    padding: 15, 
    backgroundColor: "#f5f5f5", 
    borderTopWidth: 1, 
    borderColor: "#ddd",
    alignItems: "center" 
  },
  continueButton: { 
    backgroundColor: "#ff6600", 
    padding: 15, 
    borderRadius: 10, 
    alignItems: "center", 
    width: "90%" 
  },
  continueButtonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
});

export default InvestingStrategyRecommendationScreen;
