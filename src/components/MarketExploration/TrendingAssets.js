import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AssetCard from "./AssetCard";

// const assets = [
//   { id: "1", name: "Bitcoin", price: "$43,000", change: "+2.5%", color: "#f7931a" },
//   { id: "2", name: "Ethereum", price: "$3,100", change: "+1.8%", color: "#627eea" },
//   { id: "3", name: "Apple Inc", price: "$178.20", change: "-0.5%", color: "#aaa" },
// ];
const assets = [
    { id: "1", name: "Bitcoin", ticker: "BTC", price: "$43,000", change: "+2.5%", icon: require("../../../assets/bitcoin.png") },
    { id: "2", name: "Ethereum", ticker: "ETH", price: "$3,100", change: "+1.8%", icon: require("../../../assets/ethereum.png") },
    { id: "3", name: "Apple Inc", ticker: "AAPL", price: "$178.20", change: "-0.5%", icon: require("../../../assets/apple.png") },
  ];
  

const TrendingAssets = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Assets</Text>
      <FlatList
        horizontal
        data={assets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AssetCard asset={item} />}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

export default TrendingAssets;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
