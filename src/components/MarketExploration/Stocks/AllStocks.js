// import React from "react";
// import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";

// const stockData = [
//   { id: "1", name: "Tesla", price: "$810.50", change: "-2.5%", image: require("../../../../assets/tesla.png") },
//   { id: "2", name: "Apple", price: "$150.00", change: "+1.2%", image: require("../../../../assets/apple.png") },
//   { id: "3", name: "Microsoft", price: "$299.50", change: "-0.8%", image: require("../../../../assets/microsoft.png") },
//   { id: "4", name: "Amazon", price: "$120.00", change: "+2.3%", image: require("../../../../assets/amazon.png") },
//   { id: "5", name: "Google", price: "$2800.00", change: "+0.5%", image: require("../../../../assets/google.png") },
//   { id: "6", name: "Meta", price: "$330.00", change: "-1.4%", image: require("../../../../assets/meta.png") },
//   { id: "7", name: "Netflix", price: "$410.00", change: "+0.9%", image: require("../../../../assets/netflix.png") },
// ];

// const AllStocks = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>All Stocks 📈</Text>
//       <Text style={styles.subHeading}>Explore active top securities</Text>

//       <View style={styles.filters}>
//         <Text style={styles.filterButton}>🔍 Tech</Text>
//         <Text style={styles.filterButton}>📈 Top Gainers</Text>
//         <Text style={styles.filterButton}>📉 Top Losers</Text>
//       </View>


//       <FlatList
//         data={stockData}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.stockItem}>
//             <Image source={item.image} style={styles.stockImage} />
//             <View style={styles.stockDetails}>
//               <Text style={styles.stockName}>{item.name}</Text>
//               <Text style={styles.stockPrice}>{item.price}</Text>
//             </View>
//             <Text style={[styles.stockChange, item.change.includes("-") ? styles.red : styles.green]}>
//               {item.change}
//             </Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// export default AllStocks;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#121212", padding: 20 },
//   heading: { fontSize: 22, fontWeight: "bold", color: "white", marginBottom: 10 },
//   stockItem: { flexDirection: "row", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor: "#444" },
//   stockImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
//   stockDetails: { flex: 1 },
//   stockName: { fontSize: 16, color: "white" },
//   stockPrice: { fontSize: 16, color: "white" },
//   stockChange: { fontSize: 16 },
//   red: { color: "red" },
//   green: { color: "green" },
//   subHeading: {
//     fontSize: 14,
//     color: "#aaa",
//     marginBottom: 15,
//   },
//   searchBar: {
//     backgroundColor: "#222",
//     color: "white",
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   filters: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 10,
//   },
//   filterButton: {
//     backgroundColor: "#333",
//     color: "white",
//     padding: 8,
//     borderRadius: 5,
//     fontSize: 14,
//   },
// });


import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput } from "react-native";
import BottomNavigation from "../../HomesAndActivities/BottomNavigation" // Import your existing Bottom Navigation

const stockData = [
  { id: "1", name: "Tesla", price: "$810.50", change: "-2.5%", image: require("../../../../assets/tesla.png") },
  { id: "2", name: "Apple", price: "$150.00", change: "+1.2%", image: require("../../../../assets/apple.png") },
  { id: "3", name: "Microsoft", price: "$299.50", change: "-0.8%", image: require("../../../../assets/microsoft.png") },
  { id: "4", name: "Amazon", price: "$120.00", change: "+2.3%", image: require("../../../../assets/amazon.png") },
  { id: "5", name: "Google", price: "$2800.00", change: "+0.5%", image: require("../../../../assets/google.png") },
  { id: "6", name: "Meta", price: "$330.00", change: "-1.4%", image: require("../../../../assets/meta.png") },
  { id: "7", name: "Netflix", price: "$410.00", change: "+0.9%", image: require("../../../../assets/netflix.png") },
];

const AllStocks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter stocks based on search query
  const filteredStocks = stockData.filter((stock) =>
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>All Stocks 📈</Text>
      <Text style={styles.subHeading}>Explore active top securities</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search stocks..."
        placeholderTextColor="#aaa"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      {/* Filter Buttons */}
      <View style={styles.filters}>
        <Text style={styles.filterButton}>🔍 Tech</Text>
        <Text style={styles.filterButton}>📈 Top Gainers</Text>
        <Text style={styles.filterButton}>📉 Top Losers</Text>
        <TouchableOpacity 
          style={styles.filterButton} 
          onPress={() => navigation.navigate("MostPopularScreen")}
        >
          <Text style={{ color: "white" }}>🔥 Most Popular</Text>
        </TouchableOpacity>
      </View>

      {/* Stock List */}
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

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <BottomNavigation />
      </View>
    </View>
  );
};

export default AllStocks;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", padding: 20, paddingBottom: 60 },
  heading: { fontSize: 22, fontWeight: "bold", color: "white", marginBottom: 10 },
  subHeading: { fontSize: 14, color: "#aaa", marginBottom: 15 },
  searchBar: {
    backgroundColor: "#222",
    color: "white",
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
    backgroundColor: "#333",
    color: "white",
    padding: 8,
    borderRadius: 5,
    fontSize: 14,
  },
  stockItem: { flexDirection: "row", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor: "#444" },
  stockImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  stockDetails: { flex: 1 },
  stockName: { fontSize: 16, color: "white" },
  stockPrice: { fontSize: 16, color: "white" },
  stockChange: { fontSize: 16 },
  red: { color: "red" },
  green: { color: "green" },

  bottomNavContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#222", // Ensure it's visible
  },
});
