import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import BottomNavigation from './BottomNavigation';
import Feedback from './Feedback';
import HomeHeader from './HomeHeader';
import { useNavigation } from '@react-navigation/native';

// Try importing NetWorthGraph - update the path below if needed
let NetWorthGraph;
try {
  NetWorthGraph = require('./NetWorthGraph').default;
} catch (error) {
  NetWorthGraph = () => (
    <View style={styles.fallbackGraph}>
      <Text style={styles.graphPlaceholderText}>[Graph temporarily unavailable]</Text>
    </View>
  );
}

const HomesAndActivitiesScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <HomeHeader />

        <View style={styles.netWorthContainer}>
          <Text style={styles.netWorthText}>$0.00</Text>
          <Text style={styles.netWorthSubtitle}>Current Net Worth</Text>
        </View>

        <NetWorthGraph />

        {/* Set Up Portfolio */}
        <View style={styles.section}>
          <Image source={require('../../../assets/portfolio.png')} style={styles.image} />
          <Text style={styles.title}>Set Up Portfolio</Text>
          <Text style={styles.description}>Let us build your portfolio to help make your first investment.</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InvestmentSetupScreen')}>
            <Text style={styles.buttonText}>Set Up Portfolio</Text>
          </TouchableOpacity>
        </View>

        {/* Market Performance */}
        <View style={styles.section}>
          <Image source={require('../../../assets/market.png')} style={styles.image} />
          <Text style={styles.title}>Market Performance</Text>
          <Text style={styles.description}>You have no market watchlist. Let’s set up market watch today.</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MarketScreen')}>
            <Text style={styles.buttonText}>Explore Markets</Text>
          </TouchableOpacity>
        </View>

        {/* Investment Goals */}
        <View style={styles.section}>
          <Image source={require('../../../assets/goals.png')} style={styles.image} />
          <Text style={styles.title}>Investment Goals</Text>
          <Text style={styles.description}>You have no goals. Let’s set one and start today.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Set a Goal</Text>
          </TouchableOpacity>
        </View>

        {/* Latest Activity */}
        <View style={styles.section}>
          <Image source={require('../../../assets/activity.png')} style={styles.image} />
          <Text style={styles.title}>Latest Activity</Text>
          <Text style={styles.description}>You have no latest activity. Your investment journey is just beginning.</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CommunityHomeScreen')}>
            <Text style={styles.buttonText}>Set a Goal</Text>
          </TouchableOpacity>
        </View>

        {/* News & Resources */}
        <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('NewsAndResourcesScreen')}>
          <Text style={styles.title}>News & Resources</Text>
          <View style={styles.newsContainer}>
            <Image source={require('../../../assets/news1.png')} style={styles.newsImage} />
            <Image source={require('../../../assets/news2.png')} style={styles.newsImage} />
          </View>
        </TouchableOpacity>

        {/* Feedback Section */}
        <Feedback />
      </ScrollView>

      <BottomNavigation />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff7e6',
  },
  section: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff0cc',
    padding: 15,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF8C00',
  },
  description: {
    fontSize: 14,
    color: '#FF6600',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FF9E2C',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  newsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  newsImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  netWorthContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  netWorthText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8C00',
  },
  netWorthSubtitle: {
    fontSize: 14,
    color: '#FF6600',
  },
  fallbackGraph: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  graphPlaceholderText: {
    fontStyle: 'italic',
    color: '#aaa',
  },
});

export default HomesAndActivitiesScreen;
