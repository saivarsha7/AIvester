import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";

const companyLogos = [
  { id: "1", uri: "https://logo.clearbit.com/apple.com" },
  { id: "2", uri: "https://logo.clearbit.com/tesla.com" },
  { id: "3", uri: "https://logo.clearbit.com/starbucks.com" },
  { id: "4", uri: "https://logo.clearbit.com/amazon.com" },
  { id: "5", uri: "https://logo.clearbit.com/microsoft.com" },
  { id: "6", uri: "https://logo.clearbit.com/google.com" },
  { id: "7", uri: "https://logo.clearbit.com/facebook.com" },
  { id: "8", uri: "https://logo.clearbit.com/twitter.com" },
  { id: "9", uri: "https://logo.clearbit.com/netflix.com" },
  { id: "10", uri: "https://logo.clearbit.com/adobe.com" },
  { id: "11", uri: "https://logo.clearbit.com/spotify.com" },
  { id: "12", uri: "https://logo.clearbit.com/openai.com" },
];

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Caption */}
      <Text style={styles.heading}>Track Smarter, Invest Better</Text>
      <Text style={styles.subText}>Your AI-Powered Portfolio Partner</Text>

      {/* Company Logos */}
      <FlatList
        data={companyLogos}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.logoGrid}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.logo} />
        )}
      />

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("Authentication")}>
  <Text style={styles.continueText}>Continue →</Text>
</TouchableOpacity>


      {/* Already Have an Account */}
      <TouchableOpacity onPress={() => navigation?.navigate("Login")}>
        <Text style={styles.loginText}>I already have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  subText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  logoGrid: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 10,
  },
  continueButton: {
    backgroundColor: "orange",
    paddingVertical: 12,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  continueText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    color: "orange",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default OnboardingScreen;
