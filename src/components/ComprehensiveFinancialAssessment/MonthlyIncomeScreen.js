import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MonthlyIncomeScreen({ navigation }) {
  const [income, setIncome] = useState(5000);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How much money are you making monthly?</Text>
      <View style={styles.incomeContainer}>
        <TouchableOpacity onPress={() => setIncome(Math.max(income - 500, 500))} style={styles.buttonRound}>
          <Text style={styles.symbol}>-</Text>
        </TouchableOpacity>
        <Text style={styles.incomeText}>${income.toLocaleString()}</Text>
        <TouchableOpacity onPress={() => setIncome(income + 500)} style={styles.buttonRound}>
          <Text style={styles.symbol}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.caption}>I make around ${income.toLocaleString()} monthly.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InvestmentPercentageScreen')}>
        <Text style={styles.buttonText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  incomeContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  buttonRound: { backgroundColor: '#F7941D', borderRadius: 50, padding: 10, margin: 10 },
  symbol: { fontSize: 24, color: '#fff' },
  incomeText: { fontSize: 32, fontWeight: 'bold', color: '#F7941D' },
  caption: { textAlign: 'center', marginVertical: 10 },
  button: { backgroundColor: '#F7941D', padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18 },
});
