import React, { useState } from "react";
<<<<<<< HEAD
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

=======
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, CheckBox } from "react-native";
import { Ionicons } from "@expo/vector-icons";
>>>>>>> e6530eae2b707fbb7e7621e081908c62cdf311a0

const AuthenticationScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
<<<<<<< HEAD
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
=======
      <Image 
  source={{ uri: "https://png.pngtree.com/png-clipart/20230423/original/pngtree-modern-finance-investment-logo-png-image_9077777.png" }} 
  style={{ width: 100, height: 100 }} 
/>
>>>>>>> e6530eae2b707fbb7e7621e081908c62cdf311a0

      {/* Title */}
      <Text style={styles.heading}>Sign In to Alvestor</Text>

      {/* Email Input */}
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

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* Remember Me Checkbox */}
      <View style={styles.checkboxContainer}>
<<<<<<< HEAD
        <Checkbox
=======
        <CheckBox
>>>>>>> e6530eae2b707fbb7e7621e081908c62cdf311a0
          value={rememberMe}
          onValueChange={setRememberMe}
          tintColors={{ true: "orange", false: "#888" }}
        />
        <Text style={styles.checkboxText}>Remember for 30 days</Text>
      </View>

      {/* Sign In Button */}
<<<<<<< HEAD
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate("NameScreen")}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>Create New Account</Text>
      </TouchableOpacity>
=======
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

     {/* Create Account Button */}
<TouchableOpacity 
  style={styles.createAccountButton} 
  onPress={() => navigation.navigate("ProfileSetup")}
>
  <Text style={styles.createAccountText}>Create New Account</Text>
</TouchableOpacity>

>>>>>>> e6530eae2b707fbb7e7621e081908c62cdf311a0

      {/* Forgot Password Link */}
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
  <Text style={styles.forgotPassword}>Forgot Password?</Text>
</TouchableOpacity>


      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f0e1", padding: 20 },
  logo: { width: 80, height: 80, marginBottom: 20 },
  heading: { fontSize: 22, fontWeight: "bold", color: "#333", marginBottom: 20 },
  inputContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", borderRadius: 10, paddingHorizontal: 15, width: "100%", height: 50, marginBottom: 15 },
  icon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16, color: "#333" },
  checkboxContainer: { flexDirection: "row", alignItems: "center", width: "100%", marginBottom: 20 },
  checkboxText: { marginLeft: 10, color: "#555" },
  signInButton: { backgroundColor: "orange", paddingVertical: 12, width: "100%", borderRadius: 8, alignItems: "center", marginBottom: 10 },
  buttonText: { color: "#000", fontWeight: "bold", fontSize: 16 },
  createAccountButton: { borderColor: "orange", borderWidth: 1, paddingVertical: 12, width: "100%", borderRadius: 8, alignItems: "center", marginBottom: 10 },
  createAccountText: { color: "orange", fontWeight: "bold", fontSize: 16 },
  forgotPassword: { color: "orange", fontSize: 14, textDecorationLine: "underline", marginBottom: 20 },
  backText: { color: "#333", fontSize: 16 },
});

export default AuthenticationScreen;
