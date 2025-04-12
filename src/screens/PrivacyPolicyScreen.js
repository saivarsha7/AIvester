// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   CheckBox,
//   StyleSheet,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const PrivacyPolicyScreen = () => {
//   const navigation = useNavigation();
//   const [agreePrivacy, setAgreePrivacy] = useState(false);
//   const [agreeTerms, setAgreeTerms] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Your Data is Secure With Us. Always Secure.</Text>

//       {/* Illustration Placeholder */}
//       <View style={styles.illustration}>
//         <Text style={styles.illustrationText}>🖊️ [Illustration Here]</Text>
//       </View>

//       <Text style={styles.subtext}>
//         Any information you give to us is secured in line with our{" "}
//         <Text style={styles.link}>Terms & Conditions</Text> and{" "}
//         <Text style={styles.link}>Privacy Policy</Text>. Please read them first.
//       </Text>

//       {/* Checkboxes */}
//       <View style={styles.checkboxContainer}>
//         <CheckBox value={agreePrivacy} onValueChange={setAgreePrivacy} />
//         <Text>I agree to Privacy Policy</Text>
//       </View>

//       <View style={styles.checkboxContainer}>
//         <CheckBox value={agreeTerms} onValueChange={setAgreeTerms} />
//         <Text>I agree to Terms & Conditions</Text>
//       </View>

//       {/* Continue Button */}
//       <TouchableOpacity
//         style={[styles.button, agreePrivacy && agreeTerms ? styles.activeButton : styles.disabledButton]}
//         disabled={!agreePrivacy || !agreeTerms}
//         onPress={() => navigation.navigate("InvestingAssessmentResultScreen")}// Navigate to next step
//       >
//         <Text style={styles.buttonText}>Continue</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#f5f5f5", padding: 20, justifyContent: "center", alignItems: "center" },
//   heading: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
//   illustration: { width: 150, height: 150, backgroundColor: "#fff", justifyContent: "center", alignItems: "center", marginBottom: 20 },
//   illustrationText: { color: "#666" },
//   subtext: { fontSize: 14, textAlign: "center", marginBottom: 20, color: "#666" },
//   link: { color: "#FFA500", fontWeight: "bold" },
//   checkboxContainer: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
//   button: { padding: 15, borderRadius: 8, marginTop: 20, width: "100%", alignItems: "center" },
//   activeButton: { backgroundColor: "#FFA500" },
//   disabledButton: { backgroundColor: "#ddd" },
//   buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
// });

// export default PrivacyPolicyScreen;


import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation();
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Data is Secure With Us. Always Secure.</Text>

      <View style={styles.illustration}>
        <Text style={styles.illustrationText}>🖊️ [Illustration Here]</Text>
      </View>

      <Text style={styles.subtext}>
        Any information you give to us is secured in line with our{" "}
        <Text style={styles.link}>Terms & Conditions</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>. Please read them first.
      </Text>

      {/* Privacy Checkbox */}
      <TouchableOpacity
        style={styles.customCheckbox}
        onPress={() => setAgreePrivacy(!agreePrivacy)}
      >
        <Text>{agreePrivacy ? "✅" : "⬜️"}</Text>
        <Text style={styles.checkboxLabel}>I agree to Privacy Policy</Text>
      </TouchableOpacity>

      {/* Terms Checkbox */}
      <TouchableOpacity
        style={styles.customCheckbox}
        onPress={() => setAgreeTerms(!agreeTerms)}
      >
        <Text>{agreeTerms ? "✅" : "⬜️"}</Text>
        <Text style={styles.checkboxLabel}>I agree to Terms & Conditions</Text>
      </TouchableOpacity>

      {/* Continue Button */}
      <TouchableOpacity
        style={[
          styles.button,
          agreePrivacy && agreeTerms ? styles.activeButton : styles.disabledButton,
        ]}
        disabled={!agreePrivacy || !agreeTerms}
        onPress={() => navigation.navigate("InvestingAssessmentResultScreen")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  illustration: {
    width: 150,
    height: 150,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  illustrationText: {
    color: "#666",
  },
  subtext: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  link: {
    color: "#FFA500",
    fontWeight: "bold",
  },
  customCheckbox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#FFA500",
  },
  disabledButton: {
    backgroundColor: "#ddd",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PrivacyPolicyScreen;
