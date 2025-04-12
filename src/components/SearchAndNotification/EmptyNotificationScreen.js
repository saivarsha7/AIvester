import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EmptyNotificationsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Illustration or Message */}
      <Text style={styles.message}>You're all caught up.</Text>
      <Text style={styles.subMessage}>There are no notifications to show.</Text>

      {/* Pull to refresh prompt */}
      <TouchableOpacity style={styles.refreshButton}>
        <Text style={styles.refreshText}>⬆ Pull to refresh</Text>
      </TouchableOpacity>

      {/* Search Anything Button */}
      <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('SearchScreen')}>
        <Text style={styles.searchButtonText}>Search Anything</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyNotificationsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f8f8', padding: 15 },
  message: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  subMessage: { fontSize: 16, color: '#666', marginVertical: 5 },
  refreshButton: { marginVertical: 10 },
  refreshText: { fontSize: 14, color: '#888' },
  searchButton: { backgroundColor: '#F7941D', padding: 12, borderRadius: 10, marginTop: 20 },
  searchButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
