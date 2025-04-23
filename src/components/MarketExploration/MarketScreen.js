import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "./SearchBar";
import MarketStats from "./MarketStats";
import PopularMovements from "./PopularMovements";
import TrendingAssets from "./TrendingAssets";
import MarketMovers from "./MarketMovers";
import MarketIndexes from "./MarketIndexes";
import MyListings from "./MyListings";
import SectorPerformance from "./SectorPerformance";
import NewsArticles from "./NewsArticles";
import NoDataAvailable from "./NoDataAvailable";
import BottomNavigation from "../HomesAndActivities/BottomNavigation";

const MarketScreen = () => {
  const navigation = useNavigation();

  const components = [
    { id: "1", component: <PopularMovements /> },
    { id: "2", component: <TrendingAssets /> },
    { id: "3", component: <MarketMovers /> },
    { id: "4", component: <MarketIndexes /> },
    { id: "5", component: <MyListings /> },
    { id: "6", component: <SectorPerformance /> },
    { id: "7", component: <NewsArticles /> },
    { id: "8", component: <NoDataAvailable /> },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.heading}>Explore Market</Text>
      <Text style={styles.subHeading}>
        Explore market statistics, stocks, ETFs, and other assets in real time.
      </Text>

      {/* Search */}
      <SearchBar />

      {/* Market Statistics */}
      <MarketStats />

      {/* View All Stocks Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AllStocks")}
      >
        <Text style={styles.buttonText}>View All Stocks</Text>
      </TouchableOpacity>

      {/* Dynamic Sections */}
      <FlatList
        data={components}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => item.component}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <BottomNavigation />
    </View>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6B00",
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 14,
    color: "#555",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#FF6B00",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 16,
    shadowColor: "#FF6B00",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
