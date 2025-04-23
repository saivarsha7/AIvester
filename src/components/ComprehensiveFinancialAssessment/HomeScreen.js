import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Let’s fully set up your account!</Text>
      <Text style={styles.description}>Here’s what we’ll do over the next minutes.</Text>

      {/* Steps Section */}
      <View style={styles.stepsContainer}>
        {/* Step 1 - Active */}
        <View style={styles.stepRow}>
          <View style={styles.activeCircle}>
            <Text style={styles.activeNumber}>1</Text>
          </View>
          <View style={styles.stepTextContainer}>
            <Text style={styles.stepTitle}>Financial Assessment</Text>
            <Text style={styles.stepDescription}>Start with a financial assessment.</Text>
          </View>
        </View>

        {/* Step 2 - Inactive */}
        <View style={styles.stepRow}>
          <View style={styles.inactiveCircle}>
            <Text style={styles.inactiveNumber}>2</Text>
          </View>
          <View style={styles.stepTextContainer}>
            <Text style={styles.inactiveStepTitle}>Profile & Security Setup</Text>
            <Text style={styles.inactiveStepDescription}>Setup your main investment profile.</Text>
          </View>
        </View>

        {/* Step 3 - Inactive */}
        <View style={styles.stepRow}>
          <View style={styles.inactiveCircle}>
            <Text style={styles.inactiveNumber}>3</Text>
          </View>
          <View style={styles.stepTextContainer}>
            <Text style={styles.inactiveStepTitle}>Receive Insight & Start Investing</Text>
            <Text style={styles.inactiveStepDescription}>Get smart suggestions & start investing.</Text>
          </View>
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NameScreen')}>
        <Text style={styles.buttonText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#000' },
  description: { fontSize: 16, textAlign: 'center', marginVertical: 10, color: '#666' },

  stepsContainer: { marginTop: 20 },
  stepRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  
  activeCircle: { width: 30, height: 30, borderRadius: 15, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', marginRight: 10, borderColor: 'orange', borderWidth: 2 },
  inactiveCircle: { width: 30, height: 30, borderRadius: 15, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginRight: 10, borderColor: '#ccc', borderWidth: 2 },
  activeNumber: { color: '#fff', fontWeight: 'bold' },
  inactiveNumber: { color: '#ccc', fontWeight: 'bold' },

  stepTextContainer: { flex: 1 },
  stepTitle: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  stepDescription: { fontSize: 14, color: '#666' },

  inactiveStepTitle: { fontSize: 16, fontWeight: 'bold', color: '#aaa' },
  inactiveStepDescription: { fontSize: 14, color: '#bbb' },

  button: { backgroundColor: '#F7941D', padding: 15, borderRadius: 30, marginTop: 30, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});


