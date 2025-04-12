import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddBankAccount = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: "investing", label: "Investing", status: "Not Setup", icon: "trending-up-outline" },
    { id: "credit", label: "Credit", status: "Check Info", icon: "card-outline" },
    { id: "savings", label: "Savings", status: "Value Range", icon: "wallet-outline" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Text style={styles.header}>Let’s link or add your bank account.</Text>
        <Text style={styles.subText}>
          Let’s get a full picture of your finances with your account in one single place.
        </Text>

        {/* Banking Categories */}
        {categories.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.card, selectedCategory === item.id && styles.selectedCard]}
            onPress={() => setSelectedCategory(item.id)}
          >
            <Ionicons name={item.icon} size={28} color="#666" />
            <View style={styles.cardText}>
              <Text style={styles.cardLabel}>{item.label}</Text>
              <Text style={styles.cardStatus}>{item.status}</Text>
            </View>
            {selectedCategory === item.id && <Ionicons name="checkmark-circle" size={24} color="orange" />}
          </TouchableOpacity>
        ))}

        {/* Security Assurance */}
        <Text style={styles.securityText}>
          Your account is completely secure with our bank-grade encryption technology.
        </Text>
      </ScrollView>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("SelectBankScreen")}>
        <Text style={styles.buttonText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContainer: { padding: 20, alignItems: "center" },
  header: { fontSize: 22, fontWeight: "bold", color: "#333", marginBottom: 10, textAlign: "center" },
  subText: { fontSize: 14, color: "#666", marginBottom: 20, textAlign: "center" },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 12,
  },
  selectedCard: { borderWidth: 2, borderColor: "orange" },
  cardText: { flex: 1, marginLeft: 10 },
  cardLabel: { fontSize: 16, fontWeight: "bold", color: "#333" },
  cardStatus: { fontSize: 14, color: "#666" },
  securityText: { fontSize: 12, color: "#777", marginTop: 20, textAlign: "center" },
  continueButton: {
    backgroundColor: "orange",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonText: { color: "#000", fontWeight: "bold", fontSize: 16 },
});

export default AddBankAccount;
