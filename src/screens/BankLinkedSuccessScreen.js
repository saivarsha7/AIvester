import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BankLinkedSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Success Icon */}
      <Ionicons name="checkmark-circle" size={100} color="green" style={styles.successIcon} />

      {/* Title */}
      <Text style={styles.title}>Great work! Your account is linked up.</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Let’s set up your first account to make investment action as easy as 1, 2, 3.
      </Text>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("SelectAccountScreen")}>
        <Text style={styles.buttonText}>Continue →</Text>
      </TouchableOpacity>

      {/* Link More Accounts */}
      <TouchableOpacity onPress={() => navigation.navigate("SelectBankScreen")}>
        <Text style={styles.linkText}>Link more account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5", padding: 20 },
  successIcon: { marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", color: "#333", marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: "center", color: "#666", marginBottom: 30 },
  continueButton: { backgroundColor: "orange", paddingVertical: 15, paddingHorizontal: 40, borderRadius: 8 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  linkText: { marginTop: 15, color: "blue", fontSize: 14 },
});

export default BankLinkedSuccessScreen;
