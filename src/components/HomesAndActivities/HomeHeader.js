import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // or 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={require('../../../assets/profile-icon.png')} style={styles.profileImage} />
      </TouchableOpacity>

      <Text style={styles.title}>Home</Text>

      <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
        <FontAwesome name="bell" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1E1E1E',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HomeHeader;
