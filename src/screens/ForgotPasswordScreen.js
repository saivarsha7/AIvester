import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      {/* Title */}
      <Text style={styles.heading}>Forgot Password</Text>

      {/* Instructional Text */}
      <Text style={styles.instructionText}>
        Enter your email address, and we’ll send you instructions to reset your password.
      </Text>

      {/* Email Input Field */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Send Instructions Button */}
      <TouchableOpacity style={styles.sendButton} onPress={() => navigation.navigate("PasswordResetSentScreen")}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      {/* Back to Sign In Link */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        
        <Text style={styles.backText}>Remember? ← Go Back to Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f0e1", padding: 20 },
  logo: { width: 80, height: 80, marginBottom: 20 },
  heading: { fontSize: 22, fontWeight: "bold", color: "#333", marginBottom: 10 },
  instructionText: { fontSize: 14, color: "#666", textAlign: "center", marginBottom: 20 },
  inputContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", borderRadius: 10, paddingHorizontal: 15, width: "100%", height: 50, marginBottom: 15 },
  icon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16, color: "#333" },
  sendButton: { backgroundColor: "orange", paddingVertical: 12, width: "100%", borderRadius: 8, alignItems: "center", marginBottom: 10 },
  buttonText: { color: "#000", fontWeight: "bold", fontSize: 16 },
  backText: { color: "orange", fontSize: 16, textDecorationLine: "underline" },
});

export default ForgotPasswordScreen;
