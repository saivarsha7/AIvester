import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PortfolioAllocationScreen = () => {
  return (
    <View style={styles.container}>
      {/* User Question */}
      <View style={styles.chatBubbleUser}>
        <Text style={styles.chatTextUser}>Hi Midas, what's my current asset allocation for all of my portfolio?</Text>
      </View>

      {/* AI Response */}
      <View style={styles.chatBubbleAI}>
        <Text style={styles.chatTextAI}>Certainly! Here is a detailed breakdown of your asset portfolio.</Text>

        {/* Portfolio Breakdown Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>My Portfolio</Text>
          <Text style={styles.cardSubtitle}>Jan 2025</Text>
          <Image source={require('../../assets/port.png')} style={styles.chartImage} />
          <Text style={styles.cardTotal}>Total: $40,356.26</Text>
          <Text style={styles.cardReturn}>Variation: -4.25%</Text>
        </View>
      </View>

      {/* User Reply */}
      <View style={styles.chatBubbleUser}>
        <Text style={styles.chatTextUser}>Thanks, Midas!</Text>
      </View>
    </View>
  );
};

export default PortfolioAllocationScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', padding: 15 },
  chatBubbleUser: { alignSelf: 'flex-end', backgroundColor: '#F7941D', padding: 10, borderRadius: 10, marginVertical: 5 },
  chatTextUser: { color: '#fff', fontSize: 16 },
  chatBubbleAI: { alignSelf: 'flex-start', backgroundColor: '#fff', padding: 10, borderRadius: 10, marginVertical: 5 },
  chatTextAI: { color: '#333', fontSize: 16 },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginVertical: 10, alignItems: 'center' },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  cardSubtitle: { fontSize: 14, color: '#888' },
  chartImage: { width: 150, height: 150, marginVertical: 10 },
  cardTotal: { fontSize: 16, fontWeight: 'bold' },
  cardReturn: { fontSize: 14, color: '#d9534f' },
});
