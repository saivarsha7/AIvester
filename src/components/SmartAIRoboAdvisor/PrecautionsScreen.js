import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PrecautionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Precautions & Limitations</Text>
      <Text style={styles.subtitle}>Before we begin, please note several precautions from us.</Text>

      {/* Warning Cards */}
      <View style={styles.warningCard}>
        <Text style={styles.warningTitle}>📉 Inaccurateness</Text>
        <Text style={styles.warningText}>Midas AI may occasionally generate inaccurate information.</Text>
      </View>

      <View style={styles.warningCard}>
        <Text style={styles.warningTitle}>⚠️ Imperfect</Text>
        <Text style={styles.warningText}>Midas is not a financial advisor. Always review your portfolio decisions.</Text>
      </View>

      <View style={styles.warningCard}>
        <Text style={styles.warningTitle}>💡 Consult a Real Advisor</Text>
        <Text style={styles.warningText}>Always consult a financial advisor to get accurate insights and portfolio guidance.</Text>
      </View>

      {/* Acknowledge Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatScreen')}>
        <Text style={styles.buttonText}>I acknowledge the limitations ✔</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrecautionsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', color: '#555', marginBottom: 20 },
  button: { backgroundColor: '#F7941D', padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center', width: '100%' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  warningCard: { backgroundColor: '#F8F8F8', padding: 15, borderRadius: 10, marginVertical: 5, width: '100%' },
  warningTitle: { fontSize: 16, fontWeight: 'bold' },
  warningText: { fontSize: 14, color: '#666' },
});
