import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function InvestmentSelectionScreen() {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleContinue = () => {
    if (selectedOption === "robo") {
      navigation.navigate("AIHomeScreen");
    } else if (selectedOption === "portfolio") {
      navigation.navigate("RetirementPlanningScreen");
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Navigation Icons */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Heading */}
      <Text style={styles.heading}>How do you want to invest?</Text>

      {/* Investment Options */}
      <TouchableOpacity
        style={[
          styles.optionCard,
          selectedOption === "robo" ? styles.selectedCard : null,
        ]}
        onPress={() => {
          setSelectedOption("robo");
          navigation.navigate("AIHomeScreen");
        }}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/11782/11782356.png",
          }}
          style={styles.icon}
        />
        <View>
          <Text style={styles.optionTitle}>Use Robo-Advisors</Text>
          <Text style={styles.optionDescription}>
            Let AI manage your investments automatically.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionCard,
          selectedOption === "portfolio" ? styles.selectedCard : null,
        ]}
        onPress={() => {
          setSelectedOption("portfolio");
          navigation.navigate("RetirementPlanningScreen");
        }}
      >
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/032/328/621/non_2x/portfolio-icon-design-free-png.png",
          }}
          style={styles.icon}
        />
        <View>
          <Text style={styles.optionTitle}>Pick My Own Portfolio</Text>
          <Text style={styles.optionDescription}>
            Choose and manage your own investments.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Continue Button */}
      <TouchableOpacity
        style={[
          styles.continueButton,
          !selectedOption && styles.disabledButton,
        ]}
        onPress={handleContinue}
        disabled={!selectedOption}
      >
        <Text style={styles.continueText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F5EC", // Light beige background
    padding: 20,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedCard: {
    borderColor: "#FFA500",
    backgroundColor: "#FFF5E1",
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  optionDescription: {
    fontSize: 14,
    color: "#666",
  },
  continueButton: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 30,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  continueText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
