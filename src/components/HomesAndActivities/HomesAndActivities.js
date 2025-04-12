import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import BottomNavigation from './BottomNavigation';
import Feedback from './Feedback';
import HomeHeader from './HomeHeader';
import NetWorthGraph from './NetWorthGraph';
import { useNavigation } from '@react-navigation/native';

const HomesAndActivities = () => {
  const navigation = useNavigation();
  return (
    <>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    <HomeHeader />
    
      <View style={styles.netWorthContainer}>
        <Text style={styles.netWorthText}>$0,00</Text>
        <Text style={styles.netWorthSubtitle}>Current Net Worth</Text>
      </View>
      <NetWorthGraph />
      {/* Set Up Portfolio */}
      <View style={styles.section}>
        <Image source={require('../../../assets/portfolio.png')} style={styles.image} />
        <Text style={styles.title}>Set Up Portfolio</Text>
        <Text style={styles.description}>Let us build your portfolio to help make your first investment.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InvestmentSetup')}>
  <Text style={styles.buttonText}>Set Up Portfolio</Text>
</TouchableOpacity>

      </View>

      {/* Market Performance */}
      <View style={styles.section}>
        <Image source={require('../../../assets/market.png')} style={styles.image} />
        <Text style={styles.title}>Market Performance</Text>
        <Text style={styles.description}>You have no market watchlist. Let’s set up market watch today.</Text>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Explore Markets</Text></TouchableOpacity>
      </View>

      {/* Investment Goals */}
      <View style={styles.section}>
        <Image source={require('../../../assets/goals.png')} style={styles.image} />
        <Text style={styles.title}>Investment Goals</Text>
        <Text style={styles.description}>You have no goals. Let’s set one and start today.</Text>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Set a Goal</Text></TouchableOpacity>
      </View>

      {/* Latest Activity */}
      <View style={styles.section}>
        <Image source={require('../../../assets/activity.png')} style={styles.image} />
        <Text style={styles.title}>Latest Activity</Text>
        <Text style={styles.description}>You have no latest activity. Your investment journey is just beginning.</Text>
      </View>

      {/* News & Resources */}
      <TouchableOpacity 
          style={styles.section} 
          onPress={() => navigation.navigate('NewsAndResources')} // Navigate on press
        >
      <View style={styles.section}>
        <Text style={styles.title}>News & Resources</Text>
        <View style={styles.newsContainer}>
          <Image source={require('../../../assets/news1.png')} style={styles.newsImage} />
          <Image source={require('../../../assets/news2.png')} style={styles.newsImage} />
        </View>
      </View>
      </TouchableOpacity>

      {/* Feedback Section */}
      
  <Feedback/>
      
    </ScrollView>
    <BottomNavigation/>
    </>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#121212' },
    section: { marginBottom: 20, alignItems: 'center', backgroundColor: '#1E1E1E', padding: 15, borderRadius: 10 },
    image: { width: 100, height: 100, marginBottom: 10 },
    title: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
    description: { fontSize: 14, color: '#aaa', textAlign: 'center', marginBottom: 10 },
    button: { backgroundColor: '#f9a826', padding: 10, borderRadius: 5 },
    buttonText: { color: '#fff', fontWeight: 'bold' },
    newsContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
    newsImage: { width: 150, height: 100, borderRadius: 10 },
    feedbackSection: { alignItems: 'center', marginTop: 20 },
    feedbackIcons: { flexDirection: 'row', justifyContent: 'center', marginTop: 10 },
    feedbackImage: { width: 40, height: 40, marginHorizontal: 10 },
    container: { flex: 1, backgroundColor: '#121212' },
  netWorthContainer: { alignItems: 'center', marginTop: 20 },
  netWorthText: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  netWorthSubtitle: { fontSize: 14, color: '#aaa' },
  dashboardButton: {
    backgroundColor: '#f9a826',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 10,
  },
  dashboardButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  });
export default HomesAndActivities;
