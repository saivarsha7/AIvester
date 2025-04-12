import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function NameScreen({ navigation }) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to InvestAI! Let’s set up your profile.</Text>
      <Text style={styles.title}>What is your full legal name?</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GenderScreen')}
      >
        <Text style={styles.buttonText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  welcomeText: { fontSize: 16, color: '#666', marginBottom: 10, textAlign: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, borderRadius: 8, fontSize: 16 },
  button: { backgroundColor: '#F7941D', padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18 },
});
