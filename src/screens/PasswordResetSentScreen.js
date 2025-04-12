import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const PasswordResetSentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Illustration Image */}
      <Image source={require("../../assets/password-reset.png")} style={styles.image} />

      {/* Title */}
      <Text style={styles.heading}>Password Reset Sent.</Text>

      {/* Instructional Text */}
      <Text style={styles.instructionText}>
        Please check your email in a few minutes - we’ve sent you an email containing password recovery link.
      </Text>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("Authentication")}>
        <Text style={styles.buttonText} >Continue</Text>
      </TouchableOpacity>

      {/* Help Text */}
      <Text style={styles.helpText}>Don’t remember your email?</Text>

      {/* Contact Support */}
      <TouchableOpacity>
        <Text style={styles.contactText}>Contact us at <Text style={{ fontWeight: "bold" }}>help@finpal.ai</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#131313", padding: 20 },
  image: { width: 250, height: 150, marginBottom: 20, resizeMode: "contain" },
  heading: { fontSize: 22, fontWeight: "bold", color: "#fff", marginBottom: 10 },
  instructionText: { fontSize: 14, color: "#ccc", textAlign: "center", marginBottom: 20 },
  continueButton: { backgroundColor: "orange", paddingVertical: 12, width: "90%", borderRadius: 8, alignItems: "center", marginBottom: 15 },
  buttonText: { color: "#000", fontWeight: "bold", fontSize: 16 },
  helpText: { color: "#ccc", fontSize: 14, marginBottom: 5 },
  contactText: { color: "orange", fontSize: 14, textDecorationLine: "underline" },
});

export default PasswordResetSentScreen;
