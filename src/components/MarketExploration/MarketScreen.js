// import React from "react";
// import { View, Text, StyleSheet, ScrollView } from "react-native";
// import SearchBar from "./SearchBar";
// import MarketStats from "./MarketStats";
// import PopularMovements from "./PopularMovements";
// import TrendingAssets from "./TrendingAssets";
// import MarketIndexes from "./MarketIndexes";
// const MarketScreen = () => {
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <Text style={styles.heading}>Explore Market</Text>
//       <Text style={styles.subHeading}>
//         Explore market statistics, stocks, ETFs, and other assets in real time.
//       </Text>

//       {/* Search Bar */}
//       <SearchBar />

//       {/* Market Stats */}
//       <MarketStats />

//       {/* Popular Movements */}
//       <ScrollView nestedScrollEnabled={true}  showsVerticalScrollIndicator={false}>
//         <PopularMovements />
//         <TrendingAssets />
//         <MarketIndexes />
//       </ScrollView>
//     </View>
//   );
// };

// export default MarketScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#121212",
//     padding: 20,
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "white",
//     marginBottom: 5,
//   },
//   subHeading: {
//     fontSize: 14,
//     color: "#aaa",
//     marginBottom: 15,
//   },
// });
import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook
import SearchBar from "./SearchBar";
import MarketStats from "./MarketStats";
import PopularMovements from "./PopularMovements";
import TrendingAssets from "./TrendingAssets";
import MarketIndexes from "./MarketIndexes";
import MarketMovers from "./MarketMovers";
import MyListings from "./MyListings";
import SectorPerformance from "./SectorPerformance";
import NewsArticles from "./NewsArticles";
import NoDataAvailable from "./NoDataAvailable";
import BottomNavigation from "../HomesAndActivities/BottomNavigation";

const MarketScreen = () => {
  const navigation = useNavigation(); // Get navigation object

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
      <Text style={styles.heading}>Explore Market</Text>
      <Text style={styles.subHeading}>
        Explore market statistics, stocks, ETFs, and other assets in real time.
      </Text>

      <SearchBar />
      <MarketStats />

      {/* Button to Navigate to AllStocks */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("AllStocks")}
      >
        <Text style={styles.buttonText}>View All Stocks</Text>
      </TouchableOpacity>

      <FlatList
        data={components}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => item.component}
        showsVerticalScrollIndicator={false}
      />

      <BottomNavigation />
    </View>
  );
};

export default MarketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
