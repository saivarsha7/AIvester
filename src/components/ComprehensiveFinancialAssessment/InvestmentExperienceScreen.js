import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider"; // Corrected Import

export default function InvestmentExperienceScreen({ navigation }) {
  const [experienceLevel, setExperienceLevel] = useState(2);

  const experienceText = ["Beginner", "Intermediate", "Skilled", "Expert"];
  const experienceColor = ["#FF5733", "#FFC300", "#F7941D", "#4CAF50"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Do you have any investing experience?</Text>

      <Text style={[styles.level, { color: experienceColor[experienceLevel] }]}>
        LEVEL {experienceLevel + 1}
      </Text>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={3}
        step={1}
        value={experienceLevel}
        onValueChange={(value) => setExperienceLevel(value)}
        minimumTrackTintColor={experienceColor[experienceLevel]}
        thumbTintColor={experienceColor[experienceLevel]}
      />

      <Text style={styles.experienceText}>{experienceText[experienceLevel]}</Text>
      <Text style={styles.description}>
        {experienceLevel === 0
          ? "I’m new to investing."
          : "I’ve invested before and I have a great understanding of how it works."}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("InvestmentDurationScreen")}
      >
        <Text style={styles.buttonText}>Next →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  level: { fontSize: 20, fontWeight: "bold", textAlign: "center" },
  slider: { marginVertical: 20, width: "100%" },
  experienceText: { fontSize: 18, fontWeight: "bold", textAlign: "center" },
  description: { fontSize: 14, textAlign: "center", marginVertical: 10 },
  button: { backgroundColor: "#F7941D", padding: 15, borderRadius: 10, marginTop: 20, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18 },
});
