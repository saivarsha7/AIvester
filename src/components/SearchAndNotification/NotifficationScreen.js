import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const notifications = [
  { id: '1', title: 'Portfolio Performance Update', message: 'Your portfolio is down -2% today. 📉', time: '1h ago' },
  { id: '2', title: 'Price Alert Triggered!', message: 'TSLA has reached your target price of 128.88 📈', action: 'View Stock', time: '1h ago' },
  { id: '3', title: 'Investment Progress Update', message: "You're 30% towards reaching your Vacation Savings Portfolio! ✈️", time: '1h ago' },
  { id: '4', title: 'Recurring Investment Reminder', message: 'Your weekly purchase of 5 shares ($125.85) of $NVDA is near. 🏦', time: '3d from now' },
  { id: '5', title: 'Deposit Successful', message: "We've successfully deposited $50 to your investment account.", time: '1h ago' },
  { id: '6', title: 'Transfer Pending', message: 'Your $85.11 transfer to Julie Andrews is currently pending.', time: '1h ago' },
];

const NotificationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Clear Messages Button */}
      <TouchableOpacity style={styles.clearButton} onPress={() => navigation.navigate('EmptyNotificationsScreen')}>
        <Text style={styles.clearButtonText}>Clear Messages</Text>
      </TouchableOpacity>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.message}>{item.message}</Text>
            {item.action && <TouchableOpacity><Text style={styles.actionText}>{item.action} →</Text></TouchableOpacity>}
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', padding: 15 },
  clearButton: { backgroundColor: '#FF6B6B', padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 10 },
  clearButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  notificationCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginVertical: 5 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  message: { fontSize: 14, color: '#666', marginVertical: 5 },
  actionText: { color: '#F7941D', fontWeight: 'bold', marginTop: 5 },
  time: { fontSize: 12, color: '#888', marginTop: 5 },
});
