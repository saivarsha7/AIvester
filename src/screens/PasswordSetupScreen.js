import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PasswordSetupScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Password Validation Checks
  const isLengthValid = password.length >= 8 && password.length <= 16;
  const hasUniqueCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isNotCommon = !["password", "12345678", "qwerty"].includes(password.toLowerCase());

  const allValid = isLengthValid && hasUniqueCharacters && isNotCommon;

  return (
    <View style={styles.container}>
      {/* Security Icon */}
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Lock-icon.svg",
        }}
        style={styles.lockIcon}
      />

      {/* Header */}
      <Text style={styles.header}>Let’s Set Up Your Password</Text>

      {/* Password Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter password..."
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="#999" />
        </TouchableOpacity>
      </View>

      {/* Password Requirements */}
      <View style={styles.requirements}>
        <Text style={isLengthValid ? styles.validText : styles.invalidText}>
          ✅ Password must contain 8–16 characters.
        </Text>
        <Text style={hasUniqueCharacters ? styles.validText : styles.invalidText}>
          ✅ Password must contain unique characters.
        </Text>
        <Text style={isNotCommon ? styles.validText : styles.invalidText}>
          ✅ Password must not be common.
        </Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, { backgroundColor: allValid ? "#ff6600" : "#ccc" }]}
        disabled={!allValid}
        onPress={() => navigation.navigate("PrivacyPolicyScreen")} // Change to your next screen
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20, alignItems: "center" },
  lockIcon: { width: 80, height: 80, marginBottom: 20, tintColor: "#ff6600" },
  header: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "100%",
    height: 50,
    marginBottom: 15,
  },
  input: { flex: 1, fontSize: 16 },
  requirements: { alignSelf: "flex-start", marginBottom: 20 },
  validText: { color: "green", fontSize: 14, marginBottom: 5 },
  invalidText: { color: "red", fontSize: 14, marginBottom: 5 },
  continueButton: { padding: 15, borderRadius: 10, width: "100%", alignItems: "center" },
  continueButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});

export default PasswordSetupScreen;
