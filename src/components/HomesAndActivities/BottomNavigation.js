
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';


const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNav}>
      
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('WebViewScreen')}>

        <Image source={require('../../../assets/portfolio-icon.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Portfolio</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => navigation.navigate("MarketScreen")} // Navigate to MarketScreen
      >
        <Image source={require('../../../assets/market-icon.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Market</Text>
      </TouchableOpacity>
      <TouchableOpacity 
  style={styles.navItem}
  onPress={() => navigation.navigate("AIHomeScreen")}
>
        <Image source={require('../../../assets/ai-icon.png')} style={styles.navIcon} />
        <Text style={styles.navText}>AIvestor</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FF9E2C',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  navItem: { alignItems: 'center' },
  navIcon: { width: 24, height: 24, marginBottom: 5 },
  navText: { color: '#fff', fontSize: 12 },
});

export default BottomNavigation;
