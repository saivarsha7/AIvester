import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomNavigation from "../../HomesAndActivities/BottomNavigation";

const popularStocks = [
  { id: "1", name: "Tesla", price: "$810.50", change: "+2.5%", image: require("../../../../assets/tesla.png") },
  { id: "2", name: "Apple", price: "$150.00", change: "+1.2%", image: require("../../../../assets/apple.png") },
  { id: "3", name: "Microsoft", price: "$299.50", change: "+0.8%", image: require("../../../../assets/microsoft.png") },
  { id: "4", name: "Amazon", price: "$120.00", change: "+3.0%", image: require("../../../../assets/amazon.png") },
];

const MostPopularScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🔥 Most Popular Stocks</Text>
      <Text style={styles.subHeading}>Trending stocks in the market</Text>

      <FlatList
        data={popularStocks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.stockItem} onPress={() => alert(`Clicked on ${item.name}`)}>
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

export default MostPopularScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
    paddingBottom: 80,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 14,
    color: "#555",
    marginBottom: 15,
  },
  stockItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stockImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  stockDetails: {
    flex: 1,
  },
  stockName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },
  stockPrice: {
    fontSize: 15,
    color: "#444",
  },
  stockChange: {
    fontSize: 15,
    fontWeight: "600",
  },
  red: {
    color: "#d9534f",
  },
  green: {
    color: "#5cb85c",
  },
  bottomNavContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 10,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
});
