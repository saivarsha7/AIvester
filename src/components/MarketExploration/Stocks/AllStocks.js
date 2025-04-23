import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import BottomNavigation from "../../HomesAndActivities/BottomNavigation";

const stockData = [
  { id: "1", name: "Tesla", price: "$810.50", change: "-2.5%", image: require("../../../../assets/tesla.png") },
  { id: "2", name: "Apple", price: "$150.00", change: "+1.2%", image: require("../../../../assets/apple.png") },
  { id: "3", name: "Microsoft", price: "$299.50", change: "-0.8%", image: require("../../../../assets/microsoft.png") },
  { id: "4", name: "Amazon", price: "$120.00", change: "+2.3%", image: require("../../../../assets/amazon.png") },
  { id: "5", name: "Google", price: "$2800.00", change: "+0.5%", image: require("../../../../assets/google.png") },
  { id: "6", name: "Meta", price: "$330.00", change: "-1.4%", image: require("../../../../assets/meta.png") },
  { id: "7", name: "Netflix", price: "$410.00", change: "+0.9%", image: require("../../../../assets/netflix.png") },
];

const AllStocks = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStocks = stockData.filter((stock) =>
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📈 All Stocks</Text>
      <Text style={styles.subHeading}>Explore active top securities</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search stocks..."
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <View style={styles.filters}>
        <Text style={styles.filterButton}>🔍 Tech</Text>
        <Text style={styles.filterButton}>📈 Top Gainers</Text>
        <Text style={styles.filterButton}>📉 Top Losers</Text>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation?.navigate("MostPopularScreen")}
        >
          <Text style={{ color: "#333" }}>🔥 Most Popular</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredStocks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.stockItem}>
            <Image source={item.image} style={styles.stockImage} />
            <View style={styles.stockDetails}>
              <Text style={styles.stockName}>{item.name}</Text>
              <Text style={styles.stockPrice}>{item.price}</Text>
            </View>
            <Text style={[styles.stockChange, item.change.includes("-") ? styles.red : styles.green]}>
              {item.change}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.bottomNavContainer}>
        <BottomNavigation />
      </View>
    </View>
  );
};

export default AllStocks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
    paddingBottom: 60,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#212529",
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 14,
    color: "#495057",
    marginBottom: 12,
  },
  searchBar: {
    backgroundColor: "#e9ecef",
    color: "#212529",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: "#dee2e6",
    color: "#212529",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 13,
  },
  stockItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#ced4da",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginVertical: 5,
    elevation: 2,
  },
  stockImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  stockDetails: {
    flex: 1,
  },
  stockName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212529",
  },
  stockPrice: {
    fontSize: 15,
    color: "#495057",
  },
  stockChange: {
    fontSize: 15,
    fontWeight: "500",
  },
  red: {
    color: "#dc3545",
  },
  green: {
    color: "#28a745",
  },
  bottomNavContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderColor: "#dee2e6",
  },
});
