import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const AIHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Illustration */}
      <Image source={require('../../../assets/robo.png')} style={{ width: 100, height: 100 }} />


      {/* Title & Subtitle */}
      <Text style={styles.title}>Meet Your Personal AI Robo-advisor</Text>
      <Text style={styles.subtitle}>Meet Midas AI, your smart robo-advisor to help grow your portfolio.</Text>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PrecautionsScreen')}>
        <Text style={styles.buttonText}>Get Started →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AIHomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  illustration: { width: 250, height: 200, resizeMode: 'contain', marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', color: '#555', marginBottom: 20 },
  button: { backgroundColor: '#F7941D', padding: 15, borderRadius: 10, marginTop: 20, alignItems: 'center', width: '100%' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
