import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const banks = [
  { name: "Chase", url: "https://logo.clearbit.com/chase.com" },
  { name: "Bank of America", url: "https://logo.clearbit.com/bankofamerica.com" },
  { name: "Wells Fargo", url: "https://logo.clearbit.com/wellsfargo.com" },
  { name: "Citi", url: "https://logo.clearbit.com/citi.com" },
  { name: "HSBC", url: "https://logo.clearbit.com/hsbc.com" },
  { name: "Capital One", url: "https://logo.clearbit.com/capitalone.com" },
];

const SelectBankScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Link New Bank Account</Text>
      <Text style={styles.subtext}>Please search for your bank account or institution in order to proceed.</Text>

      {/* Scrollable List of Banks */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {banks.map((bank, index) => (
          <TouchableOpacity
            key={index}
            style={styles.bankCard}
            onPress={() => navigation.navigate("BankLinkedSuccessScreen")}
          >
            <Image source={{ uri: bank.url }} style={styles.bankLogo} />
            <Text style={styles.bankText}>{bank.name}</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="gray" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, paddingTop: 20 },
  scrollContainer: { flexGrow: 1, paddingBottom: 20 },
  header: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  subtext: { fontSize: 14, color: "#666", textAlign: "center", marginBottom: 20 },
  bankCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  bankLogo: { width: 40, height: 40, borderRadius: 20, marginRight: 15 },
  bankText: { flex: 1, fontSize: 16, fontWeight: "500" },
});

export default SelectBankScreen;
