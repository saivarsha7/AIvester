// // BottomNavigation.js
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';


// const BottomNavigation = () => {
//   return (
//     <View style={styles.bottomNav}>
//       <TouchableOpacity style={styles.navItem}>
//         <Image source={require('../../../assets/home.png')} style={styles.navIcon} />
//         <Text style={styles.navText}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.navItem}>
//         <Image source={require('../../../assets/portfolio-icon.png')} style={styles.navIcon} />
//         <Text style={styles.navText}>Portfolio</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.navItem}>
//         <Image source={require('../../../assets/market-icon.png')  }  onPress={() => navigation.navigate('MarketScreen')} style={styles.navIcon} />
//         <Text style={styles.navText}>Market</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.navItem}>
//         <Image source={require('../../../assets/ai-icon.png')} style={styles.navIcon} />
//         <Text style={styles.navText}>midas AI</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.navItem}>
//         <Image source={require('../../../assets/transfer-icon.png')} style={styles.navIcon} />
//         <Text style={styles.navText}>Transfer</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.navItem}>
//         <Image source={require('../../../assets/profile-icon.png')} style={styles.navIcon} />
//         <Text style={styles.navText}>Profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: '#1E1E1E',
//     paddingVertical: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#333',
//   },
//   navItem: { alignItems: 'center' },
//   navIcon: { width: 24, height: 24, marginBottom: 5 },
//   navText: { color: '#fff', fontSize: 12 },
// });

// export default BottomNavigation;

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => navigation.navigate("HomesAndActivities")}
      >
        <Image source={require('../../../assets/home.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('PortfolioDashboard')}>
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
        <Text style={styles.navText}>midas AI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require('../../../assets/transfer-icon.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Transfer</Text>
      </TouchableOpacity>
      <TouchableOpacity 
  style={styles.navItem} 
  onPress={() => navigation.navigate("ProfileSetupScreen")} // <- navigate to the screen
>
        <Image source={require('../../../assets/profile-icon.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  navItem: { alignItems: 'center' },
  navIcon: { width: 24, height: 24, marginBottom: 5 },
  navText: { color: '#fff', fontSize: 12 },
});

export default BottomNavigation;
