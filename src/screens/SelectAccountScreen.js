import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

const initialAccounts = [
  {
    bank: "Chase",
    type: "Checking Account - Individual",
    balance: "$5,400.00",
    logo: "https://logo.clearbit.com/chase.com",
  },
  {
    bank: "Bank of America",
    type: "Savings Account - Joint",
    balance: "$12,300.00",
    logo: "https://logo.clearbit.com/bankofamerica.com",
  },
];

const SelectAccountScreen = () => {
  const navigation = useNavigation(); // Use navigation
  const [manualEntry, setManualEntry] = useState(false);
  const [accountHolder, setAccountHolder] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [accountType, setAccountType] = useState("");
  const [balance, setBalance] = useState("");
  const [accounts, setAccounts] = useState(initialAccounts);

  // Function to add a manual account
  const handleAddAccount = () => {
    if (!accountHolder || !accountNumber || !ifscCode || !accountType || !balance) {
      alert("Please fill all fields before adding an account.");
      return;
    }

    const newAccount = {
      bank: accountHolder,
      type: `${accountType} - Manual Entry`,
      balance: `$${parseFloat(balance).toFixed(2)}`,
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bank_font_awesome.svg",
    };

    setAccounts([...accounts, newAccount]);
    setManualEntry(false);
    setAccountHolder("");
    setAccountNumber("");
    setIfscCode("");
    setAccountType("");
    setBalance("");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.header}>Select Account</Text>
        <Text style={styles.subtext}>
          Please choose an account you’ll not spend from, for easier tracking.
        </Text>

        {/* Existing & Added Accounts */}
        {accounts.map((account, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.accountCard}
            onPress={() => navigation.navigate("PasswordSetupScreen")} // Navigate to Password Setup
          >
            <Image source={{ uri: account.logo }} style={styles.bankLogo} />
            <View style={styles.accountInfo}>
              <Text style={styles.bankName}>{account.bank}</Text>
              <Text style={styles.accountType}>{account.type}</Text>
            </View>
            <Text style={styles.balance}>{account.balance}</Text>
          </TouchableOpacity>
        ))}

        {/* Add Account Manually */}
        {!manualEntry ? (
          <TouchableOpacity style={styles.addAccountButton} onPress={() => setManualEntry(true)}>
            <Text style={styles.addAccountText}>+ Add Account Manually</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.manualForm}>
            <TextInput
              style={styles.input}
              placeholder="Account Holder Name"
              value={accountHolder}
              onChangeText={setAccountHolder}
            />
            <TextInput
              style={styles.input}
              placeholder="Account Number"
              keyboardType="numeric"
              value={accountNumber}
              onChangeText={setAccountNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="IFSC Code"
              value={ifscCode}
              onChangeText={setIfscCode}
            />
            <TextInput
              style={styles.input}
              placeholder="Account Type (Savings/Checking)"
              value={accountType}
              onChangeText={setAccountType}
            />
            <TextInput
              style={styles.input}
              placeholder="Total Balance"
              keyboardType="numeric"
              value={balance}
              onChangeText={setBalance}
            />

            {/* ADD ACCOUNT BUTTON */}
            <TouchableOpacity style={styles.saveButton} onPress={handleAddAccount}>
              <Text style={styles.saveButtonText}>Add Account</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  scrollContainer: { flexGrow: 1, paddingBottom: 50 }, // Ensures scrolling for entire page
  header: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  subtext: { fontSize: 14, color: "#666", textAlign: "center", marginBottom: 20 },
  accountCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  bankLogo: { width: 40, height: 40, borderRadius: 20, marginRight: 15 },
  accountInfo: { flex: 1 },
  bankName: { fontSize: 16, fontWeight: "bold" },
  accountType: { fontSize: 14, color: "#666" },
  balance: { fontSize: 16, fontWeight: "bold", color: "#333" },
  addAccountButton: { marginTop: 15, padding: 15, backgroundColor: "#f5f5f5", borderRadius: 10 },
  addAccountText: { fontSize: 16, textAlign: "center", color: "#ff6600" },
  manualForm: { marginTop: 20 },
  input: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  saveButton: { 
    backgroundColor: "#ff6600", 
    padding: 15, 
    borderRadius: 10, 
    marginTop: 20, // Adds spacing
  },
  saveButtonText: { textAlign: "center", color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default SelectAccountScreen;
